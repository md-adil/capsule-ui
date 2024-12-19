import { createSvgWithId } from "../components/icon/svg.js";

export const Cancelled = createSvgWithId(
  (id) => (
    <svg viewBox="0 0 13 12" fill="none">
      <mask id={id + "mask"} style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0">
        <rect x="0.5" width="12" height="12" fill="#D9D9D9" />
      </mask>
      <g mask={`url(#${id}mask)`}>
        <path
          d="M3.69879 9.32692L3.17188 8.80001L5.97187 6.00001L3.17188 3.20001L3.69879 2.6731L6.49879 5.4731L9.29879 2.6731L9.8257 3.20001L7.0257 6.00001L9.8257 8.80001L9.29879 9.32692L6.49879 6.52692L3.69879 9.32692Z"
          fill="currentColor"
        />
      </g>
    </svg>
  ),
  "Cancelled",
);
