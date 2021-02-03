package com.vrapalis.www.libs.security.entities.domains.user;

import com.vrapalis.www.libs.security.entities.domains.common.LibsSecurityJpaAbstractEntity;
import lombok.*;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.UUID;

@Data
@ToString
@NoArgsConstructor
@Entity
@Table(name = "app_user_confirm")
public class LibsSecurityJpaUserConfirmEntity extends LibsSecurityJpaAbstractEntity {
    @Id
    @Type(type = "pg-uuid")
    private UUID id;

    @ToString.Exclude
    @OneToOne(optional = false)
    @JoinColumn(name = "app_user_id")
    private LibsSecurityJpaUserEntity userEntity;

    public LibsSecurityJpaUserConfirmEntity(LibsSecurityJpaUserEntity userEntity) {
        this.id = UUID.randomUUID();
        this.userEntity = userEntity;
    }
}

