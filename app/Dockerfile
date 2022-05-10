
FROM node:16.15-alpine

ENV HTTP_PORT=80

EXPOSE 80

WORKDIR /app

COPY . .

USER node

CMD npx nodemon .
