export function isNullish(val: unknown) {
  return val === null || val === undefined;
}

export function round(value: number, decimals: number) {
  const factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
}

export function isNumber(x: unknown) {
  return typeof x === "number";
}

export function isCallable(fn: unknown): fn is (...args: unknown[]) => unknown {
  return Boolean(fn && {}.toString.call(fn) === "[object Function]");
}

export function getDecimalPlaces(num: number) {
  const [, dec = ""] = num.toString().split(".");
  return dec.length;
}
