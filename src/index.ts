import { Hono } from "hono";
import { logger } from "hono/logger";

import destinations from "./routes/destination";
import locations from "./routes/location";
import owners from "./routes/owner";
import categories from "./routes/category";

const app = new Hono();
app.use(logger());

app.get("/", (c) => {
  return c.json({
    message: `Hello from Wander!`,
  });
});

app.route("api/destinations", destinations);
app.route("api/locations", locations);
app.route("api/owners", owners);
app.route("api/categories", categories);

export default {
  port: process.env.APP_PORT,
  fetch: app.fetch,
};
