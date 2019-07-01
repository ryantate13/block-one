FROM alpine:3.10

RUN apk add --no-cache --update nodejs npm tini \
    && npm i -g yarn majestic \
    && mkdir /app

COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
COPY src /app/src

WORKDIR /app
RUN yarn

ENTRYPOINT ["tini", "--"]
CMD ["majestic", "--port", "3000", "--noOpen"]