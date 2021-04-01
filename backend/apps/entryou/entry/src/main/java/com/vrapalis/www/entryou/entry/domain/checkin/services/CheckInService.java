package com.vrapalis.www.entryou.entry.domain.checkin.services;

import com.vrapalis.www.entryou.entry.domain.checkin.dto.CheckinDtoModel;
import com.vrapalis.www.entryou.entry.domain.checkin.exceptions.CheckInException;
import com.vrapalis.www.libs.web.dto.LibsWebDtoServerAbstractResponse;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;

public interface CheckInService {
    ResponseEntity<LibsWebDtoServerAbstractResponse> addCheckIn(CheckinDtoModel checkin) throws CheckInException;

    ResponseEntity<Page> findAllCheckInsByGuestId(Integer guestId, Pageable pageable) throws CheckInException;
}
