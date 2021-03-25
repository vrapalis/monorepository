package com.vrapalis.www.libs.security.services.domains.user;

import com.vrapalis.www.libs.security.dtos.domains.user.*;
import com.vrapalis.www.libs.security.errors.domains.user.*;
import com.vrapalis.www.libs.web.dto.LibsWebDtoServerAbstractResponse;
import org.springframework.http.ResponseEntity;

import java.util.UUID;

public interface LibsSecurityUserService {

    ResponseEntity<LibsWebDtoServerAbstractResponse> signIn(LibsSecurityDtoSignInUser signInUser) throws LibsSecurityErrorSignIn;

    ResponseEntity<LibsWebDtoServerAbstractResponse> signUp(LibsSecurityDtosSignUpUser signUpUser) throws LibsSecurityErrorSignUp;

    ResponseEntity<LibsWebDtoServerAbstractResponse> signUpConfirm(UUID id) throws LibsSecurityErrorSignUpConfirm;

    ResponseEntity<LibsWebDtoServerAbstractResponse> resetPassword(LibsSecurityDtosResetPassword dto) throws LibsSecurityErrorResetPassword;

    ResponseEntity<LibsWebDtoServerAbstractResponse> resetPasswordConfirm(LibsSecurityDtosResetPasswordConfirm dto)
            throws LibsSecurityErrorResetPasswordConfirm;

    ResponseEntity<LibsSecurityDtoUserInfo> getUserInfoById(Integer id) throws LibsSecurityErrorEntityNotFound;
}
