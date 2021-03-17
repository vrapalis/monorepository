package com.vrapalis.www.entryou.entry.domain.checkin.restcontrollers;

import com.vrapalis.www.entryou.entry.domain.checkin.dto.CheckinDtoModel;
import com.vrapalis.www.entryou.entry.domain.checkin.exceptions.CheckInException;
import com.vrapalis.www.libs.assertions.LibsAssertions;
import com.vrapalis.www.libs.errors.LibsErrorBeanValidation;
import com.vrapalis.www.libs.web.dto.LibsWebDtoServerAbstractResponse;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@AllArgsConstructor
public class CheckInRestControllerImpl implements CheckInRestController {
    private RestTemplate restTemplate;

    @Override
    public ResponseEntity<LibsWebDtoServerAbstractResponse> checkIn(CheckinDtoModel checkin, BindingResult result)
            throws CheckInException, LibsErrorBeanValidation {
        LibsAssertions.assertNoBeanValidationErrors(result);
        return null;
    }
}
