import { Hono } from "hono";
import destinations from "./routes/destinations";
import locations from "./routes/location";
import owners from "./routes/owner";
import { logger } from "hono/logger";

const app = new Hono().basePath("/api");
app.use(logger());

app.route("/destinations", destinations);
app.route("/locations", locations);
app.route("/owners", owners);

export default app;
