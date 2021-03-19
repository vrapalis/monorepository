package com.vrapalis.www.entryou.entry.domain.checkin.dto;

import com.vrapalis.www.entryou.entry.domain.checkin.exceptions.CheckInErrorMsg;
import com.vrapalis.www.libs.web.dto.LibsWebDtoServerErrorResponse;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Value;

@Value
@Builder
@EqualsAndHashCode(callSuper = true)
public class CheckinErrorDto extends LibsWebDtoServerErrorResponse {
    @ApiModelProperty(example = CheckInErrorMsg.ERROR_MSG, position = 1)
    private String msg = CheckInErrorMsg.ERROR_MSG;

    @ApiModelProperty(example = CheckInErrorMsg.DETAIL_ERROR_MSG, position = 2)
    private String detailedErrorMsg = CheckInErrorMsg.DETAIL_ERROR_MSG;

    public CheckinErrorDto() {
        super(CheckInErrorMsg.ERROR_MSG, CheckInErrorMsg.DETAIL_ERROR_MSG);
    }
}
