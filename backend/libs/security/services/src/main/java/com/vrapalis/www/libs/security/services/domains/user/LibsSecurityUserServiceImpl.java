package com.vrapalis.www.libs.security.services.domains.user;

import com.vrapalis.www.libs.security.dtos.domains.user.LibsSecurityDtoSignInSuccess;
import com.vrapalis.www.libs.security.dtos.domains.user.LibsSecurityDtoSignInUser;
import com.vrapalis.www.libs.security.dtos.domains.user.LibsSecurityDtoSignUpUser;
import com.vrapalis.www.libs.security.errors.domains.authentication.LibsSecurityErrorSignIn;
import com.vrapalis.www.libs.security.errors.domains.authentication.LibsSecurityErrorSignUp;
import com.vrapalis.www.libs.security.repositories.domains.user.LibsSecurityJpaUserEntityRepository;
import com.vrapalis.www.libs.security.services.domains.jwt.LibsSecurityJwtService;
import com.vrapalis.www.libs.web.dto.LibsWebDtoServerAbstractResponse;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import java.util.ArrayList;

@Service
@Transactional
@AllArgsConstructor
public class LibsSecurityUserServiceImpl implements LibsSecurityUserService {
    private LibsSecurityJpaUserEntityRepository userRepository;
    private AuthenticationManager authenticationManager;
    private LibsSecurityJwtService jwtService;

    @Override
    public ResponseEntity<LibsWebDtoServerAbstractResponse> signIn(LibsSecurityDtoSignInUser signInUser)
            throws LibsSecurityErrorSignIn {
        LibsSecurityDtoSignInSuccess authenticationSuccess;
        try {
            final var authenticationToken = new UsernamePasswordAuthenticationToken(signInUser.getEmail(),
                    signInUser.getPassword(), new ArrayList<>());
            final var authenticate = authenticationManager
                    .authenticate(authenticationToken);
            final var authenticatedUser = (UserDetails) authenticate.getPrincipal();
            final var userEntity = userRepository.findFirstByEmail(authenticatedUser.getUsername()).orElseThrow(EntityNotFoundException::new);
            authenticationSuccess = LibsSecurityDtoSignInSuccess.builder()
                    .jwt(jwtService.generateJwtToken(userEntity))
                    .build();
        } catch (Exception ex) {
            throw new LibsSecurityErrorSignIn();
        }
        return ResponseEntity.ok(authenticationSuccess);
    }

    @Override
    public ResponseEntity<LibsWebDtoServerAbstractResponse> signUp(LibsSecurityDtoSignUpUser signUpUser) throws LibsSecurityErrorSignUp {
        return null;
    }
}
