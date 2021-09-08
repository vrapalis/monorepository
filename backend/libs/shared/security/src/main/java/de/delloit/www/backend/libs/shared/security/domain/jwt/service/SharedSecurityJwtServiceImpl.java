package de.delloit.www.backend.libs.shared.security.domain.jwt.service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import de.delloit.www.backend.libs.shared.security.domain.jwt.error.SharedSecurityCreateAuthenticationError;
import de.delloit.www.backend.libs.shared.security.domain.jwt.error.SharedSecurityGenerateTokenError;
import de.delloit.www.backend.libs.shared.security.domain.jwt.error.SharedSecurityValidateTokenError;
import lombok.AllArgsConstructor;
import lombok.NonNull;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.Date;
import java.util.stream.Collectors;

import static de.delloit.www.backend.libs.shared.security.domain.jwt.util.ESharedSecurityJwtClaims.*;

@Service
@AllArgsConstructor
public class SharedSecurityJwtServiceImpl implements SharedSecurityJwtService {

    @Override
    public DecodedJWT validateToken(@NonNull String token, @NonNull String iss) throws SharedSecurityValidateTokenError {
        try {
            JWTVerifier verifier = getVerifier(iss);
            return verifier.verify(token);
        } catch (JWTVerificationException exception) {
            throw new SharedSecurityValidateTokenError();
        }
    }

    @Override
    public String generateToken(@NonNull UserDetails userDetails, @NonNull String iss) throws SharedSecurityGenerateTokenError {
        try {
            String token = JWT.create()
                    .withIssuer(iss)
                    .withSubject(userDetails.getUsername())
                    .withClaim(IS_ACCOUNT_NON_EXPIRED.getClaimName(), userDetails.isAccountNonExpired())
                    .withClaim(IS_ACCOUNT_NON_LOCKED.getClaimName(), userDetails.isAccountNonLocked())
                    .withClaim(IS_CREDENTIALS_NON_EXPIRED.getClaimName(), userDetails.isCredentialsNonExpired())
                    .withClaim(IS_ENABLED.getClaimName(), userDetails.isEnabled())
                    .withClaim(AUTHORITIES.getClaimName(), userDetails.getAuthorities().stream()
                            .map(GrantedAuthority::getAuthority)
                            .collect(Collectors.toList()))
                    .withIssuedAt(new Date())
                    .sign(getAlgorithm());
            return token;
        } catch (JWTCreationException exception) {
            throw new SharedSecurityGenerateTokenError();
        }
    }

    @Override
    public Authentication createAuthentication(@NonNull String token, @NonNull String iss) throws SharedSecurityCreateAuthenticationError {
        try {
            final var decodedJWT = this.validateToken(token, iss);
            final var user = User.builder()
                    .username(decodedJWT.getSubject())
                    .accountExpired(decodedJWT.getClaim(IS_ACCOUNT_NON_EXPIRED.getClaimName()).asBoolean())
                    .accountLocked(decodedJWT.getClaim(IS_ACCOUNT_NON_LOCKED.getClaimName()).asBoolean())
                    .credentialsExpired(decodedJWT.getClaim(IS_CREDENTIALS_NON_EXPIRED.getClaimName()).asBoolean())
                    .disabled(decodedJWT.getClaim(IS_ENABLED.getClaimName()).asBoolean())
                    .password("")
                    .authorities(Arrays.stream(decodedJWT.getClaim(AUTHORITIES.getClaimName()).asArray(String.class))
                            .map(authority -> new SimpleGrantedAuthority(authority)).collect(Collectors.toList()))
                    .build();
            return new UsernamePasswordAuthenticationToken(user, user.getAuthorities());
        } catch (SharedSecurityValidateTokenError e) {
            throw new SharedSecurityCreateAuthenticationError();
        }
    }

    private Algorithm getAlgorithm() {
        return Algorithm.HMAC256("secret");
    }

    private JWTVerifier getVerifier(String iss) {
        JWTVerifier verifier = JWT.require(getAlgorithm())
                .withIssuer(iss)
                .acceptExpiresAt(259200)
                .build();
        return verifier;
    }
}
