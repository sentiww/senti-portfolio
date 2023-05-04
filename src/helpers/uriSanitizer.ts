const replacementMap = new Map<string, string>([[" ", "-"]]);

export default function sanitize(uriComponent: string): string {
  let sanitizedUri: string = uriComponent.toLowerCase();
  for (const [key, value] of replacementMap.entries()) {
    sanitizedUri = sanitizedUri.replaceAll(key, value);
  }
  return sanitizedUri;
}
