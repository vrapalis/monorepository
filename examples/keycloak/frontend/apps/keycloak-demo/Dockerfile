FROM node:14-alpine AS build-stage
ARG profile=production
ARG version=0.0.1
ARG description="Keyclock Example"
LABEL description=$description version=$version author="vrapalis"
WORKDIR /app
COPY package.json ./
RUN apk update && npm i && npm install -g nx
COPY . .
RUN nx build --configuration=$profile

FROM nginx:alpine AS prod-stage
COPY --from=build-stage ./app/dist/apps/keycloak-demo /usr/share/nginx/html
EXPOSE 80 443
CMD ["/bin/sh",  "-c",  "exec nginx -g 'daemon off;'"]
