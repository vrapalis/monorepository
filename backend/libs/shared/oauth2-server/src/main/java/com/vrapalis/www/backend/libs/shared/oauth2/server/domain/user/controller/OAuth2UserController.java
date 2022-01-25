package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.controller;

import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.common.util.OAuth2FileUtils;
import lombok.AllArgsConstructor;
import lombok.extern.java.Log;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.ResourceUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;


@Log
@Controller
@AllArgsConstructor
public class OAuth2UserController {
    ResourceLoader resourceLoader;


    @GetMapping("/login")
    public String login(Model model, Authentication authentication) throws IOException {
        if (authentication != null) {
            if (authentication.isAuthenticated()) {
                //            TODO REPLACE THRU VARIABLE
                return "redirect:http://127.0.0.1:4200";
            }
        }
        setFiles(model);
        return "login";
    }

    @GetMapping("/registration")
    public String registration(Model model, Authentication authentication) {
        if (authentication != null) {
            if (authentication.isAuthenticated()) {
                //            TODO REPLACE THRU VARIABLE
                return "redirect:http://127.0.0.1:4200";
            }
        }
        setFiles(model);
        return "registration";
    }

    @GetMapping("/forgot-password")
    public String forgotPassword(Model model, Authentication authentication) {
        if (authentication != null) {
            if (authentication.isAuthenticated()) {
                //            TODO REPLACE THRU VARIABLE
                return "redirect:http://127.0.0.1:4200";
            }
        }
        setFiles(model);
        return "forgot-password";
    }

    @GetMapping("/reset-password")
    public String resetPassword(Model model, Authentication authentication) {
        if (authentication != null) {
            if (authentication.isAuthenticated()) {
                //            TODO REPLACE THRU VARIABLE
                return "redirect:http://127.0.0.1:4200";
            }
        }
        setFiles(model);
        return "reset-password";
    }

    private void setFiles(Model model) {
        final var files = OAuth2FileUtils.ResourceFiles
                .getPublicResourceFilesMap("files");

        var map = new HashMap<>(files);

        final var customCss = new ClassPathResource("public/custom.css");
        final var customJs = new ClassPathResource("public/custom.js");

        if(customCss.exists()) {
            map.put(OAuth2FileUtils.ResourceFiles.EDirType.CSS, "custom.css");
        }

        if(customJs.exists()) {
            map.put(OAuth2FileUtils.ResourceFiles.EDirType.JS, "custom.js");
        }

        model.addAttribute("files", map);
    }
}
