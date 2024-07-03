import { type UnkeyContext, unkey } from "@unkey/hono";
import { Hono } from "hono";
import { logger } from "hono/logger";

import { UnkeyApiIdExist } from "./lib/unkey";
import categories from "./routes/category";
import destinations from "./routes/destination";
import locations from "./routes/location";
import owners from "./routes/owner";

const app = new Hono<{ Variables: { unkey: UnkeyContext } }>();

app.use(logger());
app.use(
  "/api/*",
  unkey({
    apiId: UnkeyApiIdExist(),
    getKey: (c) => {
      const key = c.req.header("X-API-KEY");
      if (!key) {
        return c.text("Missing api key", 401);
      }
      return key;
    },
    onError: (c, err) => {
      return c.json({ errors: err });
    },
    handleInvalidKey: (c, result) => {
      return c.json(
        {
          error: "Unauthorized",
          reason: result?.code ?? "Unknown",
        },
        401,
      );
    },
  }),
);

app.get("/", async (c) => {
  return c.json({ message: "Hello from wander API" });
});

app.route("api/destinations", destinations);
app.route("api/locations", locations);
app.route("api/owners", owners);
app.route("api/categories", categories);

export default {
  port: process.env.APP_PORT || "3000",
  fetch: app.fetch,
};
