FROM node:alpine

WORKDIR /app
COPY /lib .

RUN apk add ffmpeg

ENTRYPOINT node /app/compress.js