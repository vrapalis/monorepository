package com.vrapalis.www.libs.security.dtos.domains.user;

import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LibsSecurityDtoSignUpUser {
    @Email
    @NotBlank
    @ApiModelProperty(example = "admin@admin.com", required = true)
    private String email;

    @NotBlank
    @Size(min = 6, max = 15)
    @ApiModelProperty(example = "123456", required = true)
    private String password;

    @Size(min=2, max = 30)
    @ApiModelProperty(example = "Dike", required = true)
    private String surname;

    @Size(min=2, max = 30)
    @ApiModelProperty(example = "Mike", required = true)
    private String firstName;
}
