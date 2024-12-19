import { createSvgWithId } from "../components/icon/svg.js";

export const Completed = createSvgWithId(
  (id) => (
    <svg viewBox="0 0 13 12" fill="none">
      <mask
        id={id + "mask"}
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="12"
        height="12"
      >
        <rect x="0.5" width="12" height="12" fill="#D9D9D9" />
      </mask>
      <g mask={`url(#${id}mask)`}>
        <path
          d="M5.27472 8.82695L2.60742 6.15965L3.14203 5.62505L5.27472 7.75774L9.85741 3.17505L10.392 3.70965L5.27472 8.82695Z"
          fill="currentColor"
        />
      </g>
    </svg>
  ),
  "Completed",
);
