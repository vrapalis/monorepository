package com.vrapalis.www.entryou.entry.domain.checkin.entities;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Embeddable
public class CheckInIdEntity implements Serializable {
    @Temporal(TemporalType.TIMESTAMP)
    private Date arriveOn;

    private Integer entryId;

    private Integer guestId;

}
