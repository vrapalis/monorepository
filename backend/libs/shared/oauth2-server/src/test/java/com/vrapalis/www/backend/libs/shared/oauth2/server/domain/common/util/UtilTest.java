package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.common.util;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.security.oauth2.core.ClientAuthenticationMethod;
import org.springframework.security.oauth2.server.authorization.authentication.OAuth2ClientAuthenticationToken;

import java.util.HashMap;
import java.util.Map;

public class UtilTest {

    @Test
    void name() throws JsonProcessingException {
//        final var objectMapper = new ObjectMapper();
//        objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
////        objectMapper.configure(DeserializationFeature.FAIL_ON_MISSING_CREATOR_PROPERTIES, false);
//        objectMapper.addMixIn(OAuth2ClientAuthenticationToken.class, OAuth2ClientAuthenticationTokenMix.class);
//        objectMapper.addMixIn(ClientAuthenticationMethod.class, ClientAuthenticationMethodMix.class);
//
//
//        final var authenticationToken = new OAuth2ClientAuthenticationToken("",
//                ClientAuthenticationMethod.CLIENT_SECRET_BASIC, new HashMap<>());
//        final var valueAsString = objectMapper.writeValueAsString(authenticationToken);
//        final var readValue = objectMapper.readValue(valueAsString, OAuth2ClientAuthenticationToken.class);
//        System.out.println(readValue);
    }
}

abstract class OAuth2ClientAuthenticationTokenMix {
    //    @JsonIgnore
    @JsonProperty("clientId")
    private String clientId;

    //    @JsonIgnore
    @JsonProperty("clientSecret")
    private String clientSecret;

    //    @JsonIgnore
    @JsonProperty("clientAuthenticationMethod")
    private ClientAuthenticationMethod clientAuthenticationMethod;

    //    @JsonIgnore
    @JsonProperty("additionalParameters")
    private Map<String, Object> additionalParameters;

    @JsonIgnore
    @JsonProperty("principal")
    private Object principal;

    @JsonCreator
    public OAuth2ClientAuthenticationTokenMix(@JsonProperty("clientId") String clientId,
                                              @JsonProperty("clientSecret") String clientSecret,
                                              @JsonProperty("clientAuthenticationMethod") ClientAuthenticationMethod
                                                      clientAuthenticationMethod,
                                              @JsonProperty("additionalParameters") Map<String, Object> additionalParameters) {
    }
}

abstract class ClientAuthenticationMethodMix {
    @JsonProperty("value")
    private String value;

    @JsonCreator
    public ClientAuthenticationMethodMix(@JsonProperty("value") String value) {}
}