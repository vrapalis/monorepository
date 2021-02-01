package com.vrapalis.www.libs.cloud.discovery.domains.app;

import lombok.AllArgsConstructor;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.util.Optional;

@Service
@AllArgsConstructor
public class LibsCloudDiscoveryAppUriDelivererImpl implements LibsCloudDiscoveryAppUriDeliverer {
    private DiscoveryClient discoveryClient;

    @Override
    public Optional<URI> getAppServiceUri(ELibsCloudDiscoveryAppNames appName) {
        return discoveryClient.getInstances(appName.getServiceAppName())
                .stream()
                .map(si -> si.getUri())
                .findFirst();
    }
}
