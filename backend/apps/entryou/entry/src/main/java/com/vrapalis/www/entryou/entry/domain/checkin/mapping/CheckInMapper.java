package com.vrapalis.www.entryou.entry.domain.checkin.mapping;

import com.vrapalis.www.entryou.entry.domain.checkin.dto.CheckinDtoModel;
import com.vrapalis.www.entryou.entry.domain.checkin.entities.CheckInEntity;
import com.vrapalis.www.entryou.entry.domain.entry.EntryEntity;
import com.vrapalis.www.entryou.entry.domain.guest.GuestEntity;
import org.mapstruct.*;

import java.util.Date;

@Mapper(componentModel = "spring", injectionStrategy = InjectionStrategy.CONSTRUCTOR)
public interface CheckInMapper {

    @Mappings({
            @Mapping(source = "entryId", target = "id.entryId"),
            @Mapping(source = "guestId", target = "id.guestId"),
    })
    CheckInEntity mapToEntity(CheckinDtoModel dto);

    default CheckInEntity mapAndCheck(CheckinDtoModel dto) {
        assertThatIdsNotTheSame(dto);
        final var checkInEntity = this.mapToEntity(dto);
        checkInEntity.getId().setArriveOn(new Date());
        checkInEntity.setEntry(EntryEntity.builder().id(dto.getEntryId()).build());
        checkInEntity.setGuest(GuestEntity.builder().id(dto.getGuestId()).build());
        return checkInEntity;
    }

    default void assertThatIdsNotTheSame(CheckinDtoModel dto) {
        if (dto.getEntryId() == dto.getGuestId()) {
            throw new RuntimeException();
        }
    }
}
