import type { Edge as Edge } from "../utils/types.js";
export const edges: Edge[] = [
  "left",
  "top",
  "bottom-left",
  "bottom-right",
  "top-left",
  "top-right",
  "bottom",
  "right",
] as const;
export const edgesReversed = Object.freeze(
  Object.fromEntries(edges.map((edge, i) => [edge, edges[edges.length - 1 - i]])),
) as Readonly<Record<Edge, Edge>>;
