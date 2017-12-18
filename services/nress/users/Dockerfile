FROM node:8.9.1
EXPOSE 3333
RUN npm install -g nodemon
RUN npm install rxjs
COPY ./ .
CMD ["nodemon", "-w", "./users.js", "./users.js"]
