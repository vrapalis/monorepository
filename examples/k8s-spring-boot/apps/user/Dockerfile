FROM openjdk:16-alpine
WORKDIR app
LABEL maintainer=vrapalis project=authorization
RUN addgroup -S spring && adduser -S spring -G spring
RUN apk update && apk upgrade && apk --no-cache add curl
COPY build/libs/user.jar user.jar
EXPOSE 8080
USER spring:spring
ENTRYPOINT ["java"]
CMD ["-jar", "user.jar"]
