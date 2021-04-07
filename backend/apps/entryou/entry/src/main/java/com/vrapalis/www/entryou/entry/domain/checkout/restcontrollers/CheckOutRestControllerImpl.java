package com.vrapalis.www.entryou.entry.domain.checkout.restcontrollers;

import com.vrapalis.www.entryou.entry.domain.checkin.dto.CheckinDto;
import com.vrapalis.www.entryou.entry.domain.checkout.exceptions.CheckOutException;
import com.vrapalis.www.entryou.entry.domain.checkout.services.CheckOutService;
import com.vrapalis.www.libs.assertions.LibsAssertions;
import com.vrapalis.www.libs.errors.LibsErrorBeanValidation;
import com.vrapalis.www.libs.web.dto.LibsWebDtoServerAbstractResponse;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class CheckOutRestControllerImpl implements CheckOutRestController {
    private CheckOutService checkOutService;

    @Override
    public ResponseEntity<LibsWebDtoServerAbstractResponse> checkOut(CheckinDto checkInDto, BindingResult result)
            throws LibsErrorBeanValidation, CheckOutException {
        LibsAssertions.assertNoBeanValidationErrors(result);
        return checkOutService.checkOut(checkInDto);
    }
}
