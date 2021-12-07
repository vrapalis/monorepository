package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.entity;

import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.common.entity.OAuth2CommonEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;
import java.util.UUID;

@Data
@Entity
@SuperBuilder
@Table(name = "oauth2_user")
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = false)
public class OAuth2UserEntity extends OAuth2CommonEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @Column(unique = true, nullable = false, length = 120)
    private String email;

    @OneToOne(cascade = CascadeType.ALL, optional = false, mappedBy = "user", fetch = FetchType.EAGER)
    private OAuth2UserAccountEntity account;

    @OneToOne(cascade = CascadeType.ALL, optional = false, mappedBy = "user", fetch = FetchType.EAGER)
    private OAuth2UserInfoEntity info;

    @OneToOne(cascade = CascadeType.ALL, optional = false, mappedBy = "user", fetch = FetchType.LAZY)
    private OAuth2UserRegistrationCodeEntity registrationCode;

    @OneToOne(cascade = CascadeType.ALL, mappedBy = "user", fetch = FetchType.LAZY)
    private OAuth2UserPasswordCodeEntity passwordCode;

    @ManyToMany(
            fetch = FetchType.EAGER,
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            }
    )
    @JoinTable(
            name = "oauth2_user_has_role",
            joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "role_name", referencedColumnName = "name")
    )
    private Set<OAuth2UserRoleEntity> roles = new HashSet<>();

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof OAuth2UserEntity)) return false;
        if (!super.equals(o)) return false;
        OAuth2UserEntity that = (OAuth2UserEntity) o;
        return getId().equals(that.getId()) && getEmail().equals(that.getEmail());
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), getId(), getEmail());
    }
}
