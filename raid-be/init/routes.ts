import express from "express";
import documentRouter from "../document/router";

export const routes = (app: express.Application) => {
  app.use("/doc", documentRouter);
};
