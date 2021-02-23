package com.vrapalis.www.libs.security.entities.domains.organization;

import com.vrapalis.www.libs.security.entities.domains.common.LibsSecurityJpaAbstractEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;
import org.hibernate.annotations.NaturalId;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
@SuperBuilder
@Table(name = "organization_type")
public class LibsSecurityJpaUserOrganizationType extends LibsSecurityJpaAbstractEntity {
    @Id
    @SequenceGenerator(name = "organization_type_seq", sequenceName = "organization_type_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "organization_type_seq")
    private Integer id;

    @NaturalId
    @Column(unique = true, nullable = false, updatable = false, length = 120)
    private String name;

    private String description;
}
