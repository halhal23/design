FROM node:14-alpine
COPY ./front /front
WORKDIR /front
RUN yarn install
EXPOSE 3000
CMD yarn start
