package com.vrapalis.www.entryou.entry.domain.checkout.services;

import com.vrapalis.www.entryou.entry.domain.checkin.dto.CheckinDtoModel;
import com.vrapalis.www.entryou.entry.domain.checkin.entities.CheckInEntity;
import com.vrapalis.www.entryou.entry.domain.checkin.entities.CheckInIdEntity;
import com.vrapalis.www.entryou.entry.domain.checkin.repositories.CheckInRepository;
import com.vrapalis.www.entryou.entry.domain.checkout.CheckOutEntity;
import com.vrapalis.www.entryou.entry.domain.checkout.dtos.CheckOutSuccessResponseDto;
import com.vrapalis.www.entryou.entry.domain.checkout.exceptions.CheckOutException;
import com.vrapalis.www.entryou.entry.domain.checkout.repositories.CheckOutRepository;
import com.vrapalis.www.entryou.entry.domain.entry.EntryEntity;
import com.vrapalis.www.entryou.entry.domain.entry.EntryRepository;
import com.vrapalis.www.entryou.entry.domain.guest.GuestEntity;
import com.vrapalis.www.entryou.entry.domain.guest.GuestRepository;
import com.vrapalis.www.libs.web.dto.LibsWebDtoServerAbstractResponse;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import java.util.Date;

@Service
@Transactional
@AllArgsConstructor
public class CheckOutServiceImpl implements CheckOutService {
    private CheckOutRepository checkOutRepository;
    private CheckInRepository checkInRepository;
    private EntryRepository entryRepository;
    private GuestRepository guestRepository;

    @Override
    public ResponseEntity<LibsWebDtoServerAbstractResponse> checkOut(CheckinDtoModel checkinDtoModel) throws CheckOutException {
        try {
            final var entryEntity = entryRepository.findById(checkinDtoModel.getEntryId()).orElseThrow(EntityNotFoundException::new);
            final var guestEntity = guestRepository.findById(checkinDtoModel.getGuestId()).orElseThrow(EntityNotFoundException::new);
            final var checkInEntity = checkInRepository.findById
                    (CheckInIdEntity.builder().entry(entryEntity).guest(guestEntity).arriveOn(checkinDtoModel.getArriveOn()).build())
                    .orElseThrow(EntityNotFoundException::new);
            final var checkOutEntity = CheckOutEntity.builder()
                    .checkIn(checkInEntity).leaveOn(new Date()).build();
            checkOutRepository.saveAndFlush(checkOutEntity);
        } catch (Exception ex) {
            throw new CheckOutException();
        }
        return ResponseEntity.ok(new CheckOutSuccessResponseDto());
    }
}
