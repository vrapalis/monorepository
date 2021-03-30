package com.vrapalis.www.entryou.entry.domain.checkin.mapping;

import com.vrapalis.www.entryou.entry.domain.checkin.dto.CheckinDtoModel;
import com.vrapalis.www.entryou.entry.domain.checkin.entities.CheckInEntity;
import com.vrapalis.www.entryou.entry.domain.entry.EntryEntity;
import com.vrapalis.www.entryou.entry.domain.guest.GuestEntity;
import org.mapstruct.*;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZoneOffset;
import java.util.Date;

@Mapper(componentModel = "spring", injectionStrategy = InjectionStrategy.CONSTRUCTOR)
public interface CheckInMapper {

    @Mappings({
            @Mapping(source = "entryId", target = "id.entry.id"),
            @Mapping(source = "guestId", target = "id.guest.id"),
            @Mapping(source = "arriveOn", target = "id.arriveOn")
    })
    CheckInEntity mapToEntity(CheckinDtoModel dto);

    @InheritInverseConfiguration
    CheckinDtoModel toDto(CheckInEntity entity);

    default CheckInEntity mapAndCheckIn(CheckinDtoModel dto) {
        assertThatIdsNotTheSame(dto);
        final var checkInEntity = this.mapToEntity(dto);
        return checkInEntity;
    }

    default void assertThatIdsNotTheSame(CheckinDtoModel dto) {
        if (dto.getEntryId() == dto.getGuestId()) {
            throw new RuntimeException();
        }
    }
}
