package de.delloit.www.backend.apps.estatemanagement.authorization.domain.user.entity;

import de.delloit.www.backend.apps.estatemanagement.authorization.domain.common.entity.BaseEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import lombok.experimental.SuperBuilder;

import javax.persistence.*;
import java.util.Objects;
import java.util.UUID;

@Data
@Entity
@Table(name = "users_account")
@SuperBuilder
@ToString(onlyExplicitlyIncluded = true)
@NoArgsConstructor
@AllArgsConstructor
public class UserAccount extends BaseEntity {
    @Id
    @ToString.Include
    private UUID userId;

    @ToString.Include
    private String password;

    @ToString.Include
    private Boolean accountNonExpired;

    @ToString.Include
    private Boolean accountNonLocked;

    @ToString.Include
    private Boolean credentialsNonExpired;

    @ToString.Include
    private Boolean isEnabled;

    @MapsId
    @OneToOne
    @JoinColumn(name = "user_id")
    private UserEntity user;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof UserAccount)) return false;
        if (!super.equals(o)) return false;
        UserAccount userInfo = (UserAccount) o;
        return getUserId().equals(userInfo.getUserId());
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), getUserId());
    }
}
