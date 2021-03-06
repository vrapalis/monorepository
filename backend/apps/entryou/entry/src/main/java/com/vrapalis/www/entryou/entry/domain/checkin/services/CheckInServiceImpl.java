package com.vrapalis.www.entryou.entry.domain.checkin.services;

import com.vrapalis.www.entryou.entry.config.RabbitmqConfiguration;
import com.vrapalis.www.entryou.entry.domain.checkin.dto.CheckinDto;
import com.vrapalis.www.entryou.entry.domain.checkin.dto.CheckinFullDto;
import com.vrapalis.www.entryou.entry.domain.checkin.dto.CheckinSuccessDto;
import com.vrapalis.www.entryou.entry.domain.checkin.entities.CheckInEntity;
import com.vrapalis.www.entryou.entry.domain.checkin.exceptions.CheckInException;
import com.vrapalis.www.entryou.entry.domain.checkin.mapping.CheckInMapper;
import com.vrapalis.www.entryou.entry.domain.checkin.repositories.CheckInRepository;
import com.vrapalis.www.entryou.entry.domain.entry.EntryRepository;
import com.vrapalis.www.entryou.entry.domain.guest.GuestRepository;
import com.vrapalis.www.libs.cloud.discovery.domains.app.ELibsCloudDiscoveryAppNames;
import com.vrapalis.www.libs.cloud.discovery.domains.app.LibsCloudDiscoveryAppUriDeliverer;
import com.vrapalis.www.libs.security.apis.domains.user.UserApisCall;
import com.vrapalis.www.libs.security.dtos.domains.user.LibsSecurityDtoUserInfo;
import com.vrapalis.www.libs.web.dto.LibsWebDtoServerAbstractResponse;
import lombok.AllArgsConstructor;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class CheckInServiceImpl implements CheckInService {
    private CheckInRepository checkInRepository;
    private CheckInMapper checkInMapper;
    private UserApisCall userApisCall;
    private LibsCloudDiscoveryAppUriDeliverer appUriDeliverer;
    private EntryRepository entryRepository;
    private GuestRepository guestRepository;
    private RabbitTemplate rabbitTemplate;

    @Override
    public ResponseEntity<LibsWebDtoServerAbstractResponse> addCheckIn(CheckinDto checkinDto) throws CheckInException {
        final LibsSecurityDtoUserInfo userInfo;
        final CheckInEntity checkInEntity;
        try {
            checkInEntity = checkInMapper.mapAndCheckIn(checkinDto);
            entryRepository.saveAndFlush(checkInEntity.getId().getEntry());
            final var guest = checkInEntity.getId().getGuest();
            guestRepository.saveAndFlush(guest);
            // TODO MAYBE CHECK THAT USERS ARE EXISTS?
            checkInRepository.saveAndFlush(checkInEntity);
            guest.setLastCheckIn(checkInEntity);
            guest.setCheckedIn(true);
            guestRepository.saveAndFlush(guest);
            userInfo = uaaCallGetUserInfo(checkinDto);
            rabbitTemplate.convertAndSend(RabbitmqConfiguration.directExchangeName, checkinDto.getEntryId().toString(), checkinDto.getGuestId());
        } catch (Exception ex) {
            throw new CheckInException();
        }
        final var lastCheckIn = checkInMapper.toDto(checkInEntity);
        return ResponseEntity.ok(new CheckinSuccessDto(userInfo, lastCheckIn));
    }

    @Override
    public ResponseEntity<Page> findAllCheckInsByGuestId(Integer guestId, Pageable pageable) throws CheckInException {
        Page<CheckinDto> checkins;
        try {
            checkins = checkInRepository.findByIdGuestId(guestId, pageable)
                    .map(this::mapToCheckinFullDto);
        } catch (Exception ex) {
            throw new CheckInException();
        }
        return ResponseEntity.ok(checkins);
    }

    private LibsSecurityDtoUserInfo uaaCallGetUserInfo(CheckinDto checkinDto) {
        final LibsSecurityDtoUserInfo userInfo;
        final var uaaAppHostUrl = appUriDeliverer.getAppServiceUri(ELibsCloudDiscoveryAppNames.ENTRYOU_UAA_APP)
                .map(uri -> uri.toString())
                .orElseThrow(RuntimeException::new);
        userInfo = userApisCall.getUserInfoById(uaaAppHostUrl, checkinDto.getEntryId()).getBody();
        return userInfo;
    }

    // TODO REQUEST USER INFO ONLY FOR UNIQ USER
    private CheckinFullDto mapToCheckinFullDto(CheckInEntity entity) {
        final var checkinDto = checkInMapper.toDto(entity);
        final var userInfo = uaaCallGetUserInfo(checkinDto);
        return CheckinFullDto.builder()
                .organizationName(userInfo.getCompanyName())
                .arriveOn(checkinDto.getArriveOn())
                .entryId(checkinDto.getEntryId())
                .guestId(checkinDto.getGuestId())
                .build();
    }
}
