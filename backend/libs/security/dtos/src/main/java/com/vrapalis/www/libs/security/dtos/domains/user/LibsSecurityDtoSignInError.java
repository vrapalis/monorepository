package com.vrapalis.www.libs.security.dtos.domains.user;

import com.vrapalis.www.libs.security.errors.domains.authentication.LibsSecurityErrorAuthenticationMsg;
import com.vrapalis.www.libs.web.dto.LibsWebDtoServerErrorResponse;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Value;

@Value
@EqualsAndHashCode(callSuper = true)
public class LibsSecurityDtoSignInError extends LibsWebDtoServerErrorResponse {
    @ApiModelProperty(example = LibsSecurityErrorAuthenticationMsg.SIGN_IN_ERROR_MSG, position = 1)
    private String msg = LibsSecurityErrorAuthenticationMsg.SIGN_IN_ERROR_MSG;

    @ApiModelProperty(example = LibsSecurityErrorAuthenticationMsg.SIGN_IN_DETAIL_ERROR_MSG, position = 2)
    private String detailedErrorMsg = LibsSecurityErrorAuthenticationMsg.SIGN_IN_DETAIL_ERROR_MSG;

    @Builder
    public LibsSecurityDtoSignInError() {
        super(LibsSecurityErrorAuthenticationMsg.SIGN_IN_ERROR_MSG, LibsSecurityErrorAuthenticationMsg.SIGN_IN_DETAIL_ERROR_MSG);
    }
}
