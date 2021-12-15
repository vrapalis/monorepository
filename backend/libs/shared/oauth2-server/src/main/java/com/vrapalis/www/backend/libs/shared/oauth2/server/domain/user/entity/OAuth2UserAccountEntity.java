package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.entity;

import com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.model.EOAuth2Provider;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.UUID;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "oauth2_user_account")
@ToString(onlyExplicitlyIncluded = true)
public class OAuth2UserAccountEntity implements Serializable {

    @Id
    @ToString.Include
    @Column(nullable = false)
    private UUID userId;

    @Column(length = 10)
    private String password;

    @ToString.Include
    @Column(nullable = false)
    private Boolean accountNonExpired;

    @ToString.Include
    @Column(nullable = false)
    private Boolean accountNonLocked;

    @ToString.Include
    @Column(nullable = false)
    private Boolean credentialsNonExpired;

    @ToString.Include
    @Column(nullable = false)
    private Boolean isEnabled;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 12)
    private EOAuth2Provider provider;

    @MapsId
    @JoinColumn(name = "user_id")
    @OneToOne(fetch = FetchType.LAZY)
    private OAuth2UserEntity user;
}

