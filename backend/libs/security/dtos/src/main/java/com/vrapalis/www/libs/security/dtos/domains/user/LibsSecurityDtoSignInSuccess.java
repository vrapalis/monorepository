package com.vrapalis.www.libs.security.dtos.domains.user;

import com.vrapalis.www.libs.web.dto.LibsWebDtoServerSuccessResponse;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Value;

@Value
@EqualsAndHashCode(callSuper = true)
public class LibsSecurityDtoSignInSuccess extends LibsWebDtoServerSuccessResponse {
    @ApiModelProperty(example = "Sign in success", position = 1)
    private String msg = "Sign in success";

    @ApiModelProperty(example = "Jwt token ...", position = 2)
    private String jwt;

    @Builder
    public LibsSecurityDtoSignInSuccess(String msg, String jwt) {
        super(msg);
        this.jwt =jwt;
    }
}
