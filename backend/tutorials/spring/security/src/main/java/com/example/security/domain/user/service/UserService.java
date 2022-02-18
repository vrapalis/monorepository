package com.example.security.domain.user.service;

import com.example.security.domain.user.entity.UserEntity;
import com.example.security.domain.user.repository.UserRepository;
import lombok.AllArgsConstructor;
import lombok.extern.java.Log;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Log
@Service
@Transactional
@AllArgsConstructor
public class UserService {
    private UserRepository userRepository;

    public ResponseEntity<UserEntity> save(UserEntity user) {
        try {
            final var persistedUser = userRepository.saveAndFlush(user);
            return ResponseEntity.ok(persistedUser);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(user);
        }
    }

    public ResponseEntity<List<UserEntity>> getUsers(Optional<Integer> searchId) {
        return searchId.map(id -> userRepository.findById(id).map(userEntity -> ResponseEntity.ok(Arrays.asList(userEntity)))
                .orElseGet(() -> ResponseEntity.ok(Arrays.asList()))).orElseGet(() -> ResponseEntity.ok(userRepository.findAll()));
    }
}
