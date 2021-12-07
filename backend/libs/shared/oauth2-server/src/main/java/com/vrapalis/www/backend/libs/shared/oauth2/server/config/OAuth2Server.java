package com.vrapalis.www.backend.libs.shared.oauth2.server.config;

import com.vrapalis.www.backend.libs.shared.oauth2.server.config.jpa.OAuth2JpaConfiguration;
import com.vrapalis.www.backend.libs.shared.oauth2.server.config.profile.OAuth2ServerLocalProfileConfiguration;
import com.vrapalis.www.backend.libs.shared.oauth2.server.config.schedul.OAuth2SchedulingConfiguration;
import com.vrapalis.www.backend.libs.shared.oauth2.server.config.token.OAuth2TokenCustomizerConfiguration;
import com.vrapalis.www.backend.libs.shared.oauth2.server.config.user.OAuth2UserSecurityConfiguration;
import com.vrapalis.www.backend.libs.shared.util.config.RestControllerAdviceConfiguration;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Configuration
@Import({
        OAuth2ServerConfiguration.class,
        OAuth2ServerLocalProfileConfiguration.class,
        OAuth2JpaConfiguration.class,
        OAuth2UserSecurityConfiguration.class,
        OAuth2TokenCustomizerConfiguration.class,
        OAuth2SchedulingConfiguration.class,
        RestControllerAdviceConfiguration.class
})
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
public @interface OAuth2Server {
}
