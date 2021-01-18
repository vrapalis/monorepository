package com.vrapalis.www.libs.security.jpa.domains.user;

import com.vrapalis.www.libs.security.jpa.domains.account.LibsSecurityJpaAccountEntity;
import com.vrapalis.www.libs.security.jpa.domains.common.LibsSecurityJpaAbstractEntity;
import com.vrapalis.www.libs.security.jpa.domains.role.LibsSecurityJpaRoleEntity;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.NaturalId;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

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

    @JoinColumn(name = "user_info_id")
    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private LibsSecurityJpaUserInfoEntity info;

    @ManyToMany(cascade = {
            CascadeType.PERSIST,
            CascadeType.MERGE
    }, fetch = FetchType.EAGER)
    @JoinTable(name = "app_user_role",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id")
    )
    private Set<LibsSecurityJpaRoleEntity> roles = new HashSet<>();
}

