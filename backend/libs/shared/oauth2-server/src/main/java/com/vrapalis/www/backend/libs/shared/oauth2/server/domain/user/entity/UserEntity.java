package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.entity;

import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.common.entity.CommonEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@Data
@Entity
@SuperBuilder
@Table(name = "oauth2_user")
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = false)
public class UserEntity extends CommonEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @Column(unique = true, nullable = false, length = 120)
    private String email;

    @OneToOne(cascade = CascadeType.ALL, optional = false, mappedBy = "user", fetch = FetchType.EAGER)
    private UserAccountEntity account;

    @OneToOne(cascade = CascadeType.ALL, optional = false, mappedBy = "user", fetch = FetchType.EAGER)
    private UserInfoEntity info;

    @ManyToMany(
            fetch = FetchType.EAGER,
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            }
    )
    @JoinTable(
            name = "oauth2_user_has_role",
            joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "role_name", referencedColumnName = "name")
    )
    private Set<UserRoleEntity> roles = new HashSet<>();
}
