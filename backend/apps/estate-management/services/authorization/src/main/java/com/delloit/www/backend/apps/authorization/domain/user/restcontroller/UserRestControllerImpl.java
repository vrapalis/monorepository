package com.delloit.www.backend.apps.authorization.domain.user.restcontroller;

import com.delloit.www.backend.apps.authorization.domain.common.error.BeanValidationError;
import com.delloit.www.backend.apps.authorization.domain.user.dto.UserSignInDto;
import com.delloit.www.backend.apps.authorization.domain.user.dto.UserSignInSuccessResponseDto;
import com.delloit.www.backend.apps.authorization.domain.user.dto.UserSignUpUserDto;
import com.delloit.www.backend.apps.authorization.domain.user.error.UserSignInError;
import com.delloit.www.backend.apps.authorization.domain.user.error.UserSignUpError;
import com.delloit.www.backend.libs.shared.dto.domain.server.AbstractServerResponseDto;
import com.delloit.www.backend.libs.shared.dto.domain.server.SuccessServerResponseDto;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserRestControllerImpl implements UserRestController {

    @Override
    public ResponseEntity<AbstractServerResponseDto> signIn(UserSignInDto signInUser, BindingResult result)
            throws UserSignInError, BeanValidationError {
        return ResponseEntity.ok(new UserSignInSuccessResponseDto("Have to be done generated jwt based on user roles",
                "Success", "User sign in success"));
    }

    @Override
    public ResponseEntity<AbstractServerResponseDto> signUp(UserSignUpUserDto signUpUser, BindingResult result)
            throws UserSignUpError, BeanValidationError {
        return ResponseEntity.ok(new SuccessServerResponseDto("Success", "Sign up success"));
    }
}
