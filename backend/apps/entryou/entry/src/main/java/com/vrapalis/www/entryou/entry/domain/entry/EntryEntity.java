package com.vrapalis.www.entryou.entry.domain.entry;

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
@Table(name = "entry")
public class EntryEntity implements Serializable {
    @Id
    private Integer id;
}
