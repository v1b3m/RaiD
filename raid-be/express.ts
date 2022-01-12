/* eslint-disable no-unused-vars */
import { NextFunction, Response, Request } from "express";

export function wrapAsyncHandler<T>(
  fn: (req: Request<T>, res: Response, next?: NextFunction) => Promise<unknown>
) {
  return (req: Request<T>, res: Response, next: NextFunction) =>
    fn(req, res, next).catch(next);
}
