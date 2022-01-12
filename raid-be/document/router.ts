import express from "express";
import { wrapAsyncHandler } from "../express";
import { generatePdf } from "./controllers/generatePdf";

const router = express.Router();

router.post("/", wrapAsyncHandler(generatePdf));

export default router;
