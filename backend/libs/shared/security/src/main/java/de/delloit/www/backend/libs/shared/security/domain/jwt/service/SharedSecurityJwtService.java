package de.delloit.www.backend.libs.shared.security.domain.jwt.service;

import com.auth0.jwt.interfaces.DecodedJWT;
import de.delloit.www.backend.libs.shared.security.domain.jwt.error.SharedSecurityCreateAuthenticationError;
import de.delloit.www.backend.libs.shared.security.domain.jwt.error.SharedSecurityGenerateTokenError;
import de.delloit.www.backend.libs.shared.security.domain.jwt.error.SharedSecurityValidateTokenError;
import lombok.NonNull;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;

public interface SharedSecurityJwtService {

    DecodedJWT validateToken(@NonNull String token, @NonNull String iss) throws SharedSecurityValidateTokenError;

    String generateToken(@NonNull UserDetails userDetails, @NonNull String iss) throws SharedSecurityGenerateTokenError;

    Authentication createAuthentication(@NonNull String token, @NonNull String iss) throws SharedSecurityCreateAuthenticationError;
}
