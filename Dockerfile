FROM node:18-alpine3.17 AS buildenv

WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM node:18-alpine3.17

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV
COPY package.json /usr/src/app/
COPY package-lock.json /usr/src/app/
RUN npm install && npm cache clean --force
COPY . /usr/src/app

COPY --from=buildenv /app/dist /usr/src/app/dist

EXPOSE 8080

CMD [ "npm", "run", "start" ]
