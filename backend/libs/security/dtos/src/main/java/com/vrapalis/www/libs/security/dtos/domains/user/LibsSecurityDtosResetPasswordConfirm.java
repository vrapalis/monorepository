package com.vrapalis.www.libs.security.dtos.domains.user;

import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LibsSecurityDtosResetPasswordConfirm {
    @ApiModelProperty(example = "456sdf-45sdf-545sdf", required = true)
    private UUID confirmId;

    @NotBlank
    @ApiModelProperty(example = "password", required = true)
    private String password;
}
