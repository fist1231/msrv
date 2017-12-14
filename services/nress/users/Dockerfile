FROM node:8.9.1
EXPOSE 3333
RUN sudo npm install -g nodemon
COPY ./ .
CMD ["nodemon", "-w", "./users.js", "./users.js"]
