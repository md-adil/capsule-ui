export function range(start: number, end: number, interval = 1) {
  const output: number[] = [];
  for (let i = start; i < end + 1; i += interval) {
    output.push(i);
  }
  return output;
}

export function ensureArray<T>(item: T | T[]): T[] {
  if (Array.isArray(item)) {
    return item;
  }
  return [item];
}
