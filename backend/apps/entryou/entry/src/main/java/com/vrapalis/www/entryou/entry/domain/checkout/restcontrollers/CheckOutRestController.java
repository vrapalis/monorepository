package com.vrapalis.www.entryou.entry.domain.checkout.restcontrollers;

import com.vrapalis.www.entryou.entry.domain.checkin.dto.CheckinDtoModel;
import com.vrapalis.www.entryou.entry.domain.checkout.dtos.CheckOutErrorResponseDto;
import com.vrapalis.www.entryou.entry.domain.checkout.dtos.CheckOutSuccessResponseDto;
import com.vrapalis.www.entryou.entry.domain.checkout.exceptions.CheckOutException;
import com.vrapalis.www.entryou.entry.domain.commons.CommonsApi;
import com.vrapalis.www.libs.errors.LibsErrorBeanValidation;
import com.vrapalis.www.libs.web.dto.LibsWebDtoServerAbstractResponse;
import com.vrapalis.www.libs.web.dto.LibsWebDtoServerBeanValidationErrorResponse;
import io.swagger.annotations.*;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.validation.Valid;

@RequestMapping(CommonsApi.BASE_API_URL)
@Api(tags = "Checkout", description = "Checkout endpoints")
public interface CheckOutRestController {

    @PutMapping(CheckOutApiUrls.BASE_API_URL)
    @ApiOperation(value = "Checkout endpoint", notes = "Endpoint to checkout")
    @ApiResponses({
            @ApiResponse(code = 200, message = "Checkout success",
                    response = CheckOutSuccessResponseDto.class),
            @ApiResponse(code = 400, message = "Checkout error",
                    response = CheckOutErrorResponseDto.class),
            @ApiResponse(code = 422, message = "Bean validation error",
                    response = LibsWebDtoServerBeanValidationErrorResponse.class)
    })
    ResponseEntity<LibsWebDtoServerAbstractResponse> checkOut(@ApiParam(value = "checkout dto model") @Valid @RequestBody
                                                                      CheckinDtoModel checkInDto, BindingResult result)
            throws LibsErrorBeanValidation, CheckOutException;
}
