const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function isExternalUrl(value: string): boolean {
  return /^(?:[a-z]+:)?\/\//i.test(value);
}

export function withBasePath(value: string): string {
  if (!value) return value;
  if (!value.startsWith("/")) return value;
  if (value.startsWith("//")) return value;
  if (isExternalUrl(value)) return value;
  if (!BASE_PATH) return value;
  if (value === BASE_PATH || value.startsWith(`${BASE_PATH}/`)) return value;

  return `${BASE_PATH}${value}`;
}

