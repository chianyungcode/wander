import { Hono } from "hono";
import { logger } from "hono/logger";

import destinations from "./routes/destinations";
import locations from "./routes/location";
import owners from "./routes/owner";

const app = new Hono();
app.use(logger());

app.get("/", (c) => {
  return c.json({
    message: "Hello from root",
  });
});
app.route("api/destinations", destinations);
app.route("api/locations", locations);
app.route("api/owners", owners);

export default {
  port: process.env.APP_PORT,
  fetch: app.fetch,
};
