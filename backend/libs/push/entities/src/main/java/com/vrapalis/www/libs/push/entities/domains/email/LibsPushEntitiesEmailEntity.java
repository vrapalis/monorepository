package com.vrapalis.www.libs.push.entities.domains.email;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "email")
public class LibsPushEntitiesEmailEntity implements Serializable {
    @Id
    @Column(updatable = false)
    @SequenceGenerator(name = "email_id_seq", sequenceName = "email_id_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "email_id_seq")
    private Integer id;

    @Column(length = 80)
    private String subject;

    @Column(length = 800)
    private String text;

    @Column(updatable = false, nullable = false, length = 160)
    private String mailTo;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(updatable = false, nullable = false)
    private Date createdDate;

}
