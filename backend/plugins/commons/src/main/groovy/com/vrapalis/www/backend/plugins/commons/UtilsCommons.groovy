package com.vrapalis.www.backend.plugins.commons

import org.gradle.api.Project

final class UtilsCommons {
    private UtilsCommons() {
        throw new UnsupportedOperationException()
    }

    static String getCombinedArchiveBaseName(Project project) {
        if (project !== null) {
            if (project.parent !== null) {
                return getCombinedArchiveBaseName(project.parent) + "-" + project.name
            } else {
                return project.name
            }
        }
        return "";
    }
}
