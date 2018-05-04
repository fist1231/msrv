FROM node:8.9.1
EXPOSE 3335
RUN echo installing pm2
RUN npm install pm2 -g
COPY ./ .
CMD ["node", "./build/index.js"]
