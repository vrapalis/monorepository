package com.example.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@SpringBootApplication
public class AppApplication {

    public static void main(String[] args) {
        SpringApplication.run(AppApplication.class, args);
    }

}

@Controller
class LoginController {
    @GetMapping("/login")
    public String login() {
        return "login";
    }

    @GetMapping("/sms")
    public String sms() {
        return "sms";
    }

    @GetMapping("/admit")
    public String admit() {
        return "admit";
    }
}
