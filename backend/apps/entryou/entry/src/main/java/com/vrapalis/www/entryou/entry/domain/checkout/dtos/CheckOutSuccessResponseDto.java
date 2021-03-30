package com.vrapalis.www.entryou.entry.domain.checkout.dtos;

import com.vrapalis.www.libs.web.dto.LibsWebDtoServerSuccessResponse;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;

@Getter
public class CheckOutSuccessResponseDto extends LibsWebDtoServerSuccessResponse {
    @ApiModelProperty(value = "Message", example = CheckOutMsgsDtos.CHECK_OUT_MSG_SUCCESS)
    private String msg = CheckOutMsgsDtos.CHECK_OUT_MSG_SUCCESS;

    public CheckOutSuccessResponseDto() {
        super(CheckOutMsgsDtos.CHECK_OUT_MSG_SUCCESS);
    }
}
