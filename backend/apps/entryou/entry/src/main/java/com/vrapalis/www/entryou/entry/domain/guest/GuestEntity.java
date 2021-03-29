package com.vrapalis.www.entryou.entry.domain.guest;

import com.vrapalis.www.entryou.entry.domain.checkin.entities.CheckInEntity;
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
@Table(name = "guest")
public class GuestEntity implements Serializable {
    @Id
    private Integer id;

    @Column(nullable = false, columnDefinition = "boolean default false")
    private boolean isCheckedIn;

    @OneToOne(optional = true)
    private CheckInEntity lastCheckIn;
}
