LABEL authors="Andrerv"
FROM node:alpine AS build
WORKDIR /src
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 80

ENTRYPOINT ["top", "-b"]