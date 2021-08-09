package de.delloit.www.backend.libs.shared.dto.domain.server;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public abstract class AbstractServerResponseDto {
    private final String msg;
    private final String detailedMsg;
}
