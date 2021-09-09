package de.delloit.www.backend.apps.estatemanagement.authorization.domain.user.restcontroller;

import de.delloit.www.backend.apps.estatemanagement.authorization.domain.user.dto.UserSignInDto;
import de.delloit.www.backend.apps.estatemanagement.authorization.domain.user.dto.UserSignUpUserDto;
import de.delloit.www.backend.apps.estatemanagement.authorization.domain.user.error.UserSignInError;
import de.delloit.www.backend.apps.estatemanagement.authorization.domain.user.error.UserSignUpError;
import de.delloit.www.backend.apps.estatemanagement.authorization.domain.user.service.UserService;
import de.delloit.www.backend.libs.shared.assertion.domain.common.CommonSharedAssertions;
import de.delloit.www.backend.libs.shared.dto.domain.server.AbstractServerResponseDto;
import de.delloit.www.backend.libs.shared.error.domain.common.BeanValidationSharedError;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

// TODO HANDLE CORS
@CrossOrigin
@RestController
@AllArgsConstructor
public class UserRestControllerImpl implements UserRestController {
    private UserService userService;

    @Override
    public ResponseEntity<AbstractServerResponseDto> signIn(UserSignInDto signInUser, BindingResult result)
            throws UserSignInError, BeanValidationSharedError {
        CommonSharedAssertions.assertNoBeanValidationErrors(result);
        return userService.signIn(signInUser);
    }

    @Override
    public ResponseEntity<AbstractServerResponseDto> signUp(UserSignUpUserDto signUpUser, BindingResult result)
            throws UserSignUpError, BeanValidationSharedError {
        CommonSharedAssertions.assertNoBeanValidationErrors(result);
        return userService.signUp(signUpUser);
    }
}
