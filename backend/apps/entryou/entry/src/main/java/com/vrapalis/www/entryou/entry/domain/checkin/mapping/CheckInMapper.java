package com.vrapalis.www.entryou.entry.domain.checkin.mapping;

import com.vrapalis.www.entryou.entry.domain.checkin.dto.CheckinDto;
import com.vrapalis.www.entryou.entry.domain.checkin.entities.CheckInEntity;
import org.mapstruct.*;

@Mapper(componentModel = "spring", injectionStrategy = InjectionStrategy.CONSTRUCTOR)
public interface CheckInMapper {

    @Mappings({
            @Mapping(source = "entryId", target = "id.entry.id"),
            @Mapping(source = "guestId", target = "id.guest.id"),
            @Mapping(source = "arriveOn", target = "id.arriveOn")
    })
    CheckInEntity mapToEntity(CheckinDto dto);

    @InheritInverseConfiguration
    CheckinDto toDto(CheckInEntity entity);

    default CheckInEntity mapAndCheckIn(CheckinDto dto) {
        assertThatIdsNotTheSame(dto);
        final var checkInEntity = this.mapToEntity(dto);
        return checkInEntity;
    }

    default void assertThatIdsNotTheSame(CheckinDto dto) {
        if (dto.getEntryId() == dto.getGuestId()) {
            throw new RuntimeException();
        }
    }
}
