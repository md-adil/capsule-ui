import { createSvg } from "../components/icon/svg.js";

export const Tick = createSvg(
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <polyline
      id="primary"
      points="5 12 10 17 19 8"
      style={{
        fill: "none",
        stroke: "currentcolor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
    />
  </svg>,
  "Tick",
);
