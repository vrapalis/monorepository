package com.vrapalis.www.libs.web.dto;

import lombok.Data;

@Data
public abstract class LibsWebDtoServerAbstractResponse {
    private final String msg;

    public abstract String getMsg();

    public LibsWebDtoServerAbstractResponse(String msg) {
        this.msg = msg;
    }
}
