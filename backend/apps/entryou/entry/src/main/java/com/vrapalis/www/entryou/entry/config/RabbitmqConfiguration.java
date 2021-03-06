package com.vrapalis.www.entryou.entry.config;

import org.springframework.amqp.core.*;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.amqp.support.converter.MessageConverter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

@Configuration
@Profile("!dev-local-no-dep")
public class RabbitmqConfiguration {
    public static final String directExchangeName = "check-in-exchange";

    //    @Bean
    //    Queue queue() {
    //        return new Queue(queueName, true);
    //    }

    @Bean
    DirectExchange exchange() {
        return ExchangeBuilder.directExchange(directExchangeName).durable(true).build();
    }

//    @Bean
//    Binding binding(Queue queue, Exchange exchange) {
//        return BindingBuilder.bind(queue).to(exchange).with("1").noargs();
//    }

    @Bean
    public MessageConverter messageConverter() {
        return new Jackson2JsonMessageConverter();
    }

    @Bean
    public AmqpTemplate amqpTemplate(ConnectionFactory connectionFactory) {
        RabbitTemplate template = new RabbitTemplate(connectionFactory);
        template.setMessageConverter(messageConverter());
        return template;
    }
}
