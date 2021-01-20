package com.vrapalis.www.libs.web.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Getter;
import lombok.experimental.SuperBuilder;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@Getter
@SuperBuilder
public abstract class LibsWebDtoServerAbstractResponse {
    private final String msg;

    @Builder.Default
    @ApiModelProperty(example = "Given path")
    private final String path = ServletUriComponentsBuilder.fromCurrentRequestUri().toUriString();

    public abstract String getMsg();

//    public abstract String getPath();
}
