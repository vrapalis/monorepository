package com.vrapalis.www.libs.security.restcontrollers.domains.user;

import com.vrapalis.www.libs.assertions.LibsAssertions;
import com.vrapalis.www.libs.errors.LibsErrorBeanValidation;
import com.vrapalis.www.libs.security.dtos.domains.user.*;
import com.vrapalis.www.libs.security.errors.domains.user.*;
import com.vrapalis.www.libs.security.services.domains.user.LibsSecurityUserService;
import com.vrapalis.www.libs.web.dto.LibsWebDtoServerAbstractResponse;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@AllArgsConstructor
public class LibsSecurityWebUserRestControllerImpl implements LibsSecurityWebUserRestController {
    private LibsSecurityUserService userService;

    @Override
    public ResponseEntity<LibsWebDtoServerAbstractResponse> signIn(LibsSecurityDtoSignInUser signInUser, BindingResult result)
            throws LibsErrorBeanValidation, LibsSecurityErrorSignIn {
        LibsAssertions.assertNoBeanValidationErrors(result);
        return userService.signIn(signInUser);
    }

    @Override
    public ResponseEntity<LibsWebDtoServerAbstractResponse> signUp(LibsSecurityDtosSignUpUser signUpUser, BindingResult result)
            throws LibsErrorBeanValidation, LibsSecurityErrorSignUp {
        LibsAssertions.assertNoBeanValidationErrors(result);
        return userService.signUp(signUpUser);
    }

    @Override
    public ResponseEntity<LibsWebDtoServerAbstractResponse> signUpConfirm(UUID id) throws LibsSecurityErrorSignUpConfirm {
        return userService.signUpConfirm(id);
    }

    @Override
    public ResponseEntity<LibsWebDtoServerAbstractResponse> resetPassword
            (LibsSecurityDtosResetPassword dto, BindingResult result) throws LibsSecurityErrorResetPassword,
            LibsErrorBeanValidation {
        LibsAssertions.assertNoBeanValidationErrors(result);
        return userService.resetPassword(dto);
    }

    @Override
    public ResponseEntity<LibsWebDtoServerAbstractResponse> resetPasswordConfirm(LibsSecurityDtosResetPasswordConfirm dto,
                                                                                 BindingResult result)
            throws LibsSecurityErrorResetPasswordConfirm, LibsErrorBeanValidation {
        LibsAssertions.assertNoBeanValidationErrors(result);
        return userService.resetPasswordConfirm(dto);
    }

    @Override
    public ResponseEntity<LibsSecurityDtoUserInfo> getUserInfoById(Integer id) throws LibsSecurityErrorEntityNotFound {
        return userService.getUserInfoById(id);
    }
}
