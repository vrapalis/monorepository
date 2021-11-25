package com.vrapalis.www.backend.libs.shared.oauth2.server.domain.user.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.UUID;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "oauth2_user_info")
public class OAuth2UserInfoEntity implements Serializable {

    @Id
    @Column(nullable = false)
    private UUID userId;

    @Column(length = 16, nullable = true)
    private String firstName;

    @Column(length = 16, nullable = true)
    private String lastName;

    @MapsId
    @JoinColumn(name = "user_id")
    @OneToOne(fetch = FetchType.LAZY)
    private OAuth2UserEntity user;

}
