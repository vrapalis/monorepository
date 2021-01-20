package com.vrapalis.www.libs.web.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.experimental.SuperBuilder;

@Getter
@SuperBuilder
public class LibsWebDtoServerBeanValidationErrorResponse extends LibsWebDtoServerErrorResponse {
    @ApiModelProperty(example = "Validation Error", position = 1)
    private final String msg = "Validation Error";

    @ApiModelProperty(example = "Bean validation errors ...", position = 2)
    private final String detailedErrorMsg;
}

