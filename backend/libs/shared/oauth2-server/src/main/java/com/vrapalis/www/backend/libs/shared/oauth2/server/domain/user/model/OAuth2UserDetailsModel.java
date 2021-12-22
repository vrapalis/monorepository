package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.entity.OAuth2UserEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.stream.Collectors;

@Data
@JsonSerialize
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(value = { "authorities", "enabled"}, ignoreUnknown = true, allowGetters = true)
public class OAuth2UserDetailsModel implements UserDetails {
    private OAuth2UserEntity userEntity;

    @JsonProperty("authorities")
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return userEntity.getRoles().stream()
                .map(roleEntity -> new SimpleGrantedAuthority(roleEntity.getName()))
                .collect(Collectors.toList());
    }

    @Override
    @JsonProperty("password")
    public String getPassword() {
        return userEntity.getAccount().getPassword();
    }

    @Override
    @JsonProperty("username")
    public String getUsername() {
        return userEntity.getId().toString();
    }

    @Override
    @JsonProperty("accountNonExpired")
    public boolean isAccountNonExpired() {
        return userEntity.getAccount().getAccountNonExpired();
    }

    @Override
    @JsonProperty("accountNonLocked")
    public boolean isAccountNonLocked() {
        return userEntity.getAccount().getAccountNonLocked();
    }

    @Override
    @JsonProperty("credentialsNonExpired")
    public boolean isCredentialsNonExpired() {
        return userEntity.getAccount().getCredentialsNonExpired();
    }

    @Override
    @JsonProperty("enabled")
    public boolean isEnabled() {
        return userEntity.getAccount().getIsEnabled();
    }
}
