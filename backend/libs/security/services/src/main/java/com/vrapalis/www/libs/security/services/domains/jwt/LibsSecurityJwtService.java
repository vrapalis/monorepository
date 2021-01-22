package com.vrapalis.www.libs.security.services.domains.jwt;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.vrapalis.www.libs.security.entities.domains.user.LibsSecurityJpaUserEntity;

public interface LibsSecurityJwtService {
    String generateJwtToken(LibsSecurityJpaUserEntity user) throws JsonProcessingException;

    LibsSecurityJpaUserEntity readJwtToken(String jwtToken) throws LibsSecurityReadJwtTokenException;
}
