FROM alpine:3.12@sha256:a15790640a6690aa1730c38cf0a440e2aa44aaca9b0e8931a9f2b0d7cc90fd65

LABEL description="Docker container for building static sites with the Hugo static site generator."

# config
ENV HUGO_VERSION=0.71.0
#ENV HUGO_TYPE=
ENV HUGO_TYPE=_extended

ENV HUGO_ID=hugo${HUGO_TYPE}_${HUGO_VERSION}
RUN wget -O - https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/${HUGO_ID}_Linux-64bit.tar.gz | tar -xz -C /tmp \
    && mkdir -p /usr/local/sbin \
    && mv /tmp/hugo /usr/local/sbin/hugo \
    && rm -rf /tmp/${HUGO_ID}_linux_amd64 \
    && rm -rf /tmp/LICENSE.md \
    && rm -rf /tmp/README.md

RUN apk add --update git asciidoctor libc6-compat libstdc++ nodejs npm \
    && apk upgrade \
    && apk add --no-cache ca-certificates 

VOLUME /src
VOLUME /output

WORKDIR /src 
COPY ./package.json /src/package.json
RUN npm install

COPY ./run.sh /run.sh
RUN chmod 0777 /run.sh
CMD ["/run.sh"]

EXPOSE 1313
