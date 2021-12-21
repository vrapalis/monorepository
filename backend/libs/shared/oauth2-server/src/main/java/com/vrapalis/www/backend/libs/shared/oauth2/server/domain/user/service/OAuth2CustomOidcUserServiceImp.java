package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.service;

import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.entity.OAuth2UserEntity;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.model.OAuth2UserModel;
import lombok.AllArgsConstructor;
import org.springframework.security.oauth2.client.oidc.userinfo.OidcUserRequest;
import org.springframework.security.oauth2.client.oidc.userinfo.OidcUserService;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.oidc.user.DefaultOidcUser;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class OAuth2CustomOidcUserServiceImp extends OidcUserService {

    private OAuth2UserService userService;

    @Override
    public OidcUser loadUser(OidcUserRequest userRequest) throws OAuth2AuthenticationException {
        final var oidcUser = super.loadUser(userRequest);
        final var auth2UserModel = new OAuth2UserModel(oidcUser);
        OAuth2UserEntity persistedUser = userService.save(auth2UserModel, userRequest.getClientRegistration().getClientName());
        return (OidcUser) new OAuth2UserModel(oidcUser, persistedUser);
    }
}
