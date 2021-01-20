package com.vrapalis.www.libs.security.dtos.domains.user;

import com.vrapalis.www.libs.web.dto.LibsWebDtoServerSuccessResponse;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.experimental.SuperBuilder;

@Getter
@SuperBuilder
public class LibsSecurityDtoAuthenticationSuccess extends LibsWebDtoServerSuccessResponse {
    @ApiModelProperty(example = "Authentication success", position = 1)
    private final String msg= "Authentication success";

    @ApiModelProperty(example = "Jwt token ...", position = 2)
    private final String jwt = "";
}
