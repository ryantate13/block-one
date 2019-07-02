FROM alpine:3.10 as build

RUN apk add --no-cache --update nodejs npm tini \
    && npm i -g yarn \
    && mkdir /app

COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
COPY src /app/src
COPY public /app/public

WORKDIR /app
RUN yarn && yarn build

FROM alpine:3.10
ARG WHOAMI
ARG ID=1000

RUN apk add --update --no-cache git shadow openssh \
    && mkdir -p /home/${WHOAMI} \
    && groupadd -g ${ID} ${WHOAMI} \
    && useradd -u ${ID} -g ${ID} -d /home/${WHOAMI} ${WHOAMI}

COPY --from=build /app/build /app
RUN chown -R ${WHOAMI}:${WHOAMI} /app
USER ${WHOAMI}
WORKDIR /app

CMD git init \
    && git remote add origin ${REPO} \
    && git add -A \
    && git commit -m "github pages build" \
    && git push -f origin master:gh-pages
