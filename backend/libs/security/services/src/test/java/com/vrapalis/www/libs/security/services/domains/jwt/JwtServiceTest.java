package com.vrapalis.www.libs.security.services.domains.jwt;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.vrapalis.www.libs.security.entities.domains.user.LibsSecurityJpaUserEntity;
import com.vrapalis.www.libs.security.services.configs.LibsSecurityServicesMainConfiguration;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.FilterType;
import org.springframework.test.context.junit.jupiter.SpringExtension;

@ExtendWith(SpringExtension.class)
@DisplayName("Jwt service group tests")
public class JwtServiceTest {

    @Autowired
    private LibsSecurityJwtService jwtService;

    private LibsSecurityJpaUserEntity userEntity;

    @BeforeEach
    void setUp() {
        userEntity = LibsSecurityJpaUserEntity.builder()
                .build();
    }

    @Test
    @DisplayName("Generate jwt token")
    void generateJwtTokenTest() {

    }

    @TestConfiguration
    @EnableConfigurationProperties(LibsSecurityJwtProperties.class)
    @ComponentScan(basePackageClasses = {LibsSecurityServicesMainConfiguration.class, LibsSecurityJwtService.class},
            excludeFilters = {
                    @ComponentScan.Filter(type = FilterType.ASSIGNABLE_TYPE, classes = {LibsSecurityJwtProperties.class})
            }
    )
    public static class JwtServiceTestConfiguration {
        @Bean
        public ObjectMapper objectMapper() {
            return new ObjectMapper();
        }
    }
}
