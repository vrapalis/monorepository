package com.vrapalis.www.entryou.entry.domain.checkin.services;

import com.vrapalis.www.entryou.entry.domain.checkin.dto.CheckinDtoModel;
import com.vrapalis.www.entryou.entry.domain.checkin.dto.CheckinSuccessDto;
import com.vrapalis.www.entryou.entry.domain.checkin.exceptions.CheckInException;
import com.vrapalis.www.entryou.entry.domain.checkin.mapping.CheckInMapper;
import com.vrapalis.www.entryou.entry.domain.checkin.repositories.CheckInRepository;
import com.vrapalis.www.libs.web.dto.LibsWebDtoServerAbstractResponse;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class CheckInServiceImpl implements CheckInService {
    private CheckInRepository checkInRepository;
    private CheckInMapper checkInMapper;

    @Override
    public ResponseEntity<LibsWebDtoServerAbstractResponse> addCheckIn(CheckinDtoModel checkinDto) throws CheckInException {
        try {
            final var checkInEntity = checkInMapper.mapAndCheck(checkinDto);
            checkInRepository.saveAndFlush(checkInEntity);
        } catch (Exception ex) {
            throw new CheckInException();
        }
        return ResponseEntity.ok(new CheckinSuccessDto());
    }
}
