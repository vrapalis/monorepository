package com.vrapalis.www.libs.cloud.discovery.domains.app;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ELibsCloudDiscoveryAppNames {
    ENTRYOU_UAA_APP("entryou-uaa"),
    ENTRYOU_PUSH_APP("entryou-push");

    private String serviceAppName;
}
