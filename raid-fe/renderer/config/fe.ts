import Tokens from "csrf";

export const logLevel = process.env.NEXT_PUBLIC_LOG_LEVEL || "info";
export const cloudName = process.env.NEXT_PUBLIC_CLOUD_NAME || "";
export const uploadPreset = process.env.NEXT_PUBLIC_UPLOAD_PRESET || "";

export const tokens = new Tokens();
export const secret = tokens.secretSync();

// Uncomment these lines to generate a secret
// const token = tokens.create(secret);
// console.log({ secret, token });

export const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;
