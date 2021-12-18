export class MissingExpectedValue extends Error {
  public readonly statusCode = 500;

  constructor(message: string) {
    super(`MissingExpectedValueError: ${message}`);
  }
}

export type Environment = "production" | "test" | "development";

export function presentStringInvariant(name: string): string {
  const value = process.env[name];

  if (!value || value.length < 1) {
    throw new MissingExpectedValue(
      `Invalid or missing environment variable provided for ${name}`
    );
  }
  return value;
}

export function presentNumberParser(name: string): number {
  console.log(process.env.NEXT_PUBLIC_LOG_LEVEL);
  const parsed = process.env[name] && parseInt(process.env[name] as string);
  if (!parsed) {
    throw new MissingExpectedValue(
      `Invalid or missing numerical environment variable for ${name} ${process.env[name]}`
    );
  }
  return parsed;
}

export function presentEnumInvariant<T>(range: T[], enumName: string): T {
  const value = process.env[enumName] as unknown as T;

  if (range.includes(value)) {
    return value;
  }
  throw new MissingExpectedValue(
    `Invalid value provided for enum ${enumName} ${value}`
  );
}

export const logLevels = ["fatal", "error", "warn", "info", "debug", "trace"];
export const logLevel = process.env.NEXT_PUBLIC_LOG_LEVEL || "info";
export const cloudName = process.env.NEXT_PUBLIC_CLOUD_NAME || "";
export const uploadPreset = process.env.NEXT_PUBLIC_UPLOAD_PRESET || "";
