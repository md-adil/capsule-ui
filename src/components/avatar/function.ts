export function hashStringToColor(str: string = "DY"): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const h = hash % 360;
  const s = 0.7;
  const v = 0.9;

  const hsvToRgb = (h: number, s: number, v: number) => {
    const c = v * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = v - c;
    let r = 0,
      g = 0,
      b = 0;

    if (0 <= h && h < 60) {
      r = c;
      g = x;
      b = 0;
    } else if (60 <= h && h < 120) {
      r = x;
      g = c;
      b = 0;
    } else if (120 <= h && h < 180) {
      r = 0;
      g = c;
      b = x;
    } else if (180 <= h && h < 240) {
      r = 0;
      g = x;
      b = c;
    } else if (240 <= h && h < 300) {
      r = x;
      g = 0;
      b = c;
    } else if (300 <= h && h < 360) {
      r = c;
      g = 0;
      b = x;
    }

    return [Math.round((r + m) * 255), Math.round((g + m) * 255), Math.round((b + m) * 255)];
  };

  const [r, g, b] = hsvToRgb(h, s, v);
  return `#${((1 << 24) | (r! << 16) | (g! << 8) | b!).toString(16).slice(1).toUpperCase()}`;
}
export function extractInitials(name?: string) {
  if (!name) return "BH";
  const [firstName, lastName] = name.toUpperCase().split(" ");
  return [firstName!, lastName!]
    .filter(Boolean)
    .map((x) => x[0]!)
    .join("");
}
