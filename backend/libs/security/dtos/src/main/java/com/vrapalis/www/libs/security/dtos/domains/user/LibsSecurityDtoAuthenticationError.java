package com.vrapalis.www.libs.security.dtos.domains.user;

import com.vrapalis.www.libs.security.errors.domains.authentication.LibsSecurityErrorAuthenticationMsg;
import com.vrapalis.www.libs.web.dto.LibsWebDtoServerErrorResponse;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.experimental.SuperBuilder;

@Getter
@SuperBuilder
public class LibsSecurityDtoAuthenticationError extends LibsWebDtoServerErrorResponse {
    @ApiModelProperty(example = LibsSecurityErrorAuthenticationMsg.AUTHENTICATION_ERROR_MSG, position = 1)
    private final String msg = LibsSecurityErrorAuthenticationMsg.AUTHENTICATION_ERROR_MSG;

    @ApiModelProperty(example = LibsSecurityErrorAuthenticationMsg.AUTHENTICATION_DETAIL_ERROR_MSG, position = 2)
    private final String detailedErrorMsg = LibsSecurityErrorAuthenticationMsg.AUTHENTICATION_DETAIL_ERROR_MSG;

    @ApiModelProperty(example = "Given Path", position = 3)
    private final String path = LibsSecurityErrorAuthenticationMsg.AUTHENTICATION_PATH;
}
