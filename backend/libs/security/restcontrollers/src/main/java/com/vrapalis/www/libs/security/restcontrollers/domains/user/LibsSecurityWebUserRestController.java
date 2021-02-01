package com.vrapalis.www.libs.security.restcontrollers.domains.user;

import com.vrapalis.www.libs.errors.LibsErrorBeanValidation;
import com.vrapalis.www.libs.security.dtos.domains.user.*;
import com.vrapalis.www.libs.security.errors.domains.authentication.LibsSecurityErrorSignIn;
import com.vrapalis.www.libs.security.errors.domains.authentication.LibsSecurityErrorSignUp;
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
@Api(tags = "User", description = "User management endpoints")
public interface LibsSecurityWebUserRestController {

    @PostMapping(value = LibsSecurityWebUserApiUrls.USER_API_SIGN_IN_URL_V1, produces = "application/json")
    @ApiOperation(value = "Sign in endpoint", notes = "Endpoint to authenticate user, jwt token will send")
    @ApiResponses({
            @ApiResponse(code = 200, message = "Sign in success",
                    response = LibsSecurityDtoSignInSuccess.class),
            @ApiResponse(code = 400, message = "Sign in error, ex. provided wrong email or password",
                    response = LibsSecurityDtosSignInErrorResponse.class),
            @ApiResponse(code = 422, message = "Bean validation error",
                    response = LibsWebDtoServerBeanValidationErrorResponse.class)
    })
    ResponseEntity<LibsWebDtoServerAbstractResponse> signIn(@ApiParam(value = "user sign-in dto model") @Valid @RequestBody
                                                                    LibsSecurityDtoSignInUser signInUser, BindingResult result)
            throws LibsSecurityErrorSignIn, LibsErrorBeanValidation;


    @PostMapping(value = LibsSecurityWebUserApiUrls.USER_API_SIGN_UP_URL_V1, produces = "application/json")
    @ApiOperation(value = "Sign up endpoint", notes = "Endpoint registration of an user")
    @ApiResponses({
            @ApiResponse(code = 200, message = "Sign up success",
                    response = LibsSecurityDtosSignUpSuccessResponse.class),
            @ApiResponse(code = 400, message = "Sign up error",
                    response = LibsSecurityDtosSignUpErrorResponse.class),
            @ApiResponse(code = 422, message = "Bean validation exception",
                    response = LibsWebDtoServerBeanValidationErrorResponse.class)
    })
    ResponseEntity<LibsWebDtoServerAbstractResponse> signUp(@ApiParam(value = "user sign-up dto model") @Valid @RequestBody
                                                                    LibsSecurityDtosSignUpUser signUpUser, BindingResult result)
            throws LibsErrorBeanValidation, LibsSecurityErrorSignUp;
}
