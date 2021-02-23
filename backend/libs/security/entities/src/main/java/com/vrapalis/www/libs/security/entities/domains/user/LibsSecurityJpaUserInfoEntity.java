package com.vrapalis.www.libs.security.entities.domains.user;

import com.vrapalis.www.libs.security.entities.domains.common.LibsSecurityJpaAbstractEntity;
import com.vrapalis.www.libs.security.entities.domains.organization.LibsSecurityJpaUserOrganizationType;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
@SuperBuilder
@Table(name = "user_info")
public class LibsSecurityJpaUserInfoEntity extends LibsSecurityJpaAbstractEntity {
    @Id
    private Integer id;

    private String surname;

    private String firstName;

    private Integer age;

    @OneToOne
    private LibsSecurityJpaUserOrganizationType organizationType;

    @MapsId
    @OneToOne
    @JoinColumn(name = "user_id")
    private LibsSecurityJpaUserEntity user;
}
