package de.delloit.www.backend.apps.estatemanagement.push.domain.sms;

import de.delloit.www.backend.apps.estatemanagement.push.domain.email.CommonApi;
import de.delloit.www.backend.libs.shared.dto.domain.server.AbstractServerResponseDto;
import de.delloit.www.backend.libs.shared.error.domain.common.BeanValidationSharedError;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.validation.Valid;

@RequestMapping(value = CommonApi.BASE_API + SmsApi.BASE_API)
@Tag(name = "Email", description = "Sms management endpoints")
public interface SmsRestController {

    @PostMapping(value = SmsApi.SEND_SMS_API, produces = "application/json")
    @Operation(summary = "Send sms endpoint", description = "Endpoint to send sms")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "Send sms success"),
            @ApiResponse(responseCode = "400", description = "Send sms error"),
            @ApiResponse(responseCode = "422", description = "Bean validation error")
    })
    ResponseEntity<AbstractServerResponseDto> sendSms(@Parameter(name = "sms dto model") @Valid @RequestBody
                                                           SmsSendDto smsSendDto, BindingResult result)
            throws SendSmsError, BeanValidationSharedError;
}
