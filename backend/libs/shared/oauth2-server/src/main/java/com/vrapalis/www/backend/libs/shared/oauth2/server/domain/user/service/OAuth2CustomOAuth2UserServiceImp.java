package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.service;

import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.entity.OAuth2UserEntity;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.model.OAuth2UserModel;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

@Log4j2
@Service
@AllArgsConstructor
public class OAuth2CustomOAuth2UserServiceImp extends DefaultOAuth2UserService {

    private OAuth2UserService userService;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2User user = (OAuth2User) super.loadUser(userRequest);
        final var auth2UserModel = new OAuth2UserModel(user);
        log.debug("CLIENT REGISTRATION: " + userRequest.getClientRegistration().toString());
        OAuth2UserEntity persistedUser = userService.save(auth2UserModel, userRequest.getClientRegistration().getRegistrationId());
        return new OAuth2UserModel(user, persistedUser);
    }
}
