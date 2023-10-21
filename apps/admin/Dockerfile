FROM node:18-alpine as development

WORKDIR /app

COPY apps/admin* nx.json .e* jest* ./

CMD ["npm", "run", "admin:serve:consumer:dev"]


FROM node:18-alpine as production

ENV NODE_ENV=production
USER node

WORKDIR /app

COPY --from=development /app .

CMD ["npm", "run", "admin:serve:consumer:prod"]
