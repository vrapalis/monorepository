package com.vrapalis.www.libs.security.dtos.domains.user;

import com.vrapalis.www.libs.web.dto.LibsWebDtoServerErrorResponse;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LibsSecurityDtosUserInfoErrorResponse extends LibsWebDtoServerErrorResponse {
    @ApiModelProperty(example = LibsSecurityDtosUserMsg.USER_INFO_ERROR_MSG)
    private String msg = LibsSecurityDtosUserMsg.USER_INFO_ERROR_MSG;

    @ApiModelProperty(example = "Users info with id: 1 not found")
    private String detailedErrorMsg;

    public LibsSecurityDtosUserInfoErrorResponse(Integer userId) {
        super(LibsSecurityDtosUserMsg.USER_INFO_ERROR_MSG, "Users info with id: " + userId + " not found");
        this.detailedErrorMsg = "Users info with id: " + userId + " not found";
    }
}
