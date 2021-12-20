import { DecodedToken } from "../utils/jwt";
import User from "./User";

export type Decoded = DecodedToken & { user: User };
interface Data extends Decoded {
  token: string;
}

export type Status = "loading" | "authenticated" | "unauthenticated";

export default interface ISession {
  data?: Data;
  status: Status;
}
