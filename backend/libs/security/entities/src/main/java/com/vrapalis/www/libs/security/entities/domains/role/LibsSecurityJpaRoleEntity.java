package com.vrapalis.www.libs.security.entities.domains.role;

import com.vrapalis.www.libs.security.entities.domains.authority.LibsSecurityJpaAuthorityEntity;
import com.vrapalis.www.libs.security.entities.domains.common.LibsSecurityJpaAbstractEntity;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.NaturalId;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Data
@NoArgsConstructor
@Entity
@Table(name = "role")
public class LibsSecurityJpaRoleEntity extends LibsSecurityJpaAbstractEntity {
    @Id
    private Integer id;

    @NaturalId
    @Column(nullable = false, unique = true)
    private String name;

    private String description;

    @ManyToMany(
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            }
    )
    @JoinTable(name = "role_authority",
            joinColumns = @JoinColumn(name = "role_id"),
            inverseJoinColumns = @JoinColumn(name = "authority_id")
    )
    private Set<LibsSecurityJpaAuthorityEntity> authorities = new HashSet<>();

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;

        if (!(o instanceof LibsSecurityJpaRoleEntity))
            return false;

        LibsSecurityJpaRoleEntity role = (LibsSecurityJpaRoleEntity) o;
        return Objects.equals(name, role.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name);
    }
}
