package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.model;

import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.entity.UserEntity;
import lombok.AllArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.stream.Collectors;

@AllArgsConstructor
public class UserDetailsModel implements UserDetails {
    private UserEntity userEntity;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return userEntity.getRoles().stream()
                .map(roleEntity -> new SimpleGrantedAuthority(roleEntity.getName()))
                .collect(Collectors.toList());
    }

    @Override
    public String getPassword() {
        return userEntity.getAccount().getPassword();
    }

    @Override
    public String getUsername() {
        return userEntity.getEmail();
    }

    @Override
    public boolean isAccountNonExpired() {
        return userEntity.getAccount().getAccountNonExpired();
    }

    @Override
    public boolean isAccountNonLocked() {
        return userEntity.getAccount().getAccountNonLocked();
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return userEntity.getAccount().getCredentialsNonExpired();
    }

    @Override
    public boolean isEnabled() {
        return userEntity.getAccount().getIsEnabled();
    }
}
