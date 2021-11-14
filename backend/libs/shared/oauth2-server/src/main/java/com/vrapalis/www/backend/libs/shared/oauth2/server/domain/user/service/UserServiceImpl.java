package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.service;

import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.dto.UserRegistrationDto;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.model.UserDetailsModel;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.repository.UserRepository;
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
import java.util.Optional;

@Log4j2
@Service
@Transactional
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;

    @Override
    public ResponseEntity<AbstractServerResponseDto> registration(UserRegistrationDto user) {
        final var regMsg = "User with email: " + user.getEmail() + " registered.";


        log.debug(regMsg);
        return ResponseEntity.created(URI.create("TODO"))
                .body(new SuccessServerResponseDto("Registration Success", regMsg));
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return userRepository.findByEmail(email).map(UserDetailsModel::new).orElseThrow(EntityNotFoundException::new);
    }
}
