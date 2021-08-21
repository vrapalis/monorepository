package de.delloit.www.backend.apps.estatemanagement.authorization.domain.api;

import de.delloit.www.backend.libs.shared.dto.domain.server.AbstractServerResponseDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

// TODO EXTRACT TO LIBRARY
@Component
@FeignClient(name="estate-management-push-service")
public interface EmailApiClient {
    @RequestMapping(method = RequestMethod.POST, value = "/api/emails/send")
//    ResponseEntity<AbstractServerResponseDto> sendEmail(EmailSendDto email);
    ResponseEntity<Object> sendEmail(EmailSendDto email);
}
