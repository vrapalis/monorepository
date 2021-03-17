package com.vrapalis.www.entryou.entry.domain.guest;

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
    @SequenceGenerator(name = "guest_id_seq", sequenceName = "guest_id_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "guest_id_seq")
    private Integer id;
}
