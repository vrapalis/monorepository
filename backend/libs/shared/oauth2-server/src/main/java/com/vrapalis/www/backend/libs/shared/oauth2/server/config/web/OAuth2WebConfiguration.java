package com.vrapalis.www.backend.libs.shared.oauth2.server.config.web;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.resource.PathResourceResolver;

import java.nio.file.Paths;

@Configuration
public class OAuth2WebConfiguration implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry
                .addResourceHandler("/files/**", "/webjars/**")
                .addResourceLocations("file:" + getStaticFilesDirPath() + "/", "/webjars/")
                .setCachePeriod(3600)
                .resourceChain(true)
                .addResolver(new PathResourceResolver());
    }

    private String getStaticFilesDirPath() {
        return Paths.get("", "files").toAbsolutePath().toString();
    }
}
