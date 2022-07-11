FROM node:14-alpine

VOLUME ["/var/www/"]

WORKDIR /var/www/
RUN npm install -g json-server

EXPOSE 3000

CMD npm i && json-server --watch db.json --host 0.0.0.0 --port 3000
