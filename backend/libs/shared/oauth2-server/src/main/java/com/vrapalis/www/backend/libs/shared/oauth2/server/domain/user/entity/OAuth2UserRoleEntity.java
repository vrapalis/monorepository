package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Data
@Entity
@Builder
@JsonSerialize
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties("users")
@Table(name = "oauth2_user_role")
public class OAuth2UserRoleEntity implements Serializable {

    @Id
    private String name;

    @Column(length = 160, nullable = false)
    private String description;

    @ManyToMany(mappedBy = "roles")
    private Set<OAuth2UserEntity> users = new HashSet<>();

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof OAuth2UserRoleEntity)) return false;
        OAuth2UserRoleEntity that = (OAuth2UserRoleEntity) o;
        return getName().equals(that.getName());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getName());
    }
}
