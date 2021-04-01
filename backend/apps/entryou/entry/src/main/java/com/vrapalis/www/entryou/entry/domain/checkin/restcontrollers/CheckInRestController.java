package com.vrapalis.www.entryou.entry.domain.checkin.restcontrollers;

import com.vrapalis.www.entryou.entry.domain.checkin.dto.CheckinDtoModel;
import com.vrapalis.www.entryou.entry.domain.checkin.dto.CheckinErrorDto;
import com.vrapalis.www.entryou.entry.domain.checkin.dto.CheckinSuccessDto;
import com.vrapalis.www.entryou.entry.domain.checkin.exceptions.CheckInException;
import com.vrapalis.www.entryou.entry.domain.commons.CommonsApi;
import com.vrapalis.www.libs.documentation.swagger.LibsDocumentationSwaggerApiPageable;
import com.vrapalis.www.libs.errors.LibsErrorBeanValidation;
import com.vrapalis.www.libs.web.dto.LibsWebDtoServerAbstractResponse;
import com.vrapalis.www.libs.web.dto.LibsWebDtoServerBeanValidationErrorResponse;
import io.swagger.annotations.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RequestMapping(CommonsApi.BASE_API_URL)
@Api(tags = "Checkin", description = "Checkin endpoints")
public interface CheckInRestController {

    @PostMapping(value = CheckInUrls.BASE_API_URL, produces = "application/json")
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

    @LibsDocumentationSwaggerApiPageable
    @GetMapping(value = CheckInUrls.BASE_API_URL + "/guests/{guestId}", produces = "application/json")
    ResponseEntity<Page> getAllCheckinsByGuestId(@PathVariable Integer guestId, Pageable pageable) throws CheckInException;
}
