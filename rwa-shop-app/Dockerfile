FROM node:12.20 as build
WORKDIR /app
COPY src/ /app/src/
COPY package*.json /app/
COPY tsconfig*.json /app/
COPY angular.json /app/
COPY karma.conf.js /app/
WORKDIR /app/src
RUN npm install -g npm
RUN npm install -g @angular/cli
RUN npm install -g @microsoft/signalr
# RUN npm install @angular-devkit/build-angular
RUN npm update --force
RUN npm run ng build --prod
FROM nginx
WORKDIR /usr/share/nginx/html/RWA-SHOP-APP
COPY --from=build app/src/dist/RWA-SHOP-APP/ .
EXPOSE 80