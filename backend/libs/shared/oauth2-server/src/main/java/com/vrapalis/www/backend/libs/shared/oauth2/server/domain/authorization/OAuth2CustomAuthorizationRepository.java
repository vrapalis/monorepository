package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.authorization;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface OAuth2CustomAuthorizationRepository extends JpaRepository<OAuth2CustomAuthorization, String> {
    Optional<OAuth2CustomAuthorization> findByState(String state);
    Optional<OAuth2CustomAuthorization> findByAuthorizationCode(String authorizationCode);
    Optional<OAuth2CustomAuthorization> findByAccessToken(String accessToken);
    Optional<OAuth2CustomAuthorization> findByRefreshToken(String refreshToken);
    @Query("select a from OAuth2CustomAuthorization a where a.state = :token" +
            " or a.authorizationCode = :token" +
            " or a.accessToken = :token" +
            " or a.refreshToken = :token"
    )
    Optional<OAuth2CustomAuthorization> findByStateOrAuthorizationCodeOrAccessTokenOrRefreshToken(String token);
}
