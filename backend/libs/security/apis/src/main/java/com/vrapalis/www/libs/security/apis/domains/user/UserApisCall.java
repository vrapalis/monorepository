package com.vrapalis.www.libs.security.apis.domains.user;

import com.vrapalis.www.libs.security.dtos.domains.user.LibsSecurityDtoUserInfo;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestClientException;

public interface UserApisCall {

    ResponseEntity<LibsSecurityDtoUserInfo> getUserInfoById(String hostUrl, Integer userId) throws RestClientException;
}
