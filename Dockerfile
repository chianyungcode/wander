FROM oven/bun:latest
# --platform=amd64 

WORKDIR /usr/src/app

ENV DATABASE_URL=URL
ENV DIRECT_URL=URL
ENV APP_PORT=3000

COPY . .

RUN bun install

EXPOSE ${APP_PORT}

CMD ["bun", "run", "start"]