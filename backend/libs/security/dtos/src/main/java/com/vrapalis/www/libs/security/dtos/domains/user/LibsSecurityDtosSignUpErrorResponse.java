package com.vrapalis.www.libs.security.dtos.domains.user;

import com.vrapalis.www.libs.web.dto.LibsWebDtoServerErrorResponse;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LibsSecurityDtosSignUpErrorResponse extends LibsWebDtoServerErrorResponse {
    private String msg = LibsSecurityDtosUserMsg.SIGN_UP_ERROR_MSG;
    private String detailedErrorMsg = LibsSecurityDtosUserMsg.SIGN_UP_ERROR_DETAILED_MSG;

    public LibsSecurityDtosSignUpErrorResponse() {
        super(LibsSecurityDtosUserMsg.SIGN_UP_ERROR_MSG, LibsSecurityDtosUserMsg.SIGN_UP_ERROR_DETAILED_MSG);
    }
}
