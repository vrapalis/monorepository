package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.service;

import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.dto.OAuth2UserRegistrationExceptionDto;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.entity.OAuth2UserAccountEntity;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.entity.OAuth2UserEntity;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.model.OAuth2UserDetailsModel;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.repository.OAuth2UserRepository;
import de.delloit.www.backend.libs.shared.dto.domain.server.AbstractServerResponseDto;
import de.delloit.www.backend.libs.shared.dto.domain.server.SuccessServerResponseDto;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import java.net.URI;
import java.util.UUID;

@Log4j2
@Service
@Transactional
@AllArgsConstructor
public class OAuth2UserServiceImpl implements OAuth2UserService {
    private OAuth2UserRepository userRepository;
    private OAuth2UserRegistrationCodeService codeService;

    @Override
    public ResponseEntity<AbstractServerResponseDto> registration(OAuth2UserRegistrationExceptionDto user) {
        final var regMsg = "User with email: " + user.getEmail() + " registered.";


        log.debug(regMsg);
        return ResponseEntity.created(URI.create("TODO"))
                .body(new SuccessServerResponseDto("Registration Success", regMsg));
    }

    @Override
    public void completeRegistration(UUID userId) {
        final var foundUserEntity = userRepository.findById(userId).orElseThrow(EntityNotFoundException::new);
        final var account = foundUserEntity.getAccount();
        account.setIsEnabled(true);
        account.setAccountNonLocked(true);
        account.setAccountNonExpired(true);
        account.setCredentialsNonExpired(true);
        foundUserEntity.setRegistrationCode(null);
        codeService.deleteByUserId(userId);
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        final var oAuth2UserDetailsModel = userRepository.findByEmail(email).map(OAuth2UserDetailsModel::new).orElseThrow(EntityNotFoundException::new);
        return userRepository.findByEmail(email).map(OAuth2UserDetailsModel::new).orElseThrow(EntityNotFoundException::new);
    }
}
