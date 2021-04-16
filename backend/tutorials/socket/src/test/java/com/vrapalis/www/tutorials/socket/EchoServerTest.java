package com.vrapalis.www.tutorials.socket;

import com.vrapalis.www.tutorials.socket.client.EchoClient;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

@Disabled
public class EchoServerTest {
    EchoClient echoClient;

    @BeforeEach
    void setUp() {
        echoClient = new EchoClient();
        echoClient.startConnection("127.0.0.1", 8080);
    }

    @Test
    void name() {
        String resp1 = echoClient.sendMessage("hello");
        String resp2 = echoClient.sendMessage("world");
        String resp3 = echoClient.sendMessage("!");
        String resp4 = echoClient.sendMessage(".");

        assertEquals("hello", resp1);
        assertEquals("world", resp2);
        assertEquals("!", resp3);
        assertEquals("good bye", resp4);
    }

    @AfterEach
    void tearDown() {
        echoClient.stopConnection();
    }
}
