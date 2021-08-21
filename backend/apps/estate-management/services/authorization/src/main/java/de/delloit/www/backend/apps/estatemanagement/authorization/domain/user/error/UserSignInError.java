package de.delloit.www.backend.apps.estatemanagement.authorization.domain.user.error;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class UserSignInError extends RuntimeException {
    public UserSignInError(String msg) {
        super(msg);
    }
}
