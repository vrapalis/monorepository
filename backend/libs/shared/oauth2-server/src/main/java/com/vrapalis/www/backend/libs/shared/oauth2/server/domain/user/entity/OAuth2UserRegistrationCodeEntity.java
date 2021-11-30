package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.entity;

import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.common.entity.OAuth2CommonEntity;
import lombok.*;
import lombok.experimental.SuperBuilder;

import javax.persistence.*;
import java.util.UUID;

@Data
@Entity
@SuperBuilder
@Table(name = "oauth2_user_registration_code")
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = false)
public class OAuth2UserRegistrationCodeEntity extends OAuth2CommonEntity {

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
}
