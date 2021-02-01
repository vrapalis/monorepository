package com.vrapalis.www.libs.push.api.domains.email;

import com.vrapalis.www.libs.push.dtos.domains.email.LibsPushDtosEmailDto;
import org.springframework.http.ResponseEntity;

public interface LibsPushApisEmailCall {
    /**
     * Send email.
     *
     * @param emailDto
     * @param <T>
     * @return
     */
    <T> ResponseEntity<T> sendEmail(String hostUrl, LibsPushDtosEmailDto emailDto, Class<T> responseType);
}
