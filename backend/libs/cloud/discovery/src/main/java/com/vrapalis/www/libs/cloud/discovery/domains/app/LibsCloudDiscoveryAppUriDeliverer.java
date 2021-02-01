package com.vrapalis.www.libs.cloud.discovery.domains.app;

import java.net.URI;
import java.util.Optional;

public interface LibsCloudDiscoveryAppUriDeliverer {
    Optional<URI> getAppServiceUri(ELibsCloudDiscoveryAppNames appName);
}
