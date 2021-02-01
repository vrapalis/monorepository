package com.vrapalis.www.libs.security.entities.domains.account;

import com.vrapalis.www.libs.security.entities.domains.common.LibsSecurityJpaAbstractEntity;
import com.vrapalis.www.libs.security.entities.domains.user.LibsSecurityJpaUserEntity;
import lombok.*;
import lombok.experimental.SuperBuilder;

import javax.persistence.*;

@Getter
@Setter
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "account")
public class LibsSecurityJpaAccountEntity extends LibsSecurityJpaAbstractEntity {
    @Id
    private Integer id;

    private String password;

    private Boolean accountNonExpired;

    private Boolean accountNonLocked;

    private Boolean credentialsNonExpired;

    private Boolean isEnabled;

    @MapsId
    @OneToOne
    @JoinColumn(name = "user_id")
    private LibsSecurityJpaUserEntity user;
}
