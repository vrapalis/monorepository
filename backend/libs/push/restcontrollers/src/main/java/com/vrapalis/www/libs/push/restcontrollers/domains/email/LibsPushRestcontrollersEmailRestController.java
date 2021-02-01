package com.vrapalis.www.libs.push.restcontrollers.domains.email;

import com.vrapalis.www.libs.errors.LibsErrorBeanValidation;
import com.vrapalis.www.libs.push.dtos.domains.common.LibsPushDtosServerErrorResponse;
import com.vrapalis.www.libs.push.dtos.domains.common.LibsPushDtosServerSuccessResponse;
import com.vrapalis.www.libs.push.dtos.domains.email.LibsPushDtosEmailDto;
import com.vrapalis.www.libs.push.urls.domains.common.LibsPushUrlsCommon;
import com.vrapalis.www.libs.push.urls.domains.email.LibsPushUrlsEmail;
import com.vrapalis.www.libs.web.dto.LibsWebDtoServerAbstractResponse;
import com.vrapalis.www.libs.web.dto.LibsWebDtoServerBeanValidationErrorResponse;
import io.swagger.annotations.*;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.mail.MessagingException;
import javax.validation.Valid;

@RequestMapping(LibsPushUrlsEmail.BASE_API_EMAIL)
@Api(tags = "Email", description = "Email management endpoints")
public interface LibsPushRestcontrollersEmailRestController {

    @ApiOperation(value = "Send email endpoint", notes = "Endpoint to send emails")
    @ApiResponses({
            @ApiResponse(code = 200, message = "Send email success",
                    response = LibsPushDtosServerSuccessResponse.class),
            @ApiResponse(code = 400, message = "Send email error",
                    response = LibsPushDtosServerErrorResponse.class),
            @ApiResponse(code = 422, message = "Bean validation error",
                    response = LibsWebDtoServerBeanValidationErrorResponse.class)
    })
    @PostMapping
    ResponseEntity<LibsWebDtoServerAbstractResponse> sendEmail(@ApiParam(value = "email dto model") @Valid @RequestBody LibsPushDtosEmailDto emailDto,
                                                               BindingResult result) throws MessagingException, LibsErrorBeanValidation;
}
