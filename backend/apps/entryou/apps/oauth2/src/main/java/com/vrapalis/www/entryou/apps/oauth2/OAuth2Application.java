package com.vrapalis.www.entryou.apps.oauth2;

import com.vrapalis.www.backend.libs.shared.oauth2.server.OAuth2Server;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@OAuth2Server
@SpringBootApplication
public class OAuth2Application {

    public static void main(String[] args) {
        SpringApplication.run(OAuth2Application.class, args);
    }

}
