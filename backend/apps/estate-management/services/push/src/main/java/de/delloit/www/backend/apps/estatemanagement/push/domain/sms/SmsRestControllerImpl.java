package de.delloit.www.backend.apps.estatemanagement.push.domain.sms;

import com.vonage.client.VonageClient;
import com.vonage.client.sms.MessageStatus;
import com.vonage.client.sms.SmsSubmissionResponse;
import com.vonage.client.sms.messages.TextMessage;
import de.delloit.www.backend.libs.shared.assertion.domain.common.AssertionsShared;
import de.delloit.www.backend.libs.shared.dto.domain.server.AbstractServerResponseDto;
import de.delloit.www.backend.libs.shared.dto.domain.server.SuccessServerResponseDto;
import de.delloit.www.backend.libs.shared.error.domain.common.BeanValidationSharedError;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class SmsRestControllerImpl implements SmsRestController {

    @Override
    public ResponseEntity<AbstractServerResponseDto> sendSms(SmsSendDto smsSendDto, BindingResult result)
            throws SendSmsError, BeanValidationSharedError {
        AssertionsShared.assertNoBeanValidationErrors(result);

        // TODO externalize VonageClient and configuration
        VonageClient client = VonageClient.builder().apiKey("e9c92b62").apiSecret("RuhiKZkYsq80FlUo").build();

        TextMessage message = new TextMessage(smsSendDto.getFrom(),
                smsSendDto.getPhoneNumber(),
                smsSendDto.getMsg()
        );

        SmsSubmissionResponse response = client.getSmsClient().submitMessage(message);

        if (response.getMessages().get(0).getStatus() == MessageStatus.OK) {
            return ResponseEntity.ok(new SuccessServerResponseDto("Send sms success.",
                    "Successfully send sms to mobile phone: " + smsSendDto.getPhoneNumber()));
        } else {
            throw new SendSmsError();
        }
    }
}
