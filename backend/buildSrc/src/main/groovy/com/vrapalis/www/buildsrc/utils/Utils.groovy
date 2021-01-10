package com.vrapalis.www.buildsrc.utils

/**
 * Utils
 * @vrapalis
 */
final class Utils {
    private Utils() {}

    /**
     *
     * @return current branch
     */
    static String getGitBranchName() {
        def branch = ""
        def proc = "git rev-parse --abbrev-ref HEAD".execute()
        proc.in.eachLine { line -> branch = line }
        proc.err.eachLine { line -> println line }
        proc.waitFor()
        return branch
    }

    /**
     *
     * @return docker image version, for master branch "latest" all other branches "snapshot"
     */
    static String getTagVersion() {
        def imageVersion = "snapshot";
        if (getGitBranchName().equalsIgnoreCase("master")) {
            imageVersion = "latest";
        }
        return imageVersion;
    }
}

