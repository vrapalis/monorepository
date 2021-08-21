package de.delloit.www.backend.apps.estatemanagement.authorization.domain.user.service;

import de.delloit.www.backend.apps.estatemanagement.authorization.domain.user.dto.UserSignInDto;
import de.delloit.www.backend.apps.estatemanagement.authorization.domain.user.dto.UserSignUpUserDto;
import de.delloit.www.backend.apps.estatemanagement.authorization.domain.user.error.UserSignInError;
import de.delloit.www.backend.apps.estatemanagement.authorization.domain.user.error.UserSignUpError;
import de.delloit.www.backend.libs.shared.dto.domain.server.AbstractServerResponseDto;
import lombok.NonNull;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService extends UserDetailsService {
    ResponseEntity<AbstractServerResponseDto> signUp(@NonNull UserSignUpUserDto signUpUser) throws UserSignUpError;

    ResponseEntity<AbstractServerResponseDto> signIn(@NonNull UserSignInDto signInUser) throws UserSignInError;
}
