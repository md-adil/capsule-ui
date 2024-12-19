import { isNumber } from "../utils/primitive.js";
import type { GlobalValues, CSSPercent, GlobalSpacing, CSSVar } from "./types.js";

export type Unit = number | CSSPercent | `-${CSSPercent}` | GlobalValues | GlobalSpacing | CSSVar;
export type Spacing = [top: Unit, right?: Unit, bottom?: Unit, left?: Unit];

export function createSpacing(factor: number, unitType: string) {
  const cache = new Map<number | string, string>();

  function cached(key: number, val: string) {
    cache.set(key, val);
    return val;
  }

  function spacing(...units: Spacing): string {
    if (units.length > 1) {
      return units.map((x) => spacing(x!)).join(" ");
    }
    const unit = units[0];
    if (cache.has(unit)) return cache.get(unit)!;
    if (unit === 0) return "0";
    if (isNumber(unit)) {
      return cached(unit, `${unit * factor}${unitType}`);
    }
    return unit;
  }
  spacing.top = function spacingTop<T extends Unit>(unit: T) {
    return spacing(unit, 0, 0, 0) as `${T} 0 0 0`;
  };

  spacing.topRight = function spacingTopRight<T extends Unit>(unit: T) {
    return spacing(unit, unit, 0, 0) as `${T} ${T} 0 0`;
  };

  spacing.topLeft = function spacingTopLeft<T extends Unit>(unit: T) {
    return spacing(unit, 0, 0, unit) as `${T} 0 0 ${T}`;
  };

  spacing.bottomLeft = function spacingBottomLef<T extends Unit>(unit: T) {
    return spacing(0, 0, unit, unit) as `0 0 ${T} ${T}`;
  };

  spacing.bottomRight = function spacingBottomLef<T extends Unit>(unit: T) {
    return spacing(0, unit, unit, 0) as `0 ${T} ${T} 0`;
  };

  spacing.bottom = function spacingBottom<T extends Unit>(unit: T) {
    return spacing(0, 0, unit, 0) as `0 0 ${T} 0`;
  };

  spacing.x = function spacingX<T extends Unit>(unit: T) {
    return spacing(0, unit) as `0 ${T}`;
  };

  spacing.y = <T extends Unit>(unit: T) => {
    return spacing(unit, 0) as `${T} 0`;
  };

  spacing.config = { factor, unit: unitType };
  return spacing;
}
