package com.vrapalis.www.entryou.entry.domain.checkin.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.experimental.SuperBuilder;

@Data
@SuperBuilder
@AllArgsConstructor
public class CheckinFullDto extends CheckinDto {
    private String organizationName;
}
