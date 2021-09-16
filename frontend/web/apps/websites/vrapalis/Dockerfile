# Build stage
FROM node:14-alpine as builder
ARG profile=production
ARG version=0.0.1
ARG description="Vitali Rapalis Website"
LABEL description=$description version=$version author="vrapalis"
COPY package*.json ./
RUN npm set progress=false && npm config set depth 0 && npm cache clean --force
RUN npm i && mkdir /app && cp -R ./node_modules ./app
WORKDIR /app
COPY . .
RUN nx build --configuration=$profile && nx run websites-vrapalis:server

# Run stage
FROM node:14-alpine
LABEL maintainer="vitali.rapalis@gmail.com" project="Vitali Rapalis Website"
WORKDIR /app
COPY --from=builder /app/dist ./dist
CMD ["node", "./dist/websites-vrapalis/server/main.js"]
