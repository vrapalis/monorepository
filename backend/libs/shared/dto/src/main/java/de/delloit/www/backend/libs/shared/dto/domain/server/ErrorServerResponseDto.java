package de.delloit.www.backend.libs.shared.dto.domain.server;

public class ErrorServerResponseDto extends AbstractServerResponseDto {
    public ErrorServerResponseDto(String msg, String detailedMsg) {
        super(msg, detailedMsg);
    }
}
