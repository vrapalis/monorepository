package com.vrapalis.www.backend.libs.shared.util.config;

import com.vrapalis.www.backend.libs.shared.util.restcontroller.ValidationAdviceRestController;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan(basePackageClasses = ValidationAdviceRestController.class)
public class RestControllerAdviceConfiguration {
}
