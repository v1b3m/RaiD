import express from "express";
import convertHTMLToPDF from "pdf-puppeteer";

export const generatePdf = async (
  req: express.Request,
  res: express.Response
) => {
  const { html } = req.body;

  const callback = (pdf: Buffer) => {
    res.setHeader("Content-Type", "application/pdf");
    res.send(pdf);
  };

  convertHTMLToPDF(
    html,
    callback,
    {
      margin: {
        top: "0.5in",
        bottom: "0.5in",
        left: "0.5in",
        right: "0.5in",
      },
    },
    { args: ["--no-sandbox"] }
  );
};
