FROM alpine:3.10

RUN apk add --no-cache --update nodejs npm tini \
    && npm i -g yarn \
    && mkdir /app

COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
COPY src /app/src

WORKDIR /app
RUN yarn

ENV CI=true
ENTRYPOINT ["tini", "--"]
CMD ["yarn", "test", "--coverage", "--verbose"]
