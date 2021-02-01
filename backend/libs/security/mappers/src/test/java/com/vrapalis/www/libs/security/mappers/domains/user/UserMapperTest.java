package com.vrapalis.www.libs.security.mappers.domains.user;

import com.vrapalis.www.libs.security.dtos.domains.user.LibsSecurityDtosSignUpUser;
import com.vrapalis.www.libs.security.mappers.domains.common.AbstractMapperTest;
import com.vrapalis.www.libs.security.mappers.domains.common.GivenTestData;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.context.annotation.ComponentScan;

@DisplayName("User mapper group test")
public class UserMapperTest extends AbstractMapperTest {

    @Autowired
    private LibsSecurityMappersUser mappersUser;

    @Test
    void mapperTest() {
        // Given
        LibsSecurityDtosSignUpUser signUpUser = GivenTestData.givenSignUpUser();

        // When
        final var userEntity = mappersUser.signUpDtoMapToUserEntity(signUpUser);

        // Then
        Assertions.assertThat(userEntity)
                .extracting("email", "account.password", "info.firstName", "info.surname")
                .contains(
                        signUpUser.getEmail(),
                        signUpUser.getPassword(),
                        signUpUser.getFirstName(),
                        signUpUser.getSurname()
                );
    }

    @TestConfiguration
    @ComponentScan(basePackageClasses = {LibsSecurityMappersUser.class})
    public static class UserMapperTestConfiguration {
    }
}
