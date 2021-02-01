package com.vrapalis.www.libs.cloud.discovery.domains.app;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
@AllArgsConstructor
public class LibsCloudDiscoveryAppRestApiCallImpl implements LibsCloudDiscoveryAppRestApiCall {
    private LibsCloudDiscoveryAppUriDeliverer serviceUriDeliverer;
    private RestTemplate restTemplate;

    @Override
    public <T> ResponseEntity<T> appGetRequest(ELibsCloudDiscoveryAppNames appName,
                                               String serviceEndpointUri, Class<T> cl) {
        final var serviceUri = serviceUriDeliverer.getAppServiceUri(appName)
                .orElseThrow(() -> new RuntimeException(appName.getServiceAppName()));

        ResponseEntity<T> result = restTemplate.getForEntity(serviceUri + serviceEndpointUri, cl);
        return result;
    }

    @Override
    public <T> ResponseEntity<T> appPostRequest(String url, T postEntity, Class<T> responseClass) {
        return null;
    }
}
