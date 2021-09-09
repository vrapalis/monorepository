package de.delloit.www.backend.apps.estatemanagement.push.domain.email;

import de.delloit.www.backend.libs.shared.assertion.domain.common.CommonSharedAssertions;
import de.delloit.www.backend.libs.shared.dto.domain.server.AbstractServerResponseDto;
import de.delloit.www.backend.libs.shared.error.domain.common.BeanValidationSharedError;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class EmailRestControllerImpl implements EmailRestController {
    private EmailService emailService;

    @Override
    public ResponseEntity<AbstractServerResponseDto> send(EmailSendDto email, BindingResult result)
            throws SendEmailError, BeanValidationSharedError {
        CommonSharedAssertions.assertNoBeanValidationErrors(result);
        return emailService.sendMimeMessage(email);
    }
}
