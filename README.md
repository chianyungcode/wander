# Wander

Wander API is a travel destination recommendation service. It provides a list of destinations in ASEAN to users.

## Tech Stack

- **Hono** : A framework for building REST APis
- **Bun** : A javascript runtime

## Entity Relationship Diagram

[ERD](https://drive.google.com/file/d/1U7KOjQf81nc29zMSKe7SrGkUBi1iQICY/view?usp=sharing)

## How to run Docker Container locally

Environment variables are defined in `.env` file.

| Variable Name     | Description            | Default Value | Required |
| ----------------- | ---------------------- | ------------- | -------- |
| APP_PORT          | Port to run the server | 3000          | No       |
| POSTGRES_USER     | Postgres user          | postgres      | No       |
| POSTGRES_PASSWORD | Postgres password      |               | Yes      |
| POSTGRES_DB       | Postgres database name | postgres      | No       |

### Build app image & run docker container

```bash
docker compose -f docker-compose.dev.yaml up --build
```

## How to run locally

```bash
bun install

bun run dev
```
