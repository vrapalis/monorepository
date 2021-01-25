package com.vrapalis.www.libs.web.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Value;

@Value
@EqualsAndHashCode(callSuper = true)
public class LibsWebDtoServerBeanValidationErrorResponse extends LibsWebDtoServerErrorResponse {
    @ApiModelProperty(example = "Validation Error", position = 1)
    private String msg = "Validation Error";

    @ApiModelProperty(example = "Bean validation errors ...", position = 2)
    private String detailedErrorMsg;

    @Builder
    public LibsWebDtoServerBeanValidationErrorResponse(String msg, String detailedErrorMsg){
        super(msg, detailedErrorMsg);
        this.detailedErrorMsg= detailedErrorMsg;
    }
}

