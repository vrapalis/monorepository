package com.vrapalis.www.entryou.entry.domain.checkin.entities;

import com.vrapalis.www.entryou.entry.domain.checkout.CheckOutEntity;
import com.vrapalis.www.entryou.entry.domain.entry.EntryEntity;
import com.vrapalis.www.entryou.entry.domain.guest.GuestEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "check_in")
public class CheckInEntity implements Serializable {
    @EmbeddedId
    private CheckInIdEntity id;

    @OneToOne(mappedBy = "checkIn")
    private CheckOutEntity checkOut;
}
