FROM apine:3.10

RUN apk add --no-cache --update nodejs npm tini \
    && npm i -g yarn majestic \
    && mkdir /app

COPY package.json /app/package.json
COPY src /app/src

RUN yarn

WORKDIR /app
ENTRYPOINT ["tini", "--"]
CMD ["majestic"]
