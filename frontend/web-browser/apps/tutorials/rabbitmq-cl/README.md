# ANGULAR RABBITMQ INTEGRATION

## HOW TO BUILD DOCKER RABBITMQ IMAGE

- Build docker image, go to the path tutorials/message-broker/rabbit-mq, there should be a Dockerfile
  run command ``docker build --tag dev-rabbitmq .`` docker image of rabbitmq will be build
  <br/><br/>
- Run docker image, ``docker run --rm  --name dev-rabbit -p 5672:5672 -p 8080:15672 -p 15674:15674 -p 15672:15672 dev-rabbitmq``
  <br/><br/>
  
- Install this libraries in you Angular Project ``https://stomp-js.github.io/guide/ng2-stompjs/ng2-stomp-with-angular7.html and https://github.com/stomp-js/stompjs``,
see on the site how to configure ng2-stompjs module
  

