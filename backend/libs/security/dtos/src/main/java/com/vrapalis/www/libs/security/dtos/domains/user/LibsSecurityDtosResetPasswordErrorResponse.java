package com.vrapalis.www.libs.security.dtos.domains.user;

import com.vrapalis.www.libs.web.dto.LibsWebDtoServerErrorResponse;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LibsSecurityDtosResetPasswordErrorResponse extends LibsWebDtoServerErrorResponse {
    private String msg = LibsSecurityDtosUserMsg.RESET_PASSWORD_ERROR_MSG;
    private String detailedErrorMsg = LibsSecurityDtosUserMsg.RESET_PASSWORD_ERROR_DETAILED_MSG;

    public LibsSecurityDtosResetPasswordErrorResponse() {
        super(LibsSecurityDtosUserMsg.RESET_PASSWORD_ERROR_MSG, LibsSecurityDtosUserMsg.RESET_PASSWORD_ERROR_DETAILED_MSG);
    }
}
