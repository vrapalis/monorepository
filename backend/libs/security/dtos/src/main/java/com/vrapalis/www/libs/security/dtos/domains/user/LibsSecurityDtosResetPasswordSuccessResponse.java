package com.vrapalis.www.libs.security.dtos.domains.user;

import com.vrapalis.www.libs.web.dto.LibsWebDtoServerSuccessResponse;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Value;

@Value
@Builder
@EqualsAndHashCode(callSuper = true)
public class LibsSecurityDtosResetPasswordSuccessResponse extends LibsWebDtoServerSuccessResponse {
    private String msg = LibsSecurityDtosUserMsg.RESET_PASSWORD_SUCCESS_MSG;

    public LibsSecurityDtosResetPasswordSuccessResponse(){
        super(LibsSecurityDtosUserMsg.RESET_PASSWORD_SUCCESS_MSG);
    }
}
