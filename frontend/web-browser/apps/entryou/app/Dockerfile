FROM node:14-alpine AS build-stage
ARG profile=production
ARG version=0.0.1
ARG description="Entryou frontend app"
LABEL description=$description version=$version author="vrapalis"
WORKDIR /app
COPY package.json package-lock.json ./
RUN apk update && npm i
COPY . .
RUN npm run build --configuration=$profile

FROM nginx:alpine AS prod-stage
COPY --from=build-stage ./app/dist/apps/entryou/app /usr/share/nginx/html
EXPOSE 80
CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/scripts/env.template.js > /usr/share/nginx/html/assets/scripts/env.js && exec nginx -g 'daemon off;'"]
