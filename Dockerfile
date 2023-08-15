FROM node:18-alpine

WORKDIR /app

RUN chown node:node /app

COPY --chown=node:node package*.json ./

USER node

RUN yarn

COPY --chown=node:node . .

EXPOSE 8081

CMD ["yarn", "prod"]