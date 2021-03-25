package com.vrapalis.www.libs.security.errors.domains.user;

import com.vrapalis.www.libs.security.errors.domains.common.LibsSecurityErrorAbstract;
import lombok.*;

@Data
@NoArgsConstructor
@Builder
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class LibsSecurityErrorSignUpConfirm extends LibsSecurityErrorAbstract {
    private String errorMsg;
    private String detailedErrorMsg;
}
