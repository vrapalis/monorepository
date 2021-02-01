package com.vrapalis.www.libs.cloud.discovery.domains.app;

import org.springframework.http.ResponseEntity;

public interface LibsCloudDiscoveryAppRestApiCall {
    /**
     * Get request
     *
     * @param appName
     * @param serviceEndpointUri
     * @param cl
     * @param <T>
     * @return
     */
    <T> ResponseEntity<T> appGetRequest(ELibsCloudDiscoveryAppNames appName, String serviceEndpointUri, Class<T> cl);

    /**
     * Post request
     * @param url
     * @param postEntity
     * @param responseClass
     * @param <T>
     * @return
     */
    <T> ResponseEntity<T> appPostRequest(String url, T postEntity, Class<T> responseClass);
}
