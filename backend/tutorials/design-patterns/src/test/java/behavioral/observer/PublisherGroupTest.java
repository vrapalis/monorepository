package behavioral.observer;

import com.vrapalis.www.backend.tutorials.designpatterns.behavioral.observer.PushPublisher;
import com.vrapalis.www.backend.tutorials.designpatterns.behavioral.observer.PushSubscriber;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

@DisplayName("Publisher group test")
public class PublisherGroupTest {

    @Test
    void name() {
        PushPublisher<String> pushPublisher = new PushPublisher<>();
        PushSubscriber<String> subscriber1 = new PushSubscriber<>("Subscriber 1");
        PushSubscriber<String> subscriber2 = new PushSubscriber<>("Subscriber 2");
        PushSubscriber<String> subscriber3 = new PushSubscriber<>("Subscriber 3");
        pushPublisher.subscribes(subscriber1, subscriber2, subscriber3);
        pushPublisher.setData("Hello World");
        pushPublisher.setData("Greeting!!!");
    }
}
