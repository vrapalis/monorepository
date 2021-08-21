package de.delloit.www.backend.libs.shared.dto.domain.server;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

// TODO FIX JSON CREATION OF ABSTRACT CLASS
@Getter
@AllArgsConstructor
//@JsonSubTypes({ @JsonSubTypes.Type(value = SuccessServerResponseDto.class, name = "SuccessServerResponseDto"),
//        @JsonSubTypes.Type(value = ErrorServerResponseDto.class, name = "ErrorServerResponseDto") })
//@JsonTypeInfo(use = JsonTypeInfo.Id.NAME,
//        include = JsonTypeInfo.As.WRAPPER_OBJECT,
//        property = "type")
public abstract class AbstractServerResponseDto {
    private final String msg;
    private final String detailedMsg;
}
