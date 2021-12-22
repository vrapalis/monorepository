package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.common.entity.OAuth2CommonEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.persistence.*;
import java.util.Objects;
import java.util.UUID;

@Data
@Entity
@SuperBuilder
@Table(name = "oauth2_user_password_code")
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = false)
@JsonIgnoreProperties("user")
public class OAuth2UserPasswordCodeEntity extends OAuth2CommonEntity {

    @Id
    @Column(nullable = false)
    private UUID userId;

    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private UUID code;

    @MapsId
    @JoinColumn(name = "user_id")
    @OneToOne(fetch = FetchType.LAZY)
    private OAuth2UserEntity user;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof OAuth2UserPasswordCodeEntity)) return false;
        if (!super.equals(o)) return false;
        OAuth2UserPasswordCodeEntity that = (OAuth2UserPasswordCodeEntity) o;
        return getUserId().equals(that.getUserId()) && getCode().equals(that.getCode());
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), getUserId(), getCode());
    }
}
