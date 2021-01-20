package com.vrapalis.www.libs.security.services.domains.user;

import com.vrapalis.www.libs.security.dtos.domains.user.LibsSecurityDtoUser;
import com.vrapalis.www.libs.security.errors.domains.authentication.LibsSecurityErrorAuthentication;
import com.vrapalis.www.libs.security.repositories.domains.user.LibsSecurityJpaUserEntityRepository;
import com.vrapalis.www.libs.web.dto.LibsWebDtoServerAbstractResponse;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@AllArgsConstructor
public class LibsSecurityWebUserServiceImpl implements LibsSecurityWebUserService {
    private LibsSecurityJpaUserEntityRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return null;
    }

    @Override
    public ResponseEntity<LibsWebDtoServerAbstractResponse> signIn(LibsSecurityDtoUser signInUser) throws LibsSecurityErrorAuthentication {

        return null;
    }
}
