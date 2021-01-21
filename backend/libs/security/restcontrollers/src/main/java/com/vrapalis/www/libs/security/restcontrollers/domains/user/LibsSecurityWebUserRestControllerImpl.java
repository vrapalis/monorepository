package com.vrapalis.www.libs.security.restcontrollers.domains.user;

import com.vrapalis.www.libs.assertions.LibsAssertions;
import com.vrapalis.www.libs.errors.LibsErrorBeanValidation;
import com.vrapalis.www.libs.security.services.domains.user.LibsSecurityWebUserService;
import com.vrapalis.www.libs.security.dtos.domains.user.LibsSecurityDtoUser;
import com.vrapalis.www.libs.security.errors.domains.authentication.LibsSecurityErrorAuthentication;
import com.vrapalis.www.libs.web.dto.LibsWebDtoServerAbstractResponse;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class LibsSecurityWebUserRestControllerImpl implements LibsSecurityWebUserRestController {
    private LibsSecurityWebUserService userService;

    @Override
    public ResponseEntity<LibsWebDtoServerAbstractResponse> signIn(LibsSecurityDtoUser signInUser, BindingResult result)
            throws LibsErrorBeanValidation, LibsSecurityErrorAuthentication {
        LibsAssertions.assertNoBeanValidationErrors(result);
        return userService.signIn(signInUser);
    }
}
