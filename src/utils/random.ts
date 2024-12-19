const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export function randomElement<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)]!;
}

export function randomText(length: number) {
  let result = "";
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(random(characters.length - 1));
    counter += 1;
  }
  return result;
}

export const createId = (len = 8) => randomText(len);

export function random(min: number, max?: number) {
  if (!max) {
    max = min;
    min = 0;
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}
