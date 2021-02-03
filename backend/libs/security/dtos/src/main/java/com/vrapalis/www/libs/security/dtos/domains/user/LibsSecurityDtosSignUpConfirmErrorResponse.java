package com.vrapalis.www.libs.security.dtos.domains.user;

import com.vrapalis.www.libs.web.dto.LibsWebDtoServerErrorResponse;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LibsSecurityDtosSignUpConfirmErrorResponse extends LibsWebDtoServerErrorResponse {
    private String msg = LibsSecurityDtosUserMsg.SIGN_UP_CONFIRM_ERROR_MSG;
    private String detailedErrorMsg = LibsSecurityDtosUserMsg.SIGN_UP_CONFIRM_ERROR_DETAILED_MSG;

    public LibsSecurityDtosSignUpConfirmErrorResponse() {
        super(LibsSecurityDtosUserMsg.SIGN_UP_CONFIRM_ERROR_MSG, LibsSecurityDtosUserMsg.SIGN_UP_CONFIRM_ERROR_DETAILED_MSG);
    }
}
