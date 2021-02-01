package com.vrapalis.www.libs.push.dtos.domains.email;

import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LibsPushDtosEmailDto {
    @Email
    @NotNull
    @ApiModelProperty(example = "admin@admin.com", required = true)
    private String mailTo;

    @NotNull
    @Size(min = 1, max = 160)
    @ApiModelProperty(example = "Email subject", required = true)
    private String subject;

    @NotNull
    @Size(min = 1, max = 560)
    @ApiModelProperty(example = "Email text", required = true)
    private String text;
}
