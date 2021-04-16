FROM openjdk:14-alpine
WORKDIR app
LABEL maintainer=vrapalis project=entry
RUN addgroup -S spring && adduser -S spring -G spring
RUN apk update && apk upgrade
COPY build/libs/entryou-entry-0.0.1-snapshot.jar entryou-entry-0.0.1-snapshot.jar
EXPOSE 8080
USER spring:spring
ENTRYPOINT ["java"]
CMD ["-jar", "entryou-entry-0.0.1-snapshot.jar"]
