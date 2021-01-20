package com.vrapalis.www.libs.web.dto;

import lombok.Getter;
import lombok.experimental.SuperBuilder;

@Getter
@SuperBuilder
public abstract class LibsWebDtoServerErrorResponse extends LibsWebDtoServerAbstractResponse {
    private final String detailedErrorMsg;

    public abstract String getDetailedErrorMsg();
}

