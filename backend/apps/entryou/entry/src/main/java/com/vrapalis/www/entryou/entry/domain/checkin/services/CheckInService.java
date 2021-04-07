package com.vrapalis.www.entryou.entry.domain.checkin.services;

import com.vrapalis.www.entryou.entry.domain.checkin.dto.CheckinDto;
import com.vrapalis.www.entryou.entry.domain.checkin.exceptions.CheckInException;
import com.vrapalis.www.libs.web.dto.LibsWebDtoServerAbstractResponse;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;

public interface CheckInService {
    ResponseEntity<LibsWebDtoServerAbstractResponse> addCheckIn(CheckinDto checkin) throws CheckInException;

    ResponseEntity<Page> findAllCheckInsByGuestId(Integer guestId, Pageable pageable) throws CheckInException;
}
