# Build stage
FROM node:14-alpine as builder
COPY package*.json ./
RUN npm set progress=false && npm config set depth 0 && npm cache clean --force
RUN npm i && mkdir /app && cp -R ./node_modules ./app
WORKDIR /app
COPY . .
RUN npm run build:ssr

# Run stage
FROM node:14-alpine
LABEL maintainer="vitali.rapalis@gmail.com" project="Vitali Rapalis Website"
WORKDIR /app
COPY --from=builder /app/dist ./dist
CMD ["node", "./dist/websites-vrapalis/server/main.js"]
