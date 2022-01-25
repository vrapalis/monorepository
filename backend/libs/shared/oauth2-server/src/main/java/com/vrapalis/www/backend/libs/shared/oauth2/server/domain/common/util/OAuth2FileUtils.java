package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.common.util;

import lombok.experimental.UtilityClass;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@UtilityClass
public class OAuth2FileUtils {

    public static class ResourceFiles {
        public static Map<EDirType, String> getPublicResourceFilesMap(String path) {
            try (Stream<Path> paths = Files.walk(Paths.get(path != null ? path : "src/main/resources/public"))) {
                return paths
                        .filter(Files::isRegularFile)
                        .map(Path::toString)
                        .map(File::new)
                        .collect(Collectors.toMap(ResourceFiles::getFileType, file -> file.getName()));
            } catch (Exception e) {
                return Map.of();
            }
        }

        public static Map<EDirType, String> getPublicResourceFilesMap() {
            return getPublicResourceFilesMap(null);
        }

        private static EDirType getFileType(File file) {
            if (file.getName().contains(".css") == true) {
                return EDirType.CSS;
            } else if (file.getName().contains(".js") == true) {
                return EDirType.JS;
            } else {
                return EDirType.UNDEFINED;
            }
        }

        public enum EDirType {
            CSS, JS, UNDEFINED;
        }
    }
}
