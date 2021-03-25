package com.vrapalis.www.entryou.entry.domain.checkin.dto;

import com.vrapalis.www.libs.security.dtos.domains.user.LibsSecurityDtoUserInfo;
import com.vrapalis.www.libs.web.dto.LibsWebDtoServerSuccessResponse;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CheckinSuccessDto extends LibsWebDtoServerSuccessResponse {
    @ApiModelProperty(example = "Created checkin success")
    private String msg;

    @ApiModelProperty(example = "{}")
    private LibsSecurityDtoUserInfo info;

    public CheckinSuccessDto(LibsSecurityDtoUserInfo info) {
        super("Created checkin success");
        this.msg = "Created checkin success";
        this.info = info;
    }
}
