package com.vrapalis.www.entryou.entry.domain.checkin.restcontrollers;

import com.vrapalis.www.entryou.entry.domain.checkin.dto.CheckinDto;
import com.vrapalis.www.entryou.entry.domain.checkin.exceptions.CheckInException;
import com.vrapalis.www.entryou.entry.domain.checkin.services.CheckInService;
import com.vrapalis.www.libs.assertions.LibsAssertions;
import com.vrapalis.www.libs.errors.LibsErrorBeanValidation;
import com.vrapalis.www.libs.web.dto.LibsWebDtoServerAbstractResponse;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class CheckInRestControllerImpl implements CheckInRestController {
    private CheckInService checkInService;

    @Override
    public ResponseEntity<LibsWebDtoServerAbstractResponse> checkIn(CheckinDto checkinDto, BindingResult result)
            throws CheckInException, LibsErrorBeanValidation {
        LibsAssertions.assertNoBeanValidationErrors(result);
        return checkInService.addCheckIn(checkinDto);
    }

    @Override
    public ResponseEntity<Page> getAllCheckinsByGuestId(Integer guestId, Pageable pageable) throws CheckInException {
        return checkInService.findAllCheckInsByGuestId(guestId, pageable);
    }
}
