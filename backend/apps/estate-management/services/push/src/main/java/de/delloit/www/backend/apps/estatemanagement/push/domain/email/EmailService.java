package de.delloit.www.backend.apps.estatemanagement.push.domain.email;

import de.delloit.www.backend.libs.shared.dto.domain.server.AbstractServerResponseDto;
import lombok.NonNull;
import org.springframework.http.ResponseEntity;

import javax.mail.MessagingException;

public interface EmailService {
    void sendSimpleMessage(String to, String subject, String text) throws SendEmailError;
    ResponseEntity<AbstractServerResponseDto> sendMimeMessage(@NonNull EmailSendDto email) throws SendEmailError;
}
