package com.vrapalis.www.entryou.entry.domain.checkin.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.validation.constraints.NotNull;
import java.util.Date;

@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class CheckinDto {
    @NotNull
    private Integer entryId;

    @NotNull
    private Integer guestId;

    @NotNull
    private Date arriveOn;
}
