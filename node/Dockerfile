FROM node:16.17

WORKDIR /usr/src/app

COPY index.js .
COPY package.json .
COPY db.js .

EXPOSE 3000

RUN npm install

CMD [ "node", "index.js" ]