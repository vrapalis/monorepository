package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.email.service;

import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.email.error.OAuth2SendEmailError;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.email.model.OAuth2EmailSendDto;
import lombok.NonNull;

public interface OAuth2EmailService {
    void sendSimpleMessage(String to, String subject, String text) throws OAuth2SendEmailError;
    void sendMimeMessage(@NonNull OAuth2EmailSendDto email) throws OAuth2SendEmailError;
}
