package de.delloit.www.backend.apps.estatemanagement.push.domain.sms;

public class SendSmsError extends Exception {
    public SendSmsError() {
        super("Sms send failed.");
    }
}
