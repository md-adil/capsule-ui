export function yes<T>(isTrue: unknown, value: T): T | undefined {
  return isTrue ? value : undefined;
}

yes.no = <T>(isFalse: unknown, value: T) => (isFalse ? undefined : value);
