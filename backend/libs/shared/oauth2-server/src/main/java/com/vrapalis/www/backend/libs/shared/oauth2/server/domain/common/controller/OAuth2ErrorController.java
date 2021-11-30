package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.common.controller;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Tomcat default error handling customization
 * If no handler found exception arise request will be forwarded to index.html
 *
 * @see {https://newbedev.com/spring-boot-with-redirecting-with-single-page-angular2}
 */
@Controller
public class OAuth2ErrorController implements ErrorController {
    private static final String PATH = "/error";

    @RequestMapping(value = PATH)
    public String error() {
        return "forward:/index.html";
//        return "redirect:/index.html";
    }
}
