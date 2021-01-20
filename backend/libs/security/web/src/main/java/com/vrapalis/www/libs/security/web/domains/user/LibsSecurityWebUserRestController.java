package com.vrapalis.www.libs.security.web.domains.user;

import com.vrapalis.www.libs.errors.LibsErrorBeanValidation;
import com.vrapalis.www.libs.security.dtos.domains.user.LibsSecurityDtoAuthenticationSuccess;
import com.vrapalis.www.libs.security.dtos.domains.user.LibsSecurityDtoUser;
import com.vrapalis.www.libs.security.dtos.domains.user.LibsSecurityDtoAuthenticationError;
import com.vrapalis.www.libs.security.errors.domains.authentication.LibsSecurityErrorAuthentication;
import com.vrapalis.www.libs.web.dto.LibsWebDtoServerAbstractResponse;
import com.vrapalis.www.libs.web.dto.LibsWebDtoServerBeanValidationErrorResponse;
import io.swagger.annotations.*;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.validation.Valid;

@RequestMapping(value = LibsSecurityWebUserApiUrls.BASE_USER_API_URL_V1)
@Api(tags = "User", description = "User management endpoint")
public interface LibsSecurityWebUserRestController {

    @PostMapping(value = LibsSecurityWebUserApiUrls.USER_API_LOGIN_URL_V1, produces = "application/json")
    @ApiOperation(value = "Sign in endpoint", notes = "Endpoint provide jwt token")
    @ApiResponses({
            @ApiResponse(code = 200, message = "Authentication success",
                    response = LibsSecurityDtoAuthenticationSuccess.class),
            @ApiResponse(code = 400, message = "Authentication error",
                    response = LibsSecurityDtoAuthenticationError.class),
            @ApiResponse(code = 422, message = "Bean validation exception",
                    response = LibsWebDtoServerBeanValidationErrorResponse.class)
    })
    ResponseEntity<LibsWebDtoServerAbstractResponse> signIn(@ApiParam(value = "user sign-in dto") @Valid @RequestBody
                                                                    LibsSecurityDtoUser signInUser, BindingResult result)
            throws LibsSecurityErrorAuthentication, LibsErrorBeanValidation;
}
