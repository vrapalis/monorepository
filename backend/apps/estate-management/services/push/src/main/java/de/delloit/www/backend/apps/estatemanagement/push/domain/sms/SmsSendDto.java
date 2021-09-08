package de.delloit.www.backend.apps.estatemanagement.push.domain.sms;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SmsSendDto {
    private String from;
    private String phoneNumber;
    private String msg;
}
