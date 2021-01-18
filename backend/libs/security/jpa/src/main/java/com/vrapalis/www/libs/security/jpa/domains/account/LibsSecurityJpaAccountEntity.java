package com.vrapalis.www.libs.security.jpa.domains.account;

import com.vrapalis.www.libs.security.jpa.domains.common.LibsSecurityJpaAbstractEntity;
import com.vrapalis.www.libs.security.jpa.domains.user.LibsSecurityJpaUserEntity;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
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
