package com.vrapalis.www.libs.security.entities.domains.role;

import com.vrapalis.www.libs.security.entities.domains.authority.LibsSecurityJpaAuthorityEntity;
import com.vrapalis.www.libs.security.entities.domains.common.LibsSecurityJpaAbstractEntity;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;
import org.hibernate.annotations.NaturalId;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Data
@NoArgsConstructor
@SuperBuilder
@Entity
@Table(name = "role")
public class LibsSecurityJpaRoleEntity extends LibsSecurityJpaAbstractEntity {
    @Id
    @SequenceGenerator(name = "role_id_seq", sequenceName = "role_id_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "role_id_seq")
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
    @Builder.Default
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
