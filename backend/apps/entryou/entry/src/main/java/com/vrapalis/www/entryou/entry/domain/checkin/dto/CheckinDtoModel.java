package com.vrapalis.www.entryou.entry.domain.checkin.dto;

import lombok.Builder;
import lombok.Value;

import javax.validation.constraints.NotNull;

@Value
@Builder
public class CheckinDtoModel {
    @NotNull
    private Integer entryId;

    @NotNull
    private Integer guestId;
}
