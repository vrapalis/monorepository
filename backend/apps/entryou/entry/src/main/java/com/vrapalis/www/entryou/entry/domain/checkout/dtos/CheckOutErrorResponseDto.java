package com.vrapalis.www.entryou.entry.domain.checkout.dtos;

import com.vrapalis.www.libs.web.dto.LibsWebDtoServerErrorResponse;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;

@Getter
public class CheckOutErrorResponseDto extends LibsWebDtoServerErrorResponse {
    @ApiModelProperty(value = "Message", example = CheckOutMsgsDtos.CHECK_OUT_MSG_ERROR)
    private String msg = CheckOutMsgsDtos.CHECK_OUT_MSG_ERROR;

    @ApiModelProperty(value = "Detailed Error Message", example = CheckOutMsgsDtos.CHECK_OUT_DETAILED_MSG_ERROR)
    private String detailedErrorMsg = CheckOutMsgsDtos.CHECK_OUT_DETAILED_MSG_ERROR;

    public CheckOutErrorResponseDto() {
        super(CheckOutMsgsDtos.CHECK_OUT_MSG_ERROR, CheckOutMsgsDtos.CHECK_OUT_DETAILED_MSG_ERROR);
    }
}
