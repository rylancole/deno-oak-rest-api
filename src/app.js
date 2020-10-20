// deno run --allow-net --allow-read --allow-write src/app.js

import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";

const port = 8000;
const app = new Application();

app.use(
  oakCors({
    origin: "http://localhost:3000",
  }),
);

const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = "Hello World!"
});

router.get("/users/:username", (ctx) => {
  const users = Deno.readTextFileSync("./src/users.json");
  const usersObj = JSON.parse(users);
  const username = ctx.params.username;

  if (usersObj[username]) {
    ctx.response.body = usersObj[username];
  } else {
    ctx.response.body = { error: "User does not exist" };
  }
});

router.put("/users/:username", async (ctx) => {
  ctx.response.body = "Received a PUT HTTP method";

  const users = Deno.readTextFileSync("./src/users.json");
  const usersObj = JSON.parse(users);
  const username = ctx.params.username;

  const body = await ctx.request.body({ type: "json" });
  usersObj[username] = await body.value;

  Deno.writeTextFile("./src/users.json", JSON.stringify(usersObj));
});

app.use(router.allowedMethods());
app.use(router.routes());

app.addEventListener("listen", () => {
  console.log(`Listening on: http://localhost:${port}`);
});

await app.listen({ port });
