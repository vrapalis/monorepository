package de.delloit.www.backend.apps.estatemanagement.authorization.domain.user.error;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class UserSignUpError extends RuntimeException {
    public UserSignUpError(String msg) {
        super(msg);
    }
}
