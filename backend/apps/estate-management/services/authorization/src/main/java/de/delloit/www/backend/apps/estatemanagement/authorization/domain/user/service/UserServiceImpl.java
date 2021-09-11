package de.delloit.www.backend.apps.estatemanagement.authorization.domain.user.service;

import de.delloit.www.backend.apps.estatemanagement.authorization.domain.api.EmailApiClient;
import de.delloit.www.backend.apps.estatemanagement.authorization.domain.api.SmsSendDto;
import de.delloit.www.backend.apps.estatemanagement.authorization.domain.role.entity.RoleEntity;
import de.delloit.www.backend.apps.estatemanagement.authorization.domain.user.dto.UserSignInDto;
import de.delloit.www.backend.apps.estatemanagement.authorization.domain.user.dto.UserSignInSuccessResponseDto;
import de.delloit.www.backend.apps.estatemanagement.authorization.domain.user.dto.UserSignUpUserDto;
import de.delloit.www.backend.apps.estatemanagement.authorization.domain.user.entity.UserAccountEntity;
import de.delloit.www.backend.apps.estatemanagement.authorization.domain.user.entity.UserEntity;
import de.delloit.www.backend.apps.estatemanagement.authorization.domain.user.entity.UserPasswordEntity;
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
import java.sql.Timestamp;
import java.util.Set;

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
            final var userPasswordEntity = UserPasswordEntity.builder()
                    .password(generatedPassword)
                    .signInTryCount(0)
                    .build();
            final var optionalUser = userRepository.findByMobilePhone(signUpUser.getMobilePhone());

            if (optionalUser.isPresent()) {
                final var userEntity = optionalUser.get();
                final var passwordEntity = userEntity.getUserPasswordEntity();

                if (passwordEntity != null) {
                    passwordEntity.setPassword(generatedPassword);
                    passwordEntity.setUser(userEntity);
                    // TODO COMPARE TIME UPDATED DATE
                    final var timestamp = new Timestamp(System.currentTimeMillis());

                } else {
                    userPasswordEntity.setPassword(generatedPassword);
                    userPasswordEntity.setUser(userEntity);
                    userEntity.setUserPasswordEntity(userPasswordEntity);
                }
            } else {
                final var userAccountEntity = UserAccountEntity.builder()
                        .accountNonExpired(false)
                        .accountNonLocked(false)
                        .credentialsNonExpired(false)
                        .isEnabled(false)
                        .password(generatedPassword)
                        .build();

                final RoleEntity roleEntity = RoleEntity.builder().name("delloit-user").build();

                final var userEntity = UserEntity.builder()
                        .mobilePhone(signUpUser.getMobilePhone())
                        .userAccountEntity(userAccountEntity)
                        .userPasswordEntity(userPasswordEntity)
                        .roles(Set.of(roleEntity))
                        .build();

                userAccountEntity.setUser(userEntity);
                userPasswordEntity.setUser(userEntity);
                roleEntity.setUsers(Set.of(userEntity));

                userRepository.saveAndFlush(userEntity);
            }

            emailApiClient.sendSms(SmsSendDto.builder()
                    .phoneNumber(signUpUser.getMobilePhone())
                    .from("Delloit")
                    .msg(generatedPassword)
                    .build());

            return ResponseEntity.ok(new SuccessServerResponseDto("Success", "Password was send to your device"));
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
            final var userAccountEntity = userEntity.getUserAccountEntity();
            final var userPasswordEntity = userEntity.getUserPasswordEntity();

            if(userPasswordEntity.getSignInTryCount() > 3) {
                throw new RuntimeException("Typed wrong password three times, sign up new");
            }

            if (!userPasswordEntity.getPassword().equals(signInUser.getPassword())) {
                userPasswordEntity.setSignInTryCount(userPasswordEntity.getSignInTryCount() + 1);
                throw new RuntimeException("Wrong password");
            } else {
                userAccountEntity.setAccountNonExpired(true);
                userAccountEntity.setAccountNonLocked(true);
                userAccountEntity.setCredentialsNonExpired(true);
                userAccountEntity.setIsEnabled(true);

                // TODO DELETE RELATIONAL_SHIP
                userEntity.setUserPasswordEntity(null);
            }

            return ResponseEntity.ok(
                    new UserSignInSuccessResponseDto(jwtService.generateToken(new UserSecurityModel(userEntity),
                            "estate-management-authorization-service"),
                            "Success",
                            "Sign in success"));
        } catch (Exception ex) {
            log.error(ex.getMessage());
            throw new UserSignInError(ex.getMessage());
        }
    }
}
