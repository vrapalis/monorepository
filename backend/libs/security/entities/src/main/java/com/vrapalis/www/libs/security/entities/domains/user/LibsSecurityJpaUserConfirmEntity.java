package com.vrapalis.www.libs.security.entities.domains.user;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.UUID;

@Data
@Entity
@ToString
@NoArgsConstructor
@Table(name = "app_user_confirm")
public class LibsSecurityJpaUserConfirmEntity implements Serializable {
    @Id
    @Type(type = "pg-uuid")
    private UUID id;

    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date created;

    @ToString.Exclude
    @OneToOne(optional = false)
    @JoinColumn(name = "app_user_id")
    private LibsSecurityJpaUserEntity userEntity;

    public LibsSecurityJpaUserConfirmEntity(LibsSecurityJpaUserEntity userEntity) {
        this.id = UUID.randomUUID();
        this.created = new Date();
        this.userEntity = userEntity;
    }

}
