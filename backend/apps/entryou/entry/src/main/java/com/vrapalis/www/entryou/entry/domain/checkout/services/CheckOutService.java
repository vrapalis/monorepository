package com.vrapalis.www.entryou.entry.domain.checkout.services;

import com.vrapalis.www.entryou.entry.domain.checkin.dto.CheckinDto;
import com.vrapalis.www.entryou.entry.domain.checkout.exceptions.CheckOutException;
import com.vrapalis.www.libs.web.dto.LibsWebDtoServerAbstractResponse;
import org.springframework.http.ResponseEntity;

public interface CheckOutService {
    ResponseEntity<LibsWebDtoServerAbstractResponse> checkOut(CheckinDto checkinDto) throws CheckOutException;
}
