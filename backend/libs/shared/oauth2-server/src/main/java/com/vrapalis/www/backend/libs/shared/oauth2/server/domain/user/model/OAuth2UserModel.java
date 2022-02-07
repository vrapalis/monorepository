package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.entity.OAuth2UserEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.oauth2.core.oidc.OidcIdToken;
import org.springframework.security.oauth2.core.oidc.OidcUserInfo;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.security.oauth2.core.user.OAuth2User;

import java.io.Serializable;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@Data
@JsonSerialize
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(value = {},ignoreUnknown = true, allowGetters = true)
public class OAuth2UserModel implements OidcUser, Serializable {
    private OAuth2User oauth2User;
    private OAuth2UserEntity userEntity;

    public OAuth2UserModel(OAuth2User oauth2User) {
        this.oauth2User = oauth2User;
    }

    @Override
    @JsonProperty
    public Map<String, Object> getAttributes() {
        return oauth2User.getAttributes();
    }

    @Override
    @JsonProperty
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return oauth2User.getAuthorities();
    }

    @Override
    @JsonProperty
    public String getName() {
        if (userEntity == null) {
            return "";
        }
        return userEntity.getId().toString();
    }

    @JsonProperty
    public String getFullName() {
        return oauth2User.getAttribute("name");
    }

    @JsonProperty
    public String getEmail() {
        return oauth2User.<String>getAttribute("email");
    }

    @JsonProperty
    public Boolean isEmailVerified() {
        return oauth2User.getAttribute("email_verified");
    }

    @JsonProperty
    public String getGivenName() {
        return oauth2User.getAttribute("given_name");
    }

    @JsonProperty
    public String getFamilyName() {
        return oauth2User.getAttribute("family_name");
    }

    @JsonProperty
    public String getSub() {
        return oauth2User.getAttribute("sub");
    }

    @JsonProperty
    public String getPicture() {
        return oauth2User.getAttribute("picture");
    }

    @Override
    @JsonProperty
    public Map<String, Object> getClaims() {
        if(oauth2User instanceof OidcUser) {
            return ((OidcUser) oauth2User).getClaims();
        }
        return new HashMap<>();
    }

    @Override
    @JsonProperty
    public OidcUserInfo getUserInfo() {
        if(oauth2User instanceof OidcUser) {
            return ((OidcUser) oauth2User).getUserInfo();
        }
        return null;
    }

    @Override
    @JsonProperty
    public OidcIdToken getIdToken() {
        if(oauth2User instanceof OidcUser) {
            return ((OidcUser) oauth2User).getIdToken();
        }
        return null;
    }
}
