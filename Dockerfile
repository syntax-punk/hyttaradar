FROM node:14-alpine3.12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 7676

CMD ["npm", "run", "server2"]