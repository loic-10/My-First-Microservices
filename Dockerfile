FROM node:18-alpine as development

WORKDIR /app

COPY package.json .

RUN npm install -f

FROM node:18-alpine as production

WORKDIR /app

COPY package.json .

RUN npm install --production -f
