package de.delloit.www.backend.apps.estatemanagement.push.domain.email;

import de.delloit.www.backend.libs.shared.dto.domain.server.AbstractServerResponseDto;
import de.delloit.www.backend.libs.shared.error.domain.common.BeanValidationSharedError;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
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

@RequestMapping(value = CommonApi.BASE_API + EmailApi.BASE_API)
@Tag(name = "Email", description = "Email management endpoints")
public interface EmailRestController {

    @PostMapping(value = EmailApi.SEND_EMAIL_API, produces = "application/json")
    @Operation(summary = "Send email endpoint", description = "Endpoint to send emails")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "Send email success"),
            @ApiResponse(responseCode = "400", description = "Send email error"),
            @ApiResponse(responseCode = "422", description = "Bean validation error")
    })
    ResponseEntity<AbstractServerResponseDto> send(@Parameter(name = "email dto model") @Valid @RequestBody
                                                             EmailSendDto signInUser, BindingResult result)
            throws SendEmailError, BeanValidationSharedError;
}
