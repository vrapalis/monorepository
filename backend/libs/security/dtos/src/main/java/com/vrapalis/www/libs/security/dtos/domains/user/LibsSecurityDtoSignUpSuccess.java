package com.vrapalis.www.libs.security.dtos.domains.user;

import com.vrapalis.www.libs.web.dto.LibsWebDtoServerSuccessResponse;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Value;

@Value
@Builder
@EqualsAndHashCode(callSuper = true)
public class LibsSecurityDtoSignUpSuccess extends LibsWebDtoServerSuccessResponse {
    private String msg = LibsSecurityDtoUserMsg.SIGN_UP_SUCCESS_MSG;

    public LibsSecurityDtoSignUpSuccess() {
        super(LibsSecurityDtoUserMsg.SIGN_UP_SUCCESS_MSG);
    }
}
