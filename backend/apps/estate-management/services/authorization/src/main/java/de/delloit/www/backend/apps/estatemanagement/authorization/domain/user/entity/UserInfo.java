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
@Table(name = "users_info")
@SuperBuilder
@ToString(onlyExplicitlyIncluded = true)
@NoArgsConstructor
@AllArgsConstructor
public class UserInfo extends BaseEntity {
    @Id
    @ToString.Include
    private UUID userId;

    @ToString.Include
    private String firstName;

    @ToString.Include
    private String lastName;

    @MapsId
    @OneToOne
    @JoinColumn(name = "user_id")
    private UserEntity user;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof UserInfo)) return false;
        if (!super.equals(o)) return false;
        UserInfo userInfo = (UserInfo) o;
        return getUserId().equals(userInfo.getUserId());
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), getUserId());
    }
}
