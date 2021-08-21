package de.delloit.www.backend.apps.estatemanagement.authorization.domain.user.service;

import de.delloit.www.backend.apps.estatemanagement.authorization.domain.api.EmailApiClient;
import de.delloit.www.backend.apps.estatemanagement.authorization.domain.api.EmailSendDto;
import de.delloit.www.backend.apps.estatemanagement.authorization.domain.user.dto.UserSignInDto;
import de.delloit.www.backend.apps.estatemanagement.authorization.domain.user.dto.UserSignInSuccessResponseDto;
import de.delloit.www.backend.apps.estatemanagement.authorization.domain.user.dto.UserSignUpUserDto;
import de.delloit.www.backend.apps.estatemanagement.authorization.domain.user.entity.UserAccount;
import de.delloit.www.backend.apps.estatemanagement.authorization.domain.user.entity.UserEntity;
import de.delloit.www.backend.apps.estatemanagement.authorization.domain.user.error.UserSignInError;
import de.delloit.www.backend.apps.estatemanagement.authorization.domain.user.error.UserSignUpError;
import de.delloit.www.backend.apps.estatemanagement.authorization.domain.user.model.UserSecurityModel;
import de.delloit.www.backend.apps.estatemanagement.authorization.domain.user.repository.UserRepository;
import de.delloit.www.backend.libs.shared.dto.domain.server.AbstractServerResponseDto;
import de.delloit.www.backend.libs.shared.dto.domain.server.SuccessServerResponseDto;
import de.delloit.www.backend.libs.shared.util.TokenGenerationSharadUtility;
import lombok.AllArgsConstructor;
import lombok.NonNull;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import java.util.Optional;
import java.util.Random;
import java.util.UUID;

@Service
@Log4j2
@Transactional
@AllArgsConstructor
public class UserServiceImpl implements UserService {
    private UserRepository userRepository;
    private EmailApiClient emailApiClient;

    @Override
    public UserDetails loadUserByUsername(String mobilePhone) throws UsernameNotFoundException {
        final var userEntity = userRepository.findByMobilePhone(mobilePhone)
                .orElseThrow(EntityNotFoundException::new);
        return new UserSecurityModel(userEntity);
    }

    @Override
    public ResponseEntity<AbstractServerResponseDto> signUp(@NonNull UserSignUpUserDto signUpUser) throws UserSignUpError {
        try {
            final var generatedPassword = TokenGenerationSharadUtility.generateSixthDigitsToken().toString();

            final var optionalUser = userRepository.findByMobilePhone(signUpUser.getMobilePhone());
            if (optionalUser.isPresent()) {
                final var userEntity = optionalUser.get();
                final var userAccount = userEntity.getUserAccount();
                if (userAccount.getPassword() != null) {
                    throw new RuntimeException("Password was already generated for you");
                }
                userAccount.setAccountNonExpired(true);
                userAccount.setAccountNonLocked(true);
                userAccount.setCredentialsNonExpired(true);
                userAccount.setIsEnabled(true);
                userAccount.setPassword(generatedPassword);
            } else {
                final var userAccount = UserAccount.builder()
                        .accountNonExpired(false)
                        .accountNonLocked(false)
                        .credentialsNonExpired(false)
                        .isEnabled(false)
                        .password(generatedPassword)
                        .build();

                final var userEntity = UserEntity.builder()
                        .mobilePhone(signUpUser.getMobilePhone())
                        .userAccount(userAccount)
                        .build();

                userAccount.setUser(userEntity);

                userRepository.saveAndFlush(userEntity);
            }

            emailApiClient.sendEmail(EmailSendDto.builder()
                    .mailTo(signUpUser.getEmail()).subject("Delloit").text("Your sign in password is: " + "<b>" + generatedPassword + "</b>")
                    .build());

        } catch (Exception ex) {
            log.error(ex.getLocalizedMessage());
            throw new UserSignUpError(ex.getMessage());
        }
        return ResponseEntity.ok(new SuccessServerResponseDto("Success", "Password will be send on your device"));
    }

    @Override
    public ResponseEntity<AbstractServerResponseDto> signIn(@NonNull UserSignInDto signInUser) throws UserSignInError {

        try {
            final var userEntity = userRepository.findByMobilePhone(signInUser.getMobilePhone())
                    .orElseThrow(EntityNotFoundException::new);
            final var userAccount = userEntity.getUserAccount();
            if (!userAccount.getPassword().equals(signInUser.getPassword())) {
                throw new RuntimeException();
            } else {
                userAccount.setAccountNonExpired(true);
                userAccount.setAccountNonLocked(true);
                userAccount.setCredentialsNonExpired(true);
                userAccount.setIsEnabled(true);
                userAccount.setPassword(null);
            }
        } catch (Exception ex) {
            log.error(ex.getLocalizedMessage());
            throw new UserSignInError(ex.getMessage());
        }
        return ResponseEntity.ok(new UserSignInSuccessResponseDto("Jwt token will be generated as soon as possible, not ready yet",
                "Success", "Sign in success"));
    }
}
