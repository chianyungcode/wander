import { Hono } from "hono";
import { logger } from "hono/logger";
import { decode, sign, verify } from "hono/jwt";

import destinations from "./routes/destination";
import locations from "./routes/location";
import owners from "./routes/owner";
import categories from "./routes/category";

const app = new Hono();
app.use(logger());

app.get("/", async (c) => {
  const payload = {
    sub: "user123",
    role: "admin",
    exp: Math.floor(Date.now() / 1000) + 60 * 5, // Token expires in 5 minutes
  };

  const jwtSecret = process.env.JWT_SECRET;

  if (!jwtSecret) throw new Error("JWT_SECRET is not defined");

  const token = await sign(payload, jwtSecret);

  return c.json({
    message: `Hello from ${process.env.SUPABASE_API_KEY}!`,
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
