package com.vrapalis.www.entryou.entry.domain.checkin.entities;

import com.vrapalis.www.entryou.entry.domain.entry.EntryEntity;
import com.vrapalis.www.entryou.entry.domain.guest.GuestEntity;
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

    @OneToOne(cascade = {CascadeType.ALL})
    private EntryEntity entry;

    @OneToOne(cascade = {CascadeType.ALL})
    private GuestEntity guest;

}
