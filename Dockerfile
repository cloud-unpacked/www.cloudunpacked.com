FROM nginx:alpine-slim

LABEL org.opencontainers.image.source https://github.com/cloud-unpacked/www.cloudunpacked.com

COPY src/public /usr/share/nginx/html
