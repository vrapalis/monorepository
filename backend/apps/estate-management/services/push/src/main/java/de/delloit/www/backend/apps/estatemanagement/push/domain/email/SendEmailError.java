package de.delloit.www.backend.apps.estatemanagement.push.domain.email;

public class SendEmailError extends Exception {

    public SendEmailError(String msg) {
        super(msg);
    }
}
