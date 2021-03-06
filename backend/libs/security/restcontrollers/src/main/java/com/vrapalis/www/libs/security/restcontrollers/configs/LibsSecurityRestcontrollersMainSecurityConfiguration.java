package com.vrapalis.www.libs.security.restcontrollers.configs;

import com.vrapalis.www.libs.security.services.domains.user.LibsSecurityUserDetailsServiceImp;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.Arrays;

@EnableWebSecurity
@AllArgsConstructor
public class LibsSecurityRestcontrollersMainSecurityConfiguration extends WebSecurityConfigurerAdapter {
    private LibsSecurityUserDetailsServiceImp userDetailsService;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.authenticationProvider(getAuthenticationProvider());
    }

    @Bean
    public DaoAuthenticationProvider getAuthenticationProvider() {
        DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();
        authenticationProvider.setPasswordEncoder(getPasswordEncoder());
        authenticationProvider.setUserDetailsService(userDetailsService);
        return authenticationProvider;
    }

    @Bean
    public PasswordEncoder getPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    // TODO EXTERNALIZE ALLOWED ORIGINS
    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.addAllowedOrigin("http://localhost:4200"); // enable cors for all hosts
        config.addAllowedOrigin("http://localhost:4201"); // enable cors for all hosts
        config.addAllowedOrigin("http://localhost:8080"); // enable cors for all hosts
        config.addAllowedOrigin("http://localhost:80"); // enable cors for all hosts
        config.addAllowedOrigin("https://api-entryou.ddns.net"); // enable cors for all hosts
        config.addAllowedOrigin("http://api-entryou.ddns.net"); // enable cors for all hosts
        config.addAllowedOrigin("https://entryou.ddns.net"); // enable cors for all hosts
        config.addAllowedOrigin("http://entryou.ddns.net"); // enable cors for all hosts
        config.addAllowedHeader("*");
        config.addAllowedMethod("OPTIONS");
        config.addAllowedMethod("GET");
        config.addAllowedMethod("POST");
        config.addAllowedMethod("PUT");
        config.addAllowedMethod("DELETE");
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }

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
                .antMatchers("/api/users/sign-in", "/api/users/sign-up", "/api/users/sign-up-confirm",
                        "/api/users/reset-password", "/api/users/reset-password/confirm")
                .permitAll()
                //  TODO DECIDE WHICH APIS ARE OPEN
                .antMatchers("/api/users/info/*").permitAll()
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
