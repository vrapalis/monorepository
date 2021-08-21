package de.delloit.www.backend.apps.estatemanagement.authorization.domain.user.model;

import de.delloit.www.backend.apps.estatemanagement.authorization.domain.role.entity.RoleEntity;
import de.delloit.www.backend.apps.estatemanagement.authorization.domain.user.entity.UserEntity;
import lombok.Value;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.stream.Collectors;

@Value
public class UserSecurityModel implements UserDetails {
    private final UserEntity userEntity;

    private static SimpleGrantedAuthority mapToSimpleGrantedAuthority(RoleEntity roleEntity) {
        return new SimpleGrantedAuthority(roleEntity.getName());
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return userEntity.getRoles().stream()
                .map(UserSecurityModel::mapToSimpleGrantedAuthority)
                .collect(Collectors.toSet());
    }

    @Override
    public String getPassword() {
        return userEntity.getUserAccount().getPassword();
    }

    @Override
    public String getUsername() {
        return userEntity.getEmail();
    }

    @Override
    public boolean isAccountNonExpired() {
        return userEntity.getUserAccount().getAccountNonExpired();
    }

    @Override
    public boolean isAccountNonLocked() {
        return userEntity.getUserAccount().getAccountNonLocked();
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return userEntity.getUserAccount().getCredentialsNonExpired();
    }

    @Override
    public boolean isEnabled() {
        return userEntity.getUserAccount().getIsEnabled();
    }
}
