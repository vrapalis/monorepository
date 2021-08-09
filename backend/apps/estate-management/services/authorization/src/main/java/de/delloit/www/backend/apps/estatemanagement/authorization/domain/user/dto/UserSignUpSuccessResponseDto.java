package de.delloit.www.backend.apps.estatemanagement.authorization.domain.user.dto;

public class UserSignUpSuccessResponseDto extends UserSignInSuccessResponseDto {

    public UserSignUpSuccessResponseDto(String jwt, String msg, String detailedMsg) {
        super(jwt, msg, detailedMsg);
    }
}
