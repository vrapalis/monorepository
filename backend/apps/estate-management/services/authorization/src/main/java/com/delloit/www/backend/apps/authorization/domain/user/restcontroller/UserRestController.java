package com.delloit.www.backend.apps.authorization.domain.user.restcontroller;

import com.delloit.www.backend.apps.authorization.domain.common.CommonApi;
import com.delloit.www.backend.apps.authorization.domain.common.error.BeanValidationError;
import com.delloit.www.backend.apps.authorization.domain.user.dto.UserSignInDto;
import com.delloit.www.backend.apps.authorization.domain.user.dto.UserSignInErrorResponseDto;
import com.delloit.www.backend.apps.authorization.domain.user.dto.UserSignInSuccessResponseDto;
import com.delloit.www.backend.apps.authorization.domain.user.dto.UserSignUpUserDto;
import com.delloit.www.backend.apps.authorization.domain.user.error.UserSignInError;
import com.delloit.www.backend.apps.authorization.domain.user.error.UserSignUpError;
import com.delloit.www.backend.libs.shared.dto.domain.server.AbstractServerResponseDto;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.ExampleObject;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.validation.Valid;

@RequestMapping(value = CommonApi.BASE_API + UserApi.USER_BASE_API)
@Tag(name = "User", description = "User management endpoints")
public interface UserRestController {

    @PostMapping(value = UserApi.USER_SIGN_IN_API, produces = "application/json")
    @Operation(summary = "Sign in endpoint", description = "Endpoint to authenticate user, jwt token will send")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "Sign in success", content =
                    @Content(schema = @Schema(implementation = UserSignInSuccessResponseDto.class))
            ),
            @ApiResponse(responseCode = "400", description = "Sign in error, ex. provided wrong email or password"),
            @ApiResponse(responseCode = "422", description = "Bean validation error")
    })
    ResponseEntity<AbstractServerResponseDto> signIn(@Parameter(name = "user sign in dto model") @Valid @RequestBody
                                                             UserSignInDto signInUser, BindingResult result)
            throws UserSignInError, BeanValidationError;

    @PostMapping(value = UserApi.USER_SIGN_UP_API, produces = "application/json")
    @Operation(summary = "Sign up endpoint", description = "Endpoint registration of an user")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "Sign up success"),
            @ApiResponse(responseCode = "400", description = "Sign up error"),
            @ApiResponse(responseCode = "422", description = "Bean validation exception")
    })
    ResponseEntity<AbstractServerResponseDto> signUp(@Parameter(name = "user sign up dto model") @Valid @RequestBody
                                                             UserSignUpUserDto signUpUser, BindingResult result)
            throws UserSignUpError, BeanValidationError;

}

