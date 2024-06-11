import { Hono } from "hono";
import destinations from "./routes/destinations";
import locations from "./routes/location";

const app = new Hono().basePath("/api");

app.route("/destinations", destinations);
app.route("/locations", locations);

export default app;
