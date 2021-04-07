package com.vrapalis.www.entryou.store;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.content.commons.annotations.ContentId;
import org.springframework.content.commons.annotations.ContentLength;
import org.springframework.content.commons.repository.ContentStore;
import org.springframework.content.jpa.config.EnableJpaStores;
import org.springframework.context.annotation.Bean;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.File;
import java.io.FileInputStream;
import java.util.Optional;

@EnableJpaStores
@SpringBootApplication
public class StoreApplication {

    public static void main(String[] args) {
        SpringApplication.run(StoreApplication.class, args);
    }

    @Bean
    public CommandLineRunner demo(UserRepository repository, ProfilePictureStore store) {
        return (args) -> {
            // create a new user
            AppUser jbauer = new AppUser();
            jbauer.setUsername("jbauer");

            final var absolutePath = new File("/home/vitali/Workspace/vrapalis/monorepository/backend/apps/entryou/store/tmp/avatar.svg").getAbsolutePath();
            // store profile picture
            store.setContent(jbauer, new FileInputStream(absolutePath));

            // save the user
            repository.save(jbauer);
        };
    }
}

@RestController
@RequestMapping
@AllArgsConstructor
class AppUserRestController {
    private UserRepository userRepository;
    private ProfilePictureStore profilePictureStore;

    @GetMapping
    public ResponseEntity<?> getResource() {
        final var jbauer = userRepository.findByUsername("jbauer").orElseThrow();
        InputStreamResource inputStreamResource = new InputStreamResource(profilePictureStore.getContent(jbauer));
        HttpHeaders headers = new HttpHeaders();
        headers.setContentLength(jbauer.getContentLength());
        headers.set("Content-Type", jbauer.getMimeType());
        return new ResponseEntity<Object>(inputStreamResource, headers, HttpStatus.OK);
    }
}

@Entity
@Data
class AppUser {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String username;

    @ContentId
    private String contentId;

    @ContentLength
    private Long contentLength;

    private String mimeType = "image/svg+xml";
}

@Repository
interface UserRepository extends JpaRepository<AppUser, Long> {
    Optional<AppUser> findByUsername(String name);
}

@Repository
interface ProfilePictureStore extends ContentStore<AppUser, String> {
}
