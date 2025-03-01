export function getInitials(input: unknown): string {
  if (typeof input !== "string") {
    return "";
  }

  const words = input.split(" ");

  if (words.length > 1) {
    const firstWord = words.at(0) || "";
    const lastWord = words.at(-1) || "";
    return `${firstWord.charAt(0)}${lastWord.charAt(0)}`;
  }
  else if (words.length === 1) {
    const firstWord = words.at(0) || "";
    return `${firstWord.charAt(0)}`;
  }

  return "";
}
