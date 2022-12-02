FROM node:16.18.1-alpine

WORKDIR /usr/src/socket-api


COPY package*.json ./

RUN npm install -g nodemon typescript ts-node

RUN npm ci

COPY . .

EXPOSE 5000

CMD ["npm", "run", "start:dev"]