package com.vrapalis.www.libs.security.apis.domains.user;

import com.vrapalis.www.libs.security.dtos.domains.user.LibsSecurityDtoUserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;


@Service
public class UserApisCallImpl implements UserApisCall {
    @Autowired
    private RestTemplate restTemplate;
    private final String API_URL = "/api/users";

    @Override
    public ResponseEntity<LibsSecurityDtoUserInfo> getUserInfoById(String hostUrl, Integer userId) throws RestClientException {
        final var userInfoUrl = hostUrl + API_URL + "/info/" + userId;
        return restTemplate.getForEntity(userInfoUrl, LibsSecurityDtoUserInfo.class);
    }
}
