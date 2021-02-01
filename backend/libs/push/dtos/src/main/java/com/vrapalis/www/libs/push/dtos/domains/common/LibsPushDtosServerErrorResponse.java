package com.vrapalis.www.libs.push.dtos.domains.common;

import com.vrapalis.www.libs.web.dto.LibsWebDtoServerErrorResponse;
import lombok.Value;

@Value
public class LibsPushDtosServerErrorResponse extends LibsWebDtoServerErrorResponse {
    private String msg;
    private String detailedErrorMsg;

    public LibsPushDtosServerErrorResponse(String msg, String detailedErrorMsg) {
        super(msg, detailedErrorMsg);
        this.msg = msg;
        this.detailedErrorMsg = detailedErrorMsg;
    }
}
