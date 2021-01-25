package com.vrapalis.www.libs.security.entities.domains.authority;

import com.vrapalis.www.libs.security.entities.domains.common.LibsSecurityJpaAbstractEntity;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;
import org.hibernate.annotations.NaturalId;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Objects;

@Getter
@Setter
@SuperBuilder
@NoArgsConstructor
@Entity
@Table(name = "authority")
public class LibsSecurityJpaAuthorityEntity extends LibsSecurityJpaAbstractEntity {
    @Id
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
