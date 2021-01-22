package com.vrapalis.www.libs.security.models;

import com.vrapalis.www.libs.security.entities.domains.user.LibsSecurityJpaUserEntity;
import lombok.AllArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@AllArgsConstructor
public class LibsSecurityModelsUserDetails implements UserDetails {
    private final LibsSecurityJpaUserEntity userEntity;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        final List<GrantedAuthority> authorities = new ArrayList<>();
        userEntity.getRoles().forEach(role -> {
            final var grantedAuthorityFromRole = new SimpleGrantedAuthority(role.getName());
            authorities.add(grantedAuthorityFromRole);
            role.getAuthorities().forEach(auth -> {
                final var grantedAuthority = new SimpleGrantedAuthority(auth.getName());
                authorities.add(grantedAuthority);
            });
        });
        return authorities;
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
