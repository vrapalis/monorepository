package com.vrapalis.www.entryou.entry.domain.checkin.restcontrollers;

import com.vrapalis.www.entryou.entry.domain.checkin.dto.CheckinDtoModel;
import com.vrapalis.www.entryou.entry.domain.checkin.dto.CheckinErrorDto;
import com.vrapalis.www.entryou.entry.domain.checkin.dto.CheckinSuccessDto;
import com.vrapalis.www.entryou.entry.domain.checkin.exceptions.CheckInException;
import com.vrapalis.www.entryou.entry.domain.commons.CommonsApi;
import com.vrapalis.www.libs.errors.LibsErrorBeanValidation;
import com.vrapalis.www.libs.web.dto.LibsWebDtoServerAbstractResponse;
import com.vrapalis.www.libs.web.dto.LibsWebDtoServerBeanValidationErrorResponse;
import io.swagger.annotations.*;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.validation.Valid;

@RequestMapping(CommonsApi.BASE_API_URL)
@Api(tags = "Checkin", description = "Checkin endpoints")
public interface CheckInRestController {

    @PostMapping(CheckInUrl.BASE_API_URL)
    @ApiOperation(value = "Checkin endpoint", notes = "Endpoint to create new checkin")
    @ApiResponses({
            @ApiResponse(code = 200, message = "Checkin success",
                    response = CheckinSuccessDto.class),
            @ApiResponse(code = 400, message = "Checkin error",
                    response = CheckinErrorDto.class),
            @ApiResponse(code = 422, message = "Bean validation error",
                    response = LibsWebDtoServerBeanValidationErrorResponse.class)
    })
    ResponseEntity<LibsWebDtoServerAbstractResponse> checkIn(
            @ApiParam(value = "checkin dto model") @Valid @RequestBody
                    CheckinDtoModel checkin, BindingResult result) throws CheckInException, LibsErrorBeanValidation;
}
