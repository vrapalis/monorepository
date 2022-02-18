package com.example.security.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

@Configuration
public class SecurityWebConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        PasswordEncoder encoder =
                PasswordEncoderFactories.createDelegatingPasswordEncoder();

        auth.inMemoryAuthentication()
                .withUser("user")
                .password(encoder.encode("password"))
                .roles("APP_USER")
                .and()
                .withUser("admin")
                .password(encoder.encode("admin"))
                .roles("APP_ADMIN");
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .formLogin(formCustomizer -> formCustomizer.permitAll())
                .httpBasic()
                .and().headers().frameOptions().sameOrigin()
                .and().csrf().ignoringAntMatchers("/h2-console/**")
                .and()
                .authorizeRequests()
                .mvcMatchers("/h2-console/**").permitAll()
                .mvcMatchers("/api/users/**").hasRole("APP_USER")
                .anyRequest().authenticated();
    }
}
