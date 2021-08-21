package de.delloit.www.backend.apps.estatemanagement.authorization.config.profiles;

import de.delloit.www.backend.apps.estatemanagement.authorization.domain.user.entity.UserEntity;
import de.delloit.www.backend.apps.estatemanagement.authorization.domain.user.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

@Component
@Profile("local")
@AllArgsConstructor
public class LocalProfileRunner implements CommandLineRunner {
    private UserRepository userRepository;

    @Override
    public void run(String... args) throws Exception {
        final var userEntity = UserEntity.builder()
                .email("test@email.com")
                .mobilePhone("545645645")
                .build();
        try {
            userRepository.save(userEntity);
        } catch (Exception ex) {
        }
    }
}
