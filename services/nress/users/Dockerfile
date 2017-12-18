FROM node:8.9.1
EXPOSE 3333
RUN echo installing nodemon
RUN npm install -g nodemon
RUN echo installing rxjs
RUN npm install rxjs
RUN echo installing cors
RUN npm install cors
RUN echo installing express
RUN npm install express
RUN echo installing mongoose
RUN npm install mongoose
COPY ./ .
CMD ["nodemon", "-w", "./users.js", "./users.js"]
