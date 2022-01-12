import { NextFunction, Request, Response } from "express";

export interface ApplicationError {
  statusCode?: number;
  message: string;
}

export class HTTPError extends Error implements ApplicationError {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const customErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (res.headersSent) {
    return next(err);
  }

  if (err instanceof HTTPError) {
    const { statusCode, message } = err;
    res.status(statusCode).json({ message });
  } else {
    res.status(500).json({ message: err.toString() });
  }
};
