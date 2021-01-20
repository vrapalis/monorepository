package com.vrapalis.www.libs.security.dtos.domains.user;

import io.swagger.annotations.ApiModelProperty;
import lombok.*;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LibsSecurityDtoUser {
    @Email
    @NotNull
    @ApiModelProperty(example = "admin@admin.com", required = true)
    private String email;

    @NotNull
    @Size(min = 6, max = 15)
    @ApiModelProperty(example = "123456", required = true)
    private String password;
}
