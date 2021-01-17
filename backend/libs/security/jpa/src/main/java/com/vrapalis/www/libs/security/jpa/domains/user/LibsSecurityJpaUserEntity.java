package com.vrapalis.www.libs.security.jpa.domains.user;

import com.vrapalis.www.libs.security.jpa.domains.account.LibsSecurityJpaAccountEntity;
import com.vrapalis.www.libs.security.jpa.domains.common.LibsSecurityJpaAbstractEntity;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.NaturalId;

import javax.persistence.*;

@Data
@NoArgsConstructor
@Entity
@Table(name = "app_user")
public class LibsSecurityJpaUserEntity extends LibsSecurityJpaAbstractEntity {
    @Id
    @SequenceGenerator(name = "app_user_id_seq", sequenceName = "app_user_id_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "app_user_id_seq")
    private Integer id;

    @NaturalId
    @Column(nullable = false, unique = true)
    private String email;

    @JoinColumn(name = "account_id")
    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private LibsSecurityJpaAccountEntity account;
}

