package com.vrapalis.www.libs.security.uaa.configs;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;

@EnableWebSecurity
public class LibsSecurityUaaMainSecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .cors()
                .and()
                .headers().frameOptions().disable()// h2 specific
                .and()
                .httpBasic().disable()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
//                .exceptionHandling().accessDeniedHandler(accessDeniedHandler).authenticationEntryPoint(authenticationEntryPoint)
//                .and()
//                .addFilter(new LibUaaSecurityJwtAuthenticationFilter())
//                .addFilterBefore(new UaaAuthorizationFilter(authenticationManager(), jwtProperties, userRepository, uaaJwtTokenService),
//                        UsernamePasswordAuthenticationFilter.class)
                .authorizeRequests()

                .antMatchers("/v2/api-docs", "/configuration/**", "/swagger*/**", "/webjars/**").permitAll()
                .antMatchers("/swagger-ui.html").permitAll()

                .antMatchers("/actuator/**").permitAll()
                .antMatchers("/docs/**").permitAll()
                .antMatchers("/login").permitAll()
                .antMatchers("/api/users/sign-in", "/api/users/sign-up", "/api/users/sign-up-confirm", "/api/users/greeting")
                .permitAll()
                .antMatchers("/api/users").permitAll()
                .anyRequest().authenticated();
    }

    @Override
    public void configure(WebSecurity web) {
        web.ignoring().antMatchers(
                "/",
                "/resources/**",
                "/static/**",
                "/index.html",
                "/*js",
                "/*.css",
                "/*.ico",
                "/**/favicon.ico",
                "/manifest.webmanifest",
                "/assets/**");
    }
}
