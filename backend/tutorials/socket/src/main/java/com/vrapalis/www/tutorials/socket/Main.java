package com.vrapalis.www.tutorials.socket;

import com.vrapalis.www.tutorials.socket.server.EchoMultiServer;

public class Main {
    public static void main(String[] args) {
        EchoMultiServer server = new EchoMultiServer();
        server.start(8080);
    }
}
