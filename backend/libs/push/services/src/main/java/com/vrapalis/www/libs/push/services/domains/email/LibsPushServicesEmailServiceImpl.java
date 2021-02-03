package com.vrapalis.www.libs.push.services.domains.email;

import com.vrapalis.www.libs.push.dtos.domains.common.LibsPushDtosServerSuccessResponse;
import com.vrapalis.www.libs.push.dtos.domains.email.LibsPushDtosEmailDto;
import com.vrapalis.www.libs.push.entities.domains.email.LibsPushEntitiesEmailEntity;
import com.vrapalis.www.libs.push.repositories.domains.email.LibsPushRepositoriesEmailRepository;
import com.vrapalis.www.libs.web.dto.LibsWebDtoServerAbstractResponse;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.util.Date;
import java.util.List;

@Log4j2
@Service
@AllArgsConstructor
public class LibsPushServicesEmailServiceImpl implements LibsPushServicesEmailService {
    private JavaMailSender emailSender;
    private LibsPushServicesEmailMapper emailMapper;
    private LibsPushRepositoriesEmailRepository emailRepository;
    private LibsPushServicesEmailServerProperties emailServerProperties;

    @Override
    public void sendSimpleMessage(String to, String subject, String text) {
        SimpleMailMessage message = getSimpleMailMessage(to, subject, text);
        emailSender.send(message);
    }

    @Override
    public ResponseEntity<LibsWebDtoServerAbstractResponse> sendMimeMessage(LibsPushDtosEmailDto email) throws MessagingException {
        MimeMessage mimeMessage = emailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, "utf-8");
        String htmlMsg = email.getText();
        helper.setText(htmlMsg, true);
        helper.setTo(email.getMailTo());
        helper.setSubject(email.getSubject());
        helper.setFrom(emailServerProperties.getUsername());
        emailSender.send(mimeMessage);
        return ResponseEntity.ok(new LibsPushDtosServerSuccessResponse("Email was send successfully"));
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
    public ResponseEntity saveEmail(LibsPushDtosEmailDto emailDto) {
        final var emailEntity = emailMapper.toEntity(emailDto);
        emailEntity.setCreatedDate(new Date());
        emailRepository.save(emailEntity);
        return ResponseEntity.ok().build();
    }

    @Override
    public List<LibsPushEntitiesEmailEntity> findEmailsToSend() {
        return emailRepository.findAll();
    }

    @Override
    public void deleteEmail(LibsPushEntitiesEmailEntity emailEntity) {
        emailRepository.deleteById(emailEntity.getId());
    }
}
