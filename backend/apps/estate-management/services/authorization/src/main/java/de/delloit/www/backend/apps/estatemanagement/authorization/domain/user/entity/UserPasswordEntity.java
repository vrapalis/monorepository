package de.delloit.www.backend.apps.estatemanagement.authorization.domain.user.entity;

import de.delloit.www.backend.apps.estatemanagement.authorization.domain.common.entity.BaseEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import lombok.experimental.SuperBuilder;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.util.Date;
import java.util.Objects;
import java.util.UUID;

@Data
@Entity
@Table(name = "users_password")
@SuperBuilder
@ToString(onlyExplicitlyIncluded = true)
@NoArgsConstructor
@AllArgsConstructor
public class UserPasswordEntity extends BaseEntity {
    @Id
    @ToString.Include
    private UUID userId;

    @ToString.Include
    @Column(nullable = false)
    private String password;

    @ToString.Include
    @Column(nullable = false)
    private Integer signInTryCount;

    @LastModifiedDate
    @ToString.Include
    @Temporal(TemporalType.TIMESTAMP)
    private Date updatedDate;

    @MapsId
    @OneToOne
    @JoinColumn(name = "user_id")
    private UserEntity user;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof UserPasswordEntity)) return false;
        if (!super.equals(o)) return false;
        UserPasswordEntity that = (UserPasswordEntity) o;
        return getUserId().equals(that.getUserId());
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), getUserId());
    }
}
