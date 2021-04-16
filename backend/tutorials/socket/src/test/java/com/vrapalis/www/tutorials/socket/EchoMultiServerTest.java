package com.vrapalis.www.tutorials.socket;

import com.vrapalis.www.tutorials.socket.client.EchoClient;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class EchoMultiServerTest {
    @Test
    public void givenClient1_whenServerResponds_thenCorrect() {
        EchoClient client1 = new EchoClient();
        client1.startConnection("127.0.0.1", 8080);
        String msg1 = client1.sendMessage("hello");
        String msg2 = client1.sendMessage("world");
        String terminate = client1.sendMessage(".");

        assertEquals(msg1, "hello");
        assertEquals(msg2, "world");
        assertEquals(terminate, "bye");
    }

    @Test
    public void givenClient2_whenServerResponds_thenCorrect() {
        EchoClient client2 = new EchoClient();
        client2.startConnection("127.0.0.1", 8080);
        String msg1 = client2.sendMessage("hello");
        String msg2 = client2.sendMessage("world");
        String terminate = client2.sendMessage(".");

        assertEquals(msg1, "hello");
        assertEquals(msg2, "world");
        assertEquals(terminate, "bye");
    }
}
