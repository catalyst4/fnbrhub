FROM node:12

RUN mkdir -p /home/jayk/app/node_modules && chown -R jayk:jayk /home/jayk/app

WORKDIR /home/jayk/app

COPY package*.json ./

USER jayk

RUN npm install

COPY --chown=jayk:jayk . .

EXPOSE 8080

CMD [ "node", "app.js" ]