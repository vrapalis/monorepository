package com.vrapalis.www.libs.security.properties.domains.user;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Configuration
@ConfigurationProperties(prefix = "com.vrapalis.www.security.properties.user.signup.confirm.email")
@PropertySource("classpath:/config/security/security.properties")
public class LibsSecurityPropertiesUserSignUpEmailProperties {

    /**
     * Title of confirm email
     */
    @NotNull
    @NotBlank
    private String subject;

    /**
     * Text of confirm email
     */
    @NotNull
    @NotBlank
    private String text;

    /**
     * Link Text of confirm email
     */
    @NotNull
    @NotBlank
    private String linkText;

    /**
     * Email confirm host
     */
    @NotNull
    @NotBlank
    private String host;

    /**
     * Email path
     */
    @NotNull
    @NotBlank
    private String path;
}
