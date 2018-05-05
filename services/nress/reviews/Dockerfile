FROM node:9.3.0
EXPOSE 3335
#RUN echo installing pm2
#RUN npm install pm2 -g
RUN apt-get update && apt-get install libaio1
COPY ./ .
ENV LD_LIBRARY_PATH="./instantclient_11_2"
CMD ["node", "./build/index.js"]
