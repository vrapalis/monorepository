package com.example.app.domain.car;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@Table(value = "cars")
public record CarEntity(@Id Integer id, String name) {
}
