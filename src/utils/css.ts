const prefix = "_capsule_";
export function createClass<T extends string>(name: T): [name: `_capsule_${T}`, selector: `._capsule_${string}`] {
  const cls = `${prefix}_${name}` as `_capsule_${T}`;
  return [cls, `.${cls}`];
}
