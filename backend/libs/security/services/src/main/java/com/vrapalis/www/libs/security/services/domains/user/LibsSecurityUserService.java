package com.vrapalis.www.libs.security.services.domains.user;

import com.vrapalis.www.libs.security.dtos.domains.user.LibsSecurityDtoUser;
import com.vrapalis.www.libs.security.errors.domains.authentication.LibsSecurityErrorAuthentication;
import com.vrapalis.www.libs.web.dto.LibsWebDtoServerAbstractResponse;
import org.springframework.http.ResponseEntity;

public interface LibsSecurityUserService {

    ResponseEntity<LibsWebDtoServerAbstractResponse> signIn(LibsSecurityDtoUser signInUser) throws LibsSecurityErrorAuthentication;
}
