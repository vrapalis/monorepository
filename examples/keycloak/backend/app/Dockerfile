FROM openjdk:16-alpine
WORKDIR app
LABEL maintainer=vrapalis project=uaa
RUN addgroup -S spring && adduser -S spring -G spring
RUN apk update && apk upgrade
COPY build/libs/app-0.0.1-SNAPSHOT.jar app-0.0.1-SNAPSHOT.jar
EXPOSE 8081
USER spring:spring
ENTRYPOINT ["java"]
CMD ["-jar", "app-0.0.1-SNAPSHOT.jar"]