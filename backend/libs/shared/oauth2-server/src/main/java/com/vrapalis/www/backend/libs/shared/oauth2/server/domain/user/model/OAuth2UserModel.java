package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.model;

import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.entity.OAuth2UserEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.oauth2.core.oidc.OidcIdToken;
import org.springframework.security.oauth2.core.oidc.OidcUserInfo;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.security.oauth2.core.user.OAuth2User;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@Data
@AllArgsConstructor
public class OAuth2UserModel implements OidcUser {
    private OAuth2User oauth2User;
    private OAuth2UserEntity userEntity;

    public OAuth2UserModel(OAuth2User oauth2User) {
        this.oauth2User = oauth2User;
    }

    @Override
    public Map<String, Object> getAttributes() {
        return oauth2User.getAttributes();
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return oauth2User.getAuthorities();
    }

    @Override
    public String getName() {
        if (userEntity == null) {
            return "";
        }
        return userEntity.getId().toString();
    }

    public String getFullName() {
        return oauth2User.getAttribute("name");
    }

    public String getEmail() {
        return oauth2User.<String>getAttribute("email");
    }

    public Boolean isEmailVerified() {
        return oauth2User.getAttribute("email_verified");
    }

    public String getGivenName() {
        return oauth2User.getAttribute("given_name");
    }

    public String getFamilyName() {
        return oauth2User.getAttribute("family_name");
    }

    public String getSub() {
        return oauth2User.getAttribute("sub");
    }

    public String getPicture() {
        return oauth2User.getAttribute("picture");
    }

    @Override
    public Map<String, Object> getClaims() {
        if(oauth2User instanceof OidcUser) {
            return ((OidcUser) oauth2User).getClaims();
        }
        return null;
    }

    @Override
    public OidcUserInfo getUserInfo() {
        if(oauth2User instanceof OidcUser) {
            return ((OidcUser) oauth2User).getUserInfo();
        }
        return null;
    }

    @Override
    public OidcIdToken getIdToken() {
        if(oauth2User instanceof OidcUser) {
            return ((OidcUser) oauth2User).getIdToken();
        }
        return null;
    }
}
