FROM node:14-alpine

ENV NG_CLI_ANALYTICS=ci

RUN npm install -g @angular/cli

VOLUME ["/var/www/"]

WORKDIR /var/www/

EXPOSE 4200

CMD ng serve --host 0.0.0.0

