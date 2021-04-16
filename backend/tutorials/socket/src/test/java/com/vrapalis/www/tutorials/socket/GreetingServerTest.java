package com.vrapalis.www.tutorials.socket;

import com.vrapalis.www.tutorials.socket.client.GreetingClient;
import com.vrapalis.www.tutorials.socket.server.GreetServer;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

@Disabled
public class GreetingServerTest {
    GreetServer server;

    @Test
    void testClient() {
        GreetingClient client = new GreetingClient();
        client.startConnection("127.0.0.1", 8080);
        String response = client.sendMessage("hello server");
        assertEquals("hello client", response);
    }
}
