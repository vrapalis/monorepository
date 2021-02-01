package com.vrapalis.www.libs.push.restcontrollers.configs;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

@Configuration
@PropertySource("classpath:restcontrollers.properties")
@ComponentScan(basePackages = {
        "com.vrapalis.www.libs.documentation.swagger",
        "com.vrapalis.www.libs.push.restcontrollers.domains.*"
})
public class LibsPushRestcontrollersMainConfiguration {
}
