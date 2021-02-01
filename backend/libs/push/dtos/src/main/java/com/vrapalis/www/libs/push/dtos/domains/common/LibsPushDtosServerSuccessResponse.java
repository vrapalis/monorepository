package com.vrapalis.www.libs.push.dtos.domains.common;

import com.vrapalis.www.libs.web.dto.LibsWebDtoServerSuccessResponse;
import lombok.Value;

@Value
public class LibsPushDtosServerSuccessResponse extends LibsWebDtoServerSuccessResponse {
    private String msg;

    public LibsPushDtosServerSuccessResponse(String msg) {
        super(msg);
        this.msg = msg;
    }
}
