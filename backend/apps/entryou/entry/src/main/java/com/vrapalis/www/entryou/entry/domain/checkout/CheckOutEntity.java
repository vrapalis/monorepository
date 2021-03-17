package com.vrapalis.www.entryou.entry.domain.checkout;

import com.vrapalis.www.entryou.entry.domain.checkin.entities.CheckInEntity;
import com.vrapalis.www.entryou.entry.domain.checkin.entities.CheckInIdEntity;
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
    @EmbeddedId
    private CheckInIdEntity id;

    @Temporal(TemporalType.TIMESTAMP)
    private Date leaveOn;

    @MapsId
    @OneToOne
    private CheckInEntity checkIn;
}
