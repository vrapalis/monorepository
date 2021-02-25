package com.vrapalis.www.libs.security.dtos.domains.user;

import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LibsSecurityDtosResetPassword {
    @Email
    @NotBlank
    @ApiModelProperty(example = "admin@admin.com", required = true)
    private String email;
}
