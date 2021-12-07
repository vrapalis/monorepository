package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.email.service;

import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.email.props.OAuth2EmailServerProperties;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.email.error.OAuth2SendEmailError;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.email.model.OAuth2EmailSendDto;
import lombok.AllArgsConstructor;
import lombok.NonNull;
import lombok.extern.log4j.Log4j2;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.internet.MimeMessage;

@Log4j2
@Service
@AllArgsConstructor
public class OAuth2EmailServiceImpl implements OAuth2EmailService {
    private JavaMailSender emailSender;
    private OAuth2EmailServerProperties emailServerProperties;

    @Override
    public void sendSimpleMessage(String to, String subject, String text) throws OAuth2SendEmailError {
        SimpleMailMessage message = getSimpleMailMessage(to, subject, text);
        try {
            emailSender.send(message);
        } catch (Exception ex) {
            throw new OAuth2SendEmailError(ex.getLocalizedMessage());
        }
    }

    private SimpleMailMessage getSimpleMailMessage(String to, String subject, String text) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setFrom(emailServerProperties.getUsername());
        message.setSubject(subject);
        message.setText(text);
        return message;
    }

    @Override
    public void sendMimeMessage(@NonNull OAuth2EmailSendDto email) throws OAuth2SendEmailError {
        MimeMessage mimeMessage = emailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, "utf-8");
        String htmlMsg = email.getText();
        try {
            helper.setText(htmlMsg, true);
            helper.setTo(email.getMailTo());
            helper.setSubject(email.getSubject());
            helper.setFrom(emailServerProperties.getUsername());
            emailSender.send(mimeMessage);

        } catch (Exception ex) {
            log.error(ex);
            throw new OAuth2SendEmailError(ex.getLocalizedMessage());
        }
    }
}
