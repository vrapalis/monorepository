package com.vrapalis.www.libs.security.services.domains.user;

import com.vrapalis.www.libs.security.dtos.domains.user.LibsSecurityDtoUser;
import com.vrapalis.www.libs.security.errors.domains.authentication.LibsSecurityErrorAuthentication;
import com.vrapalis.www.libs.web.dto.LibsWebDtoServerAbstractResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface LibsSecurityWebUserService extends UserDetailsService {

    ResponseEntity<LibsWebDtoServerAbstractResponse> signIn(LibsSecurityDtoUser signInUser) throws LibsSecurityErrorAuthentication;
}
