package com.vrapalis.www.libs.security.entities.domains.user;

import com.vrapalis.www.libs.security.entities.domains.common.LibsSecurityJpaAbstractEntity;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@Entity
@Table(name = "user_info")
public class LibsSecurityJpaUserInfoEntity extends LibsSecurityJpaAbstractEntity {
    @Id
    private Integer id;

    private String surname;

    private String firstName;

    private Byte age;

    @MapsId
    @OneToOne
    @JoinColumn(name = "user_id")
    private LibsSecurityJpaUserEntity user;
}
