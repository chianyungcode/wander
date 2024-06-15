import { Hono } from "hono";
import { logger } from "hono/logger";

import destinations from "./routes/destinations";
import locations from "./routes/location";
import owners from "./routes/owner";

const app = new Hono().basePath("/api");
app.use(logger());

app.route("/destinations", destinations);
app.route("/locations", locations);
app.route("/owners", owners);

export default {
  port: process.env.APP_PORT,
  fetch: app.fetch,
};
