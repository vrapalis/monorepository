package com.vrapalis.www.libs.security.dtos.domains.user;

import com.vrapalis.www.libs.web.dto.LibsWebDtoServerSuccessResponse;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Value;

@Value
@Builder
@EqualsAndHashCode(callSuper = true)
public class LibsSecurityDtosSignUpSuccessResponse extends LibsWebDtoServerSuccessResponse {
    private String msg = LibsSecurityDtosUserMsg.SIGN_UP_SUCCESS_MSG;

    public LibsSecurityDtosSignUpSuccessResponse() {
        super(LibsSecurityDtosUserMsg.SIGN_UP_SUCCESS_MSG);
    }
}
