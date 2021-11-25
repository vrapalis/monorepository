package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.service;

import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.dto.OAuth2UserRegistrationExceptionDto;
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

@Log4j2
@Service
@Transactional
@AllArgsConstructor
public class OAuth2UserServiceImpl implements OAuth2UserService {

    private OAuth2UserRepository userRepository;

    @Override
    public ResponseEntity<AbstractServerResponseDto> registration(OAuth2UserRegistrationExceptionDto user) {
        final var regMsg = "User with email: " + user.getEmail() + " registered.";


        log.debug(regMsg);
        return ResponseEntity.created(URI.create("TODO"))
                .body(new SuccessServerResponseDto("Registration Success", regMsg));
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return userRepository.findByEmail(email).map(OAuth2UserDetailsModel::new).orElseThrow(EntityNotFoundException::new);
    }
}
