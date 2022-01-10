package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.controller;

import lombok.AllArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Optional;


@Controller
@AllArgsConstructor
public class OAuth2UserController {

    @GetMapping("/login")
    public String login(Model model, Authentication authentication) {
        if (authentication != null) {
            if (authentication.isAuthenticated()) {
                //            TODO REPLACE THRU VARIABLE
                return "redirect:http://127.0.0.1:4200";
            }
        }
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
        return "reset-password";
    }
}
