import * as crypto from "crypto";

export default function Hashify(type: string, value: string): string {
  return crypto.createHash(type.toLowerCase()).update(value).digest("hex");
}
