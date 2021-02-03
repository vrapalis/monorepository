package com.vrapalis.www.libs.security.dtos.domains.user;

import com.vrapalis.www.libs.web.dto.LibsWebDtoServerSuccessResponse;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Value;

@Value
@Builder
@EqualsAndHashCode(callSuper = true)
public class LibsSecurityDtosSignUpConfirmSuccessResponse extends LibsWebDtoServerSuccessResponse {
    private String msg = LibsSecurityDtosUserMsg.SIGN_UP_CONFIRM_SUCCESS_MSG;

    public LibsSecurityDtosSignUpConfirmSuccessResponse() {
        super(LibsSecurityDtosUserMsg.SIGN_UP_CONFIRM_SUCCESS_MSG);
    }
}
