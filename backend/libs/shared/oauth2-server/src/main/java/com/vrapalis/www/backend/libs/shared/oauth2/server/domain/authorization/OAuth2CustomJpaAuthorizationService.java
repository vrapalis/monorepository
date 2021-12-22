package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.authorization;

import java.time.Instant;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.function.Consumer;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.*;

import com.fasterxml.jackson.databind.Module;
import org.springframework.dao.DataRetrievalFailureException;
import org.springframework.security.jackson2.SecurityJackson2Modules;
import org.springframework.security.oauth2.core.AuthorizationGrantType;
import org.springframework.security.oauth2.core.OAuth2AccessToken;
import org.springframework.security.oauth2.core.OAuth2RefreshToken;
import org.springframework.security.oauth2.core.OAuth2Token;
import org.springframework.security.oauth2.core.OAuth2TokenType;
import org.springframework.security.oauth2.core.endpoint.OAuth2ParameterNames;
import org.springframework.security.oauth2.core.oidc.OidcIdToken;
import org.springframework.security.oauth2.server.authorization.OAuth2AuthorizationCode;
import org.springframework.security.oauth2.server.authorization.OAuth2AuthorizationService;
import org.springframework.security.oauth2.server.authorization.client.RegisteredClient;
import org.springframework.security.oauth2.server.authorization.client.RegisteredClientRepository;
import org.springframework.security.oauth2.server.authorization.jackson2.OAuth2AuthorizationServerJackson2Module;
import org.springframework.stereotype.Component;
import org.springframework.util.Assert;
import org.springframework.util.StringUtils;


@Component
public class OAuth2CustomJpaAuthorizationService implements OAuth2AuthorizationService {
    private final OAuth2CustomAuthorizationRepository OAuth2CustomAuthorizationRepository;
    private final RegisteredClientRepository registeredClientRepository;
    private final ObjectMapper objectMapper = new ObjectMapper();

    public OAuth2CustomJpaAuthorizationService(OAuth2CustomAuthorizationRepository OAuth2CustomAuthorizationRepository, RegisteredClientRepository registeredClientRepository) {
        Assert.notNull(OAuth2CustomAuthorizationRepository, "authorizationRepository cannot be null");
        Assert.notNull(registeredClientRepository, "registeredClientRepository cannot be null");
        this.OAuth2CustomAuthorizationRepository = OAuth2CustomAuthorizationRepository;
        this.registeredClientRepository = registeredClientRepository;

        ClassLoader classLoader = OAuth2CustomJpaAuthorizationService.class.getClassLoader();
        List<Module> securityModules = SecurityJackson2Modules.getModules(classLoader);
        this.objectMapper.registerModules(securityModules);
        this.objectMapper.registerModule(new OAuth2AuthorizationServerJackson2Module());
        this.objectMapper.configure(SerializationFeature.FAIL_ON_EMPTY_BEANS, false);
        this.objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        this.objectMapper.configure(MapperFeature.USE_GETTERS_AS_SETTERS, false);
    }

    @Override
    public void save(org.springframework.security.oauth2.server.authorization.OAuth2Authorization OAuth2Authorization) {
        Assert.notNull(OAuth2Authorization, "authorization cannot be null");
        this.OAuth2CustomAuthorizationRepository.save(toEntity(OAuth2Authorization));
    }

    @Override
    public void remove(org.springframework.security.oauth2.server.authorization.OAuth2Authorization OAuth2Authorization) {
        Assert.notNull(OAuth2Authorization, "authorization cannot be null");
        this.OAuth2CustomAuthorizationRepository.deleteById(OAuth2Authorization.getId());
    }

    @Override
    public org.springframework.security.oauth2.server.authorization.OAuth2Authorization findById(String id) {
        Assert.hasText(id, "id cannot be empty");
        return this.OAuth2CustomAuthorizationRepository.findById(id).map(this::toObject).orElse(null);
    }

