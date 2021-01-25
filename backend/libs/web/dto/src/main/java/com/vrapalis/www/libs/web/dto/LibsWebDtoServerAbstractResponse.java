package com.vrapalis.www.libs.web.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@Data
public abstract class LibsWebDtoServerAbstractResponse {
    private final String msg;

//    @ApiModelProperty(example = "Given path")
//    private final String path = ServletUriComponentsBuilder.fromCurrentRequestUri().toUriString();

    public abstract String getMsg();

    public LibsWebDtoServerAbstractResponse(String msg) {
        this.msg = msg;
    }
}
