FROM node:18-alpine as base-files

WORKDIR /app
COPY package.json .


FROM node:18-alpine as development

WORKDIR /app
COPY --from=base-files /app ./
RUN npm install -f


FROM node:18-alpine as production

WORKDIR /app
COPY --from=base-files /app ./
RUN npm install --only=production -f
