FROM node:15-alpine


RUN mkdir -p /usr/src/app

WORKDIR '/usr/src/app'

RUN npm install -g @angular/cli

COPY . . 

RUN npm install
# RUN ng serve

# EXPOSE 4200
# CMD ["ng", "serve"]
# CMD ["/sbin/tini", "--", "node", "./bin/www"]