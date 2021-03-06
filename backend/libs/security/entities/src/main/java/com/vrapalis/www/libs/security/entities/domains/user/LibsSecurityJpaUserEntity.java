package com.vrapalis.www.libs.security.entities.domains.user;

import com.vrapalis.www.libs.security.entities.domains.account.LibsSecurityJpaAccountEntity;
import com.vrapalis.www.libs.security.entities.domains.common.LibsSecurityJpaAbstractEntity;
import com.vrapalis.www.libs.security.entities.domains.role.LibsSecurityJpaRoleEntity;
import lombok.*;
import lombok.experimental.SuperBuilder;
import org.hibernate.annotations.NaturalId;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@SuperBuilder
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
    @Builder.Default
    private Set<LibsSecurityJpaRoleEntity> roles = new HashSet<>();

    @OneToOne(mappedBy = "userEntity", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private LibsSecurityJpaUserConfirmEntity confirmEntity;
}

