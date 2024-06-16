FROM oven/bun:latest
# --platform=amd64 

WORKDIR /usr/app

ENV DATABASE_URL=URL
ENV DIRECT_URL=URL
ENV APP_PORT=10000

COPY . .

RUN bun install

EXPOSE ${APP_PORT}