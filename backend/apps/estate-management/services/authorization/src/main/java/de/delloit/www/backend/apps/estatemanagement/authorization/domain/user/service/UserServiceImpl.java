package de.delloit.www.backend.apps.estatemanagement.authorization.domain.user.service;

import de.delloit.www.backend.apps.estatemanagement.authorization.domain.api.EmailApiClient;
import de.delloit.www.backend.apps.estatemanagement.authorization.domain.api.SmsSendDto;
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
import de.delloit.www.backend.libs.shared.security.domain.jwt.service.SharedSecurityJwtService;
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

@Service
@Log4j2
@Transactional
@AllArgsConstructor
public class UserServiceImpl implements UserService {
    private UserRepository userRepository;
    private EmailApiClient emailApiClient;
    private SharedSecurityJwtService jwtService;

    @Override
    public UserDetails loadUserByUsername(String mobilePhone) throws UsernameNotFoundException {
        final var userEntity = userRepository.findByMobilePhone(mobilePhone)
                .orElseThrow(EntityNotFoundException::new);
        return new UserSecurityModel(userEntity);
    }

    @Override
    public ResponseEntity<AbstractServerResponseDto> signUp(@NonNull UserSignUpUserDto signUpUser) throws UserSignUpError {
        try {
            final var generatedPassword = TokenGenerationSharadUtility.generateSixthDigitsToken();

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

            emailApiClient.sendSms(SmsSendDto.builder()
                    .phoneNumber(signUpUser.getMobilePhone())
                    .from("Delloit")
                    .msg(generatedPassword)
                    .build());

            return ResponseEntity.ok(new SuccessServerResponseDto("Success", "Password will be send on your device"));
        } catch (Exception ex) {
            log.error(ex.getLocalizedMessage());
            throw new UserSignUpError(ex.getMessage());
        }
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

            return ResponseEntity.ok(
                    new UserSignInSuccessResponseDto(jwtService.generateToken(new UserSecurityModel(userEntity),
                            "estate-management-authorization-service"),
                            "Success",
                            "Sign in success"));
        } catch (Exception ex) {
            log.error(ex.getLocalizedMessage());
            throw new UserSignInError(ex.getMessage());
        }
    }
}
