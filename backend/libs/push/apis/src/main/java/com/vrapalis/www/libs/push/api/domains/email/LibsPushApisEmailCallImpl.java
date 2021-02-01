package com.vrapalis.www.libs.push.api.domains.email;

import com.vrapalis.www.libs.push.dtos.domains.email.LibsPushDtosEmailDto;
import com.vrapalis.www.libs.push.urls.domains.email.LibsPushUrlsEmail;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
@AllArgsConstructor
public class LibsPushApisEmailCallImpl implements LibsPushApisEmailCall {
    private RestTemplate restTemplate;

    @Override
    public <T> ResponseEntity<T> sendEmail(String hostUrl, LibsPushDtosEmailDto emailDto, Class<T> responseType) {
        return restTemplate.postForEntity(hostUrl + LibsPushUrlsEmail.BASE_API_EMAIL, emailDto, responseType);
    }
}
