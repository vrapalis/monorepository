package com.vrapalis.www.libs.security.services.domains.user;

import com.vrapalis.www.libs.security.models.LibsSecurityModelsUserDetails;
import com.vrapalis.www.libs.security.repositories.domains.user.LibsSecurityJpaUserEntityRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;

@Service
@AllArgsConstructor
public class LibsSecurityUserDetailsService implements UserDetailsService {
    private LibsSecurityJpaUserEntityRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws EntityNotFoundException {
        final var userEntity = userRepository
                .findFirstByEmail(email).orElseThrow(EntityNotFoundException::new);
        return new LibsSecurityModelsUserDetails(userEntity);
    }
}
