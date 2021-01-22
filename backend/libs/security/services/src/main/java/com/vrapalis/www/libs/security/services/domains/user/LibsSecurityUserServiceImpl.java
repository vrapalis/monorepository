package com.vrapalis.www.libs.security.services.domains.user;

import com.vrapalis.www.libs.security.dtos.domains.user.LibsSecurityDtoUser;
import com.vrapalis.www.libs.security.entities.domains.user.LibsSecurityJpaUserEntity;
import com.vrapalis.www.libs.security.errors.domains.authentication.LibsSecurityErrorAuthentication;
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
    public ResponseEntity<LibsWebDtoServerAbstractResponse> signIn(LibsSecurityDtoUser signInUser)
            throws LibsSecurityErrorAuthentication {
        try {
            final var authenticationToken = new UsernamePasswordAuthenticationToken(signInUser.getEmail(),
                    signInUser.getPassword(), new ArrayList<>());
            final var authenticate = authenticationManager
                    .authenticate(authenticationToken);
            final var authenticatedUser = (UserDetails) authenticate.getPrincipal();
            final var userEntity = userRepository.findFirstByEmail(authenticatedUser.getUsername()).orElseThrow(EntityNotFoundException::new);
            System.out.println(jwtService.generateJwtToken(userEntity));
        } catch (Exception ex) {
            throw new LibsSecurityErrorAuthentication();
        }
        return null;
    }
}
