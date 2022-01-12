import express from "express";
import { customErrorHandler } from "./errors";
import { middleware } from "./init/middleware";
import { routes } from "./init/routes";

const app = express();

middleware(app);
routes(app);
app.use(customErrorHandler);

if (module === require.main) {
  app.listen(process.env.PORT || 8080, () => {
    const port = process.env.PORT ? process.env.PORT : 8080;

    console.log(`App listening on http://127.0.0.1:${port}`);
  });
}

module.exports = app;
