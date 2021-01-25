package com.vrapalis.www.libs.security.mappers.domains.jwt;

import com.vrapalis.www.libs.security.mappers.domains.common.GivenTestData;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.test.context.junit.jupiter.SpringExtension;

@ExtendWith(SpringExtension.class)
public class JwtMapperTest {
    @Autowired
    private LibsSecurityMappersJwtMapper jwtMapper;

    @Test
    void name() {
        final var userEntity = GivenTestData.givenUserEntity();
        final var userJwt = jwtMapper.mapToJwtUser(userEntity);
        Assertions.assertThat(userJwt).isNotNull();
        Assertions.assertThat(userJwt.getRoles().size()).isGreaterThan(0);
    }

    @TestConfiguration
    @ComponentScan(basePackageClasses = LibsSecurityMappersJwtMapper.class)
    public static class JwtMapperTestConfiguration {
    }
}
