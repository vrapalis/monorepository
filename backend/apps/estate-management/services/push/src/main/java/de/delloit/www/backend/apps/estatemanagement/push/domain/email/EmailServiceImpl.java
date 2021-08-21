package de.delloit.www.backend.apps.estatemanagement.push.domain.email;

import de.delloit.www.backend.libs.shared.dto.domain.server.AbstractServerResponseDto;
import de.delloit.www.backend.libs.shared.dto.domain.server.SuccessServerResponseDto;
import lombok.AllArgsConstructor;
import lombok.NonNull;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

@Service
@AllArgsConstructor
public class EmailServiceImpl implements EmailService {
    private JavaMailSender emailSender;
    private EmailServerProperties emailServerProperties;

    @Override
    public void sendSimpleMessage(String to, String subject, String text) throws SendEmailError {
        SimpleMailMessage message = getSimpleMailMessage(to, subject, text);
        try {
            emailSender.send(message);
        } catch (Exception ex) {
            throw new SendEmailError(ex.getLocalizedMessage());
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
    public ResponseEntity<AbstractServerResponseDto> sendMimeMessage(@NonNull EmailSendDto email) throws SendEmailError {
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
            throw new SendEmailError(ex.getLocalizedMessage());
        }
        return ResponseEntity.ok(new SuccessServerResponseDto("Success", "Email was send successfully"));
    }

}
