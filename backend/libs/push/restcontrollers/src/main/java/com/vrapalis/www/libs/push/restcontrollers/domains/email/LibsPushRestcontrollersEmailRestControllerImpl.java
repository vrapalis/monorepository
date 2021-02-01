package com.vrapalis.www.libs.push.restcontrollers.domains.email;

import com.vrapalis.www.libs.assertions.LibsAssertions;
import com.vrapalis.www.libs.errors.LibsErrorBeanValidation;
import com.vrapalis.www.libs.push.dtos.domains.email.LibsPushDtosEmailDto;
import com.vrapalis.www.libs.push.services.domains.email.LibsPushServicesEmailService;
import com.vrapalis.www.libs.web.dto.LibsWebDtoServerAbstractResponse;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RestController;

import javax.mail.MessagingException;


@RestController
@AllArgsConstructor
public class LibsPushRestcontrollersEmailRestControllerImpl implements LibsPushRestcontrollersEmailRestController {
    private LibsPushServicesEmailService emailService;

    @Override
    public ResponseEntity<LibsWebDtoServerAbstractResponse> sendEmail(LibsPushDtosEmailDto emailDto, BindingResult bindingResult)
            throws MessagingException, LibsErrorBeanValidation {
        LibsAssertions.assertNoBeanValidationErrors(bindingResult);
        return emailService.sendMimeMessage(emailDto);
    }
}
