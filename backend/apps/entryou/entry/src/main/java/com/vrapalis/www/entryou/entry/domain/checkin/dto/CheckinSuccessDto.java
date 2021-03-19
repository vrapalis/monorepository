package com.vrapalis.www.entryou.entry.domain.checkin.dto;

import com.vrapalis.www.libs.web.dto.LibsWebDtoServerSuccessResponse;
import lombok.Value;

@Value
public class CheckinSuccessDto extends LibsWebDtoServerSuccessResponse {
    private String msg;

    public CheckinSuccessDto() {
        super("Created checkin success");
        this.msg = "Created checkin success";
    }
}
