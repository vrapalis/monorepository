package com.vrapalis.www.entryou.entry.domain.checkin.services;

import com.vrapalis.www.entryou.entry.domain.checkin.dto.CheckinDtoModel;
import com.vrapalis.www.entryou.entry.domain.checkin.dto.CheckinSuccessDto;
import com.vrapalis.www.entryou.entry.domain.checkin.exceptions.CheckInException;
import com.vrapalis.www.entryou.entry.domain.checkin.mapping.CheckInMapper;
import com.vrapalis.www.entryou.entry.domain.checkin.repositories.CheckInRepository;
import com.vrapalis.www.libs.cloud.discovery.domains.app.ELibsCloudDiscoveryAppNames;
import com.vrapalis.www.libs.cloud.discovery.domains.app.LibsCloudDiscoveryAppUriDeliverer;
import com.vrapalis.www.libs.security.apis.domains.user.UserApisCall;
import com.vrapalis.www.libs.security.dtos.domains.user.LibsSecurityDtoUserInfo;
import com.vrapalis.www.libs.web.dto.LibsWebDtoServerAbstractResponse;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class CheckInServiceImpl implements CheckInService {
    private CheckInRepository checkInRepository;
    private CheckInMapper checkInMapper;
    private UserApisCall userApisCall;
    private LibsCloudDiscoveryAppUriDeliverer appUriDeliverer;

    @Override
    public ResponseEntity<LibsWebDtoServerAbstractResponse> addCheckIn(CheckinDtoModel checkinDto) throws CheckInException {
        LibsSecurityDtoUserInfo userInfo;
        try {
            final var checkInEntity = checkInMapper.mapAndCheck(checkinDto);
            // TODO MAYBE CHECK THAT USERS ARE EXISTS?
            checkInRepository.saveAndFlush(checkInEntity);
            final var uaaAppHostUrl = appUriDeliverer.getAppServiceUri(ELibsCloudDiscoveryAppNames.ENTRYOU_UAA_APP)
                    .map(uri -> uri.toString())
                    .orElseThrow(RuntimeException::new);
            userInfo = userApisCall.getUserInfoById(uaaAppHostUrl, checkinDto.getEntryId()).getBody();
        } catch (Exception ex) {
            throw new CheckInException();
        }
        return ResponseEntity.ok(new CheckinSuccessDto(userInfo));
    }
}
