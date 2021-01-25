package com.vrapalis.www.libs.security.services.domains.user;

import com.vrapalis.www.libs.security.dtos.domains.user.LibsSecurityDtoSignInUser;
import com.vrapalis.www.libs.security.dtos.domains.user.LibsSecurityDtoSignUpUser;
import com.vrapalis.www.libs.security.errors.domains.authentication.LibsSecurityErrorSignIn;
import com.vrapalis.www.libs.security.errors.domains.authentication.LibsSecurityErrorSignUp;
import com.vrapalis.www.libs.web.dto.LibsWebDtoServerAbstractResponse;
import org.springframework.http.ResponseEntity;

public interface LibsSecurityUserService {

    ResponseEntity<LibsWebDtoServerAbstractResponse> signIn(LibsSecurityDtoSignInUser signInUser) throws LibsSecurityErrorSignIn;

    ResponseEntity<LibsWebDtoServerAbstractResponse> signUp(LibsSecurityDtoSignUpUser signUpUser) throws LibsSecurityErrorSignUp;
}
