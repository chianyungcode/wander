FROM oven/bun:latest

# Change architecture to base image oven/bun if you want to push to docker hub
# --platform=amd64

WORKDIR /usr/src/app

ENV DATABASE_URL=URL
ENV APP_PORT=3000

# If you are using supabase, you need to set the direct url
# ENV DIRECT_URL=URL

COPY . .

RUN bun install

EXPOSE ${APP_PORT}

CMD ["bun", "run", "prod"]