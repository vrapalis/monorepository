package com.vrapalis.www.libs.security.dtos.domains.user;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
public class LibsSecurityDtoUserInfo {
    @ApiModelProperty(example = "Mike", position = 1)
    private String surname;

    @ApiModelProperty(example = "Dike", position = 1)
    private String firstName;

    @ApiModelProperty(example = "Pizzeria Mike Dike", position = 1)
    private String companyName;

    @ApiModelProperty(example = "33", position = 1)
    private Integer age;
}
