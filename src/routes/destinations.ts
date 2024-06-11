import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => c.json("list authors"));
app.notFound((c) => {
  return c.text("Custom 404 Message", 404);
});

export default app;
