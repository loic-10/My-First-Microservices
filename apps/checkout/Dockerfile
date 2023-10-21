FROM node:18-alpine as development

WORKDIR /app

COPY apps/checkout* nx.json .e* jest* ./

CMD ["npm", "run", "checkout:serve:consumer:dev"]


FROM node:18-alpine as production

ENV NODE_ENV=production
USER node

WORKDIR /app

COPY --from=development /app .

CMD ["npm", "run", "checkout:serve:consumer:prod"]
