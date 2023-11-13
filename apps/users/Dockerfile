FROM node:18-alpine as base-files

WORKDIR /app
COPY . ./


FROM node:18-alpine as development

WORKDIR /app
COPY --from=base-files /app .
CMD npm run users:serve:dev


FROM node:18-alpine as builder

WORKDIR /app
COPY --from=base-files /app .
RUN npm install -f
RUN npm run users:build:prod


FROM node:18-alpine as production

WORKDIR /app
COPY --from=builder /app .
CMD npm run users:serve:prod
