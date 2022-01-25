package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.common.util;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

@DisplayName("Common file utils test group")
public class OAuth2CommonFileUtilsTestGroup {

    @Nested
    @DisplayName("Resource files")
    class OAuth2CommonFileUtilsResourceFileTest {

        @Test
        void getPublicResourceFilesAsMapTest() {
            Assertions.assertThat(OAuth2FileUtils.ResourceFiles.getPublicResourceFilesMap("src/test/resources"))
                    .containsKey(OAuth2FileUtils.ResourceFiles.EDirType.CSS);
        }
    }

}