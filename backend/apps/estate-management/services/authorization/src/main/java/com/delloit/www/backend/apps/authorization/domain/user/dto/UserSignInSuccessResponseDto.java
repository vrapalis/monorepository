package com.delloit.www.backend.apps.authorization.domain.user.dto;

import com.delloit.www.backend.libs.shared.dto.domain.server.SuccessServerResponseDto;
import lombok.Getter;

@Getter
public class UserSignInSuccessResponseDto extends SuccessServerResponseDto {
    private final String jwt;

    public UserSignInSuccessResponseDto(String jwt, String msg, String detailedMsg) {
        super(msg, detailedMsg);
        this.jwt = jwt;
    }
}
