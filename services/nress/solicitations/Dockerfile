FROM node:8.9.1
EXPOSE 3334
# RUN echo installing nodemon
# RUN npm install -g nodemon
RUN echo installing pm2
RUN npm install pm2 -g
#RUN echo installing rxjs
#RUN echo installing cors
#RUN npm install cors
#RUN echo installing express
#RUN npm install express
#RUN echo installing mongoose
#RUN npm install mongoose
COPY ./ .
# CMD ["nodemon", "-w", "./users.js", "./users.js"]
# CMD ["pm2", "start", "./users.js"]
# CMD ["pm2-docker", "app.js"]
#CMD ["pm2-docker", "--json", "process.yml"]
#CMD ["pm2-runtime", "--json", "process.yml"]
CMD ["node", "./build/index.js"]
