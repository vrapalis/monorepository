package com.vrapalis.www.libs.push.services.domains.email;

import com.vrapalis.www.libs.push.dtos.domains.email.LibsPushDtosEmailDto;
import com.vrapalis.www.libs.push.entities.domains.email.LibsPushEntitiesEmailEntity;
import org.springframework.http.ResponseEntity;

import javax.mail.MessagingException;
import java.util.List;

public interface LibsPushServicesEmailService {
    void sendSimpleMessage(String to, String subject, String text);
    ResponseEntity<com.vrapalis.www.libs.web.dto.LibsWebDtoServerAbstractResponse> sendMimeMessage(LibsPushDtosEmailDto email) throws MessagingException;
    ResponseEntity saveEmail(LibsPushDtosEmailDto emailDto);
    List<LibsPushEntitiesEmailEntity> findEmailsToSend();
    void deleteEmail(LibsPushEntitiesEmailEntity emailEntity);
}
