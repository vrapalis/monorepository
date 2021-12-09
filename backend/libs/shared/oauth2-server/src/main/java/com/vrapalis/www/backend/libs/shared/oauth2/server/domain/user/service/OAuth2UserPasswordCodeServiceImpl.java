package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.service;

import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.entity.OAuth2UserPasswordCodeEntity;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.repository.OAuth2UserPasswordCodeRepository;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import java.util.Date;
import java.util.UUID;

@Log4j2
@Service
@Transactional
@AllArgsConstructor
public class OAuth2UserPasswordCodeServiceImpl implements OAuth2UserPasswordCodeService {

    private OAuth2UserPasswordCodeRepository passwordCodeRepository;

    @Override
    public void deletePasswordBeforeThan(Date date) {
        this.passwordCodeRepository.deleteByCreatedDateBefore(date);
    }

    @Override
    public OAuth2UserPasswordCodeEntity findByCode(UUID code) {
        return passwordCodeRepository.findByCode(code).orElseThrow(EntityNotFoundException::new);
    }

    @Override
    public void deleteByUserId(UUID id) {
        passwordCodeRepository.deleteById(id);
    }
}
