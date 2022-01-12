import cors from "cors";
import express from "express";
import helmet from "helmet";

export const middleware = (app: express.Application) => {
  app.use(helmet());
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static("public"));
};
