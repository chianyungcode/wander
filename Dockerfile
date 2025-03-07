FROM --platform=amd64 oven/bun:latest

# Change architecture to base image oven/bun if you want to push to docker hub
# --platform=amd64

WORKDIR /usr/src/app

ENV DATABASE_URL=URL
ENV APP_PORT=3000

COPY . .

RUN bun install

EXPOSE ${APP_PORT}

CMD ["bun", "run", "start"]