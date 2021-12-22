package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.authorization;

import java.time.Instant;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "oauth2_authorization")
public class OAuth2CustomAuthorization {
    @Id
    private String id;
    private String registeredClientId;
    private String principalName;
    private String authorizationGrantType;
    @Column(length = 10000)
    private String attributes;
    @Column(length = 500)
    private String state;

    @Column(length = 10000)
    private String authorizationCode;
    private Instant authorizationCodeIssuedAt;
    private Instant authorizationCodeExpiresAt;
    private String authorizationCodeMetadata;

    @Column(length = 10000)
    private String accessToken;
    private Instant accessTokenIssuedAt;
    private Instant accessTokenExpiresAt;
    @Column(length = 2000)
    private String accessTokenMetadata;
    @Column(length = 1000)
    private String accessTokenScopes;

    @Column(length = 10000)
    private String refreshToken;
    private Instant refreshTokenIssuedAt;
    private Instant refreshTokenExpiresAt;
    @Column(length = 2000)
    private String refreshTokenMetadata;

    @Column(length = 10000)
    private String idToken;
    private Instant idTokenIssuedAt;
    private Instant idTokenExpiresAt;
    @Column(length = 2000)
    private String idTokenMetadata;
    @Column(length = 2000)
    private String idTokenClaims;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getRegisteredClientId() {
        return registeredClientId;
    }

    public void setRegisteredClientId(String registeredClientId) {
        this.registeredClientId = registeredClientId;
    }

    public String getPrincipalName() {
        return principalName;
    }

    public void setPrincipalName(String principalName) {
        this.principalName = principalName;
    }

    public String getAuthorizationGrantType() {
        return authorizationGrantType;
    }

    public void setAuthorizationGrantType(String authorizationGrantType) {
        this.authorizationGrantType = authorizationGrantType;
    }

    public String getAttributes() {
        return attributes;
    }

    public void setAttributes(String attributes) {
        this.attributes = attributes;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getAuthorizationCode() {
        return authorizationCode;
    }

    public void setAuthorizationCode(String authorizationCode) {
        this.authorizationCode = authorizationCode;
    }

    public Instant getAuthorizationCodeIssuedAt() {
        return authorizationCodeIssuedAt;
    }

    public void setAuthorizationCodeIssuedAt(Instant authorizationCodeIssuedAt) {
        this.authorizationCodeIssuedAt = authorizationCodeIssuedAt;
    }

    public Instant getAuthorizationCodeExpiresAt() {
        return authorizationCodeExpiresAt;
    }

    public void setAuthorizationCodeExpiresAt(Instant authorizationCodeExpiresAt) {
        this.authorizationCodeExpiresAt = authorizationCodeExpiresAt;
    }

    public String getAuthorizationCodeMetadata() {
        return authorizationCodeMetadata;
    }

    public void setAuthorizationCodeMetadata(String authorizationCodeMetadata) {
        this.authorizationCodeMetadata = authorizationCodeMetadata;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    public Instant getAccessTokenIssuedAt() {
        return accessTokenIssuedAt;
    }

    public void setAccessTokenIssuedAt(Instant accessTokenIssuedAt) {
        this.accessTokenIssuedAt = accessTokenIssuedAt;
    }

    public Instant getAccessTokenExpiresAt() {
        return accessTokenExpiresAt;
    }

    public void setAccessTokenExpiresAt(Instant accessTokenExpiresAt) {
        this.accessTokenExpiresAt = accessTokenExpiresAt;
    }

    public String getAccessTokenMetadata() {
        return accessTokenMetadata;
    }

    public void setAccessTokenMetadata(String accessTokenMetadata) {
        this.accessTokenMetadata = accessTokenMetadata;
    }

    public String getAccessTokenScopes() {
        return accessTokenScopes;
    }

    public void setAccessTokenScopes(String accessTokenScopes) {
        this.accessTokenScopes = accessTokenScopes;
    }

    public String getRefreshToken() {
        return refreshToken;
    }

    public void setRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken;
    }

    public Instant getRefreshTokenIssuedAt() {
        return refreshTokenIssuedAt;
    }

    public void setRefreshTokenIssuedAt(Instant refreshTokenIssuedAt) {
        this.refreshTokenIssuedAt = refreshTokenIssuedAt;
    }

    public Instant getRefreshTokenExpiresAt() {
        return refreshTokenExpiresAt;
    }

    public void setRefreshTokenExpiresAt(Instant refreshTokenExpiresAt) {
        this.refreshTokenExpiresAt = refreshTokenExpiresAt;
    }

    public String getRefreshTokenMetadata() {
        return refreshTokenMetadata;
    }

    public void setRefreshTokenMetadata(String refreshTokenMetadata) {
        this.refreshTokenMetadata = refreshTokenMetadata;
    }

    public String getIdToken() {
        return idToken;
    }

    public void setIdToken(String idToken) {
        this.idToken = idToken;
    }

    public Instant getIdTokenIssuedAt() {
        return idTokenIssuedAt;
    }

    public void setIdTokenIssuedAt(Instant idTokenIssuedAt) {
        this.idTokenIssuedAt = idTokenIssuedAt;
    }

    public Instant getIdTokenExpiresAt() {
        return idTokenExpiresAt;
    }

    public void setIdTokenExpiresAt(Instant idTokenExpiresAt) {
        this.idTokenExpiresAt = idTokenExpiresAt;
    }

    public String getIdTokenMetadata() {
        return idTokenMetadata;
    }

    public void setIdTokenMetadata(String idTokenMetadata) {
        this.idTokenMetadata = idTokenMetadata;
    }

    public String getIdTokenClaims() {
        return idTokenClaims;
    }

    public void setIdTokenClaims(String idTokenClaims) {
        this.idTokenClaims = idTokenClaims;
    }
}
