package com.vrapalis.www.entryou.entry.config;

import com.vrapalis.www.libs.web.properties.domain.cors.LibsWebCorsProperties;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@EnableWebSecurity
@AllArgsConstructor
public class MainSecurityConfiguration extends WebSecurityConfigurerAdapter {

    private LibsWebCorsProperties webCorsProperties;

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
                .antMatchers("/api/**").permitAll()
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

    // TODO EXTERNALIZE ALLOWED ORIGINS
    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.addAllowedOrigin("http://localhost:4200"); // enable cors for all hosts
        config.addAllowedOrigin("http://localhost:4201"); // enable cors for all hosts

        webCorsProperties.getAllowedOrigins().forEach(config::addAllowedOrigin);

        config.addAllowedHeader("*");
        config.addAllowedMethod("OPTIONS");
        config.addAllowedMethod("GET");
        config.addAllowedMethod("POST");
        config.addAllowedMethod("PUT");
        config.addAllowedMethod("DELETE");
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }
}