    @Override
    public org.springframework.security.oauth2.server.authorization.OAuth2Authorization findByToken(String token, OAuth2TokenType tokenType) {
        Assert.hasText(token, "token cannot be empty");

        Optional<OAuth2CustomAuthorization> result;
        if (tokenType == null) {
            result = this.OAuth2CustomAuthorizationRepository.findByStateOrAuthorizationCodeOrAccessTokenOrRefreshToken(token);
        } else if (OAuth2ParameterNames.STATE.equals(tokenType.getValue())) {
            result = this.OAuth2CustomAuthorizationRepository.findByState(token);
        } else if (OAuth2ParameterNames.CODE.equals(tokenType.getValue())) {
            result = this.OAuth2CustomAuthorizationRepository.findByAuthorizationCode(token);
        } else if (OAuth2ParameterNames.ACCESS_TOKEN.equals(tokenType.getValue())) {
            result = this.OAuth2CustomAuthorizationRepository.findByAccessToken(token);
        } else if (OAuth2ParameterNames.REFRESH_TOKEN.equals(tokenType.getValue())) {
            result = this.OAuth2CustomAuthorizationRepository.findByRefreshToken(token);
        } else {
            result = Optional.empty();
        }

        return result.map(this::toObject).orElse(null);
    }

    private org.springframework.security.oauth2.server.authorization.OAuth2Authorization toObject(OAuth2CustomAuthorization entity) {
        RegisteredClient registeredClient = this.registeredClientRepository.findById(entity.getRegisteredClientId());
        if (registeredClient == null) {
            throw new DataRetrievalFailureException(
                    "The RegisteredClient with id '" + entity.getRegisteredClientId() + "' was not found in the RegisteredClientRepository.");
        }

        org.springframework.security.oauth2.server.authorization.OAuth2Authorization.Builder builder = org.springframework.security.oauth2.server.authorization.OAuth2Authorization.withRegisteredClient(registeredClient)
                .id(entity.getId())
                .principalName(entity.getPrincipalName())
                .authorizationGrantType(resolveAuthorizationGrantType(entity.getAuthorizationGrantType()))
                .attributes(attributes -> attributes.putAll(parseMap(entity.getAttributes())));
        if (entity.getState() != null) {
            builder.attribute(OAuth2ParameterNames.STATE, entity.getState());
        }

        if (entity.getAuthorizationCode() != null) {
            OAuth2AuthorizationCode authorizationCode = new OAuth2AuthorizationCode(
                    entity.getAuthorizationCode(),
                    entity.getAuthorizationCodeIssuedAt(),
                    entity.getAuthorizationCodeExpiresAt());
            builder.token(authorizationCode, metadata -> metadata.putAll(parseMap(entity.getAuthorizationCodeMetadata())));
        }

        if (entity.getAccessToken() != null) {
            OAuth2AccessToken accessToken = new OAuth2AccessToken(
                    OAuth2AccessToken.TokenType.BEARER,
                    entity.getAccessToken(),
                    entity.getAccessTokenIssuedAt(),
                    entity.getAccessTokenExpiresAt());
            builder.token(accessToken, metadata -> metadata.putAll(parseMap(entity.getAccessTokenMetadata())));
        }

        if (entity.getRefreshToken() != null) {
            OAuth2RefreshToken refreshToken = new OAuth2RefreshToken(
                    entity.getRefreshToken(),
                    entity.getRefreshTokenIssuedAt(),
                    entity.getRefreshTokenExpiresAt());
            builder.token(refreshToken, metadata -> metadata.putAll(parseMap(entity.getRefreshTokenMetadata())));
        }

        if (entity.getIdToken() != null) {
            OidcIdToken idToken = new OidcIdToken(
                    entity.getIdToken(),
                    entity.getIdTokenIssuedAt(),
                    entity.getIdTokenExpiresAt(),
                    parseMap(entity.getIdTokenClaims()));
            builder.token(idToken, metadata -> metadata.putAll(parseMap(entity.getIdTokenMetadata())));
        }

        return builder.build();
    }

