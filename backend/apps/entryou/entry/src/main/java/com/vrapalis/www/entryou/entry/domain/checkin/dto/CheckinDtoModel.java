package com.vrapalis.www.entryou.entry.domain.checkin.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotNull;
import java.util.Date;

@Data
@Builder
@AllArgsConstructor
public class CheckinDtoModel {
    @NotNull
    private Integer entryId;

    @NotNull
    private Integer guestId;

    @NotNull
    private Date arriveOn;
}
