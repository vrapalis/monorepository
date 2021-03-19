package com.vrapalis.www.libs.security.services.domains.jwt;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.vrapalis.www.libs.security.entities.domains.user.LibsSecurityJpaUserEntity;
import com.vrapalis.www.libs.security.mappers.domains.jwt.LibsSecurityMappersJwt;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
@AllArgsConstructor
public class LibsSecurityJwtServiceImpl implements LibsSecurityJwtService {
    private LibsSecurityJwtProperties jwtProperties;
    private LibsSecurityMappersJwt jwtMapper;
    private ObjectMapper objectMapper;
    private Algorithm algorithm;

    @Override
    public String generateJwtToken(LibsSecurityJpaUserEntity user) throws JsonProcessingException {
        return JWT.create()
                .withIssuer(user.getEmail())
//                TODO SHOW AFTER MAPPING ERROR, MEY BE BUG FROM MAPSTRUCT
//                .withSubject(objectMapper.writeValueAsString(jwtMapper.mapToJwtUser(user)))
                .withSubject(objectMapper.writeValueAsString(jwtMapper.mapToJwtUserWitchCheck(user)))
                .withExpiresAt(new Date(System.currentTimeMillis() + jwtProperties.getExpireDate()))
                .sign(algorithm);
    }

    @Override
    public LibsSecurityJpaUserEntity readJwtToken(String jwtToken) throws LibsSecurityReadJwtTokenException {
        LibsSecurityJpaUserEntity securityUserEntity = null;
        try {
            final var verify = JWT.require(algorithm).build().verify(jwtToken);
            final var userSubjectAsString = verify.getSubject();
            securityUserEntity = objectMapper.readValue(userSubjectAsString, LibsSecurityJpaUserEntity.class);
        } catch (Exception ex) {
            throw new LibsSecurityReadJwtTokenException(ex);
        }
        return securityUserEntity;
    }
}
