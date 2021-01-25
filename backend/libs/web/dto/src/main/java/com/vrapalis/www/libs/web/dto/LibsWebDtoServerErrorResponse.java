package com.vrapalis.www.libs.web.dto;

import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
public abstract class LibsWebDtoServerErrorResponse extends LibsWebDtoServerAbstractResponse {
    private final String detailedErrorMsg;

    public abstract String getDetailedErrorMsg();

    public LibsWebDtoServerErrorResponse(String msg, String detailedErrorMsg) {
        super(msg);
        this.detailedErrorMsg = detailedErrorMsg;
    }
}