    private OAuth2CustomAuthorization toEntity(org.springframework.security.oauth2.server.authorization.OAuth2Authorization OAuth2Authorization) {
        OAuth2CustomAuthorization entity = new OAuth2CustomAuthorization();
        entity.setId(OAuth2Authorization.getId());
        entity.setRegisteredClientId(OAuth2Authorization.getRegisteredClientId());
        entity.setPrincipalName(OAuth2Authorization.getPrincipalName());
        entity.setAuthorizationGrantType(OAuth2Authorization.getAuthorizationGrantType().getValue());
        entity.setAttributes(writeMap(OAuth2Authorization.getAttributes()));
        entity.setState(OAuth2Authorization.getAttribute(OAuth2ParameterNames.STATE));

        org.springframework.security.oauth2.server.authorization.OAuth2Authorization.Token<OAuth2AuthorizationCode> authorizationCode =
                OAuth2Authorization.getToken(OAuth2AuthorizationCode.class);
        setTokenValues(
                authorizationCode,
                entity::setAuthorizationCode,
                entity::setAuthorizationCodeIssuedAt,
                entity::setAuthorizationCodeExpiresAt,
                entity::setAuthorizationCodeMetadata
        );

        org.springframework.security.oauth2.server.authorization.OAuth2Authorization.Token<OAuth2AccessToken> accessToken =
                OAuth2Authorization.getToken(OAuth2AccessToken.class);
        setTokenValues(
                accessToken,
                entity::setAccessToken,
                entity::setAccessTokenIssuedAt,
                entity::setAccessTokenExpiresAt,
                entity::setAccessTokenMetadata
        );
        if (accessToken != null && accessToken.getToken().getScopes() != null) {
            entity.setAccessTokenScopes(StringUtils.collectionToDelimitedString(accessToken.getToken().getScopes(), ","));
        }

        org.springframework.security.oauth2.server.authorization.OAuth2Authorization.Token<OAuth2RefreshToken> refreshToken =
                OAuth2Authorization.getToken(OAuth2RefreshToken.class);
        setTokenValues(
                refreshToken,
                entity::setRefreshToken,
                entity::setRefreshTokenIssuedAt,
                entity::setRefreshTokenExpiresAt,
                entity::setRefreshTokenMetadata
        );

        org.springframework.security.oauth2.server.authorization.OAuth2Authorization.Token<OidcIdToken> oidcIdToken =
                OAuth2Authorization.getToken(OidcIdToken.class);
        setTokenValues(
                oidcIdToken,
                entity::setRefreshToken,
                entity::setRefreshTokenIssuedAt,
                entity::setRefreshTokenExpiresAt,
                entity::setRefreshTokenMetadata
        );
        if (oidcIdToken != null) {
            entity.setIdTokenClaims(writeMap(oidcIdToken.getClaims()));
        }

        return entity;
    }

    private void setTokenValues(
            org.springframework.security.oauth2.server.authorization.OAuth2Authorization.Token<?> token,
            Consumer<String> tokenValueConsumer,
            Consumer<Instant> issuedAtConsumer,
            Consumer<Instant> expiresAtConsumer,
            Consumer<String> metadataConsumer) {
        if (token != null) {
            OAuth2Token oAuth2Token = token.getToken();
            tokenValueConsumer.accept(oAuth2Token.getTokenValue());
            issuedAtConsumer.accept(oAuth2Token.getIssuedAt());
            expiresAtConsumer.accept(oAuth2Token.getExpiresAt());
            metadataConsumer.accept(writeMap(token.getMetadata()));
        }
    }

    private Map<String, Object> parseMap(String data) {
        try {
            return this.objectMapper.readValue(data, new TypeReference<>() {
            });
        } catch (Exception ex) {
            throw new IllegalArgumentException(ex.getMessage(), ex);
        }
    }

    private String writeMap(Map<String, Object> metadata) {
        try {
            return this.objectMapper.writeValueAsString(metadata);
        } catch (Exception ex) {
            throw new IllegalArgumentException(ex.getMessage(), ex);
        }
    }

    private static AuthorizationGrantType resolveAuthorizationGrantType(String authorizationGrantType) {
        if (AuthorizationGrantType.AUTHORIZATION_CODE.getValue().equals(authorizationGrantType)) {
            return AuthorizationGrantType.AUTHORIZATION_CODE;
        } else if (AuthorizationGrantType.CLIENT_CREDENTIALS.getValue().equals(authorizationGrantType)) {
            return AuthorizationGrantType.CLIENT_CREDENTIALS;
        } else if (AuthorizationGrantType.REFRESH_TOKEN.getValue().equals(authorizationGrantType)) {
            return AuthorizationGrantType.REFRESH_TOKEN;
        }
        return new AuthorizationGrantType(authorizationGrantType);		// Custom authorization grant type
    }
}
