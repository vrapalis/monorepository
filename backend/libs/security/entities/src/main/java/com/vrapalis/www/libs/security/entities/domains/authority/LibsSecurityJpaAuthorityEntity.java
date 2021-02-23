package com.vrapalis.www.libs.security.entities.domains.authority;

import com.vrapalis.www.libs.security.entities.domains.common.LibsSecurityJpaAbstractEntity;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;
import org.hibernate.annotations.NaturalId;

import javax.persistence.*;
import java.util.Objects;

@Getter
@Setter
@SuperBuilder
@NoArgsConstructor
@Entity
@Table(name = "authority")
public class LibsSecurityJpaAuthorityEntity extends LibsSecurityJpaAbstractEntity {
    @Id
    @SequenceGenerator(name = "authority_id_seq", sequenceName = "authority_id_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "authority_id_seq")
    private Integer id;

    @NaturalId
    @Column(nullable = false, unique = true)
    private String name;

    private String description;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;

        if (!(o instanceof LibsSecurityJpaAuthorityEntity))
            return false;

        LibsSecurityJpaAuthorityEntity authority = (LibsSecurityJpaAuthorityEntity) o;
        return Objects.equals(name, authority.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name);
    }
}
