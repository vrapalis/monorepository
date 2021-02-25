package com.vrapalis.www.libs.security.dtos.domains.user;

import com.vrapalis.www.libs.web.dto.LibsWebDtoServerSuccessResponse;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Value;

@Value
@Builder
@EqualsAndHashCode(callSuper = true)
public class LibsSecurityDtosResetPasswordConfirmSuccessResponse extends LibsWebDtoServerSuccessResponse {
    private String msg = LibsSecurityDtosUserMsg.RESET_PASSWORD_CONFIRM_SUCCESS_MSG;

    public LibsSecurityDtosResetPasswordConfirmSuccessResponse() {
        super(LibsSecurityDtosUserMsg.RESET_PASSWORD_CONFIRM_SUCCESS_MSG);
    }
}
