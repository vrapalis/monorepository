package com.vrapalis.www.entryou.entry.domain.checkout;

import com.vrapalis.www.entryou.entry.domain.checkin.entities.CheckInEntity;
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
@Table(name = "check_out")
public class CheckOutEntity implements Serializable {

    @Id
    @SequenceGenerator(name = "check_out_id_seq", sequenceName = "check_out_id_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "check_out_id_seq")
    private Integer id;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(nullable = false)
    private Date leaveOn;

    @OneToOne
    private CheckInEntity checkIn;
}
