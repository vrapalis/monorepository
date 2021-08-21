package de.delloit.www.backend.apps.estatemanagement.authorization.domain.user.entity;

import de.delloit.www.backend.apps.estatemanagement.authorization.domain.common.entity.BaseEntity;
import de.delloit.www.backend.apps.estatemanagement.authorization.domain.role.entity.RoleEntity;
import lombok.*;
import lombok.experimental.SuperBuilder;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;
import java.util.UUID;

@Data
@Entity
@Table(name = "users")
@SuperBuilder
@ToString(onlyExplicitlyIncluded = true)
@NoArgsConstructor
@AllArgsConstructor
public class UserEntity extends BaseEntity {
    @Id
    @ToString.Include
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @ToString.Include
    private String email;

    @ToString.Include
    private String mobilePhone;

    @JoinColumn(name = "user_id")
    @OneToOne(mappedBy = "user", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private UserAccount userAccount;

    @JoinColumn(name = "user_id")
    @OneToOne(mappedBy = "user")
    private UserInfo userInfo;

    @ManyToMany(fetch = FetchType.EAGER, cascade = {
            CascadeType.PERSIST,
            CascadeType.MERGE
    })
    @JoinTable(name = "users_roles",
            joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "role_name", referencedColumnName = "name")
    )
    @Builder.Default
    private Set<RoleEntity> roles = new HashSet<>();

    public void addRole(RoleEntity role) {
        roles.add(role);
        role.getUsers().add(this);
    }

    public void removeRole(RoleEntity role) {
        roles.remove(role);
        role.getUsers().remove(this);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof UserEntity)) return false;
        UserEntity that = (UserEntity) o;
        return getId().equals(that.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId());
    }
}
