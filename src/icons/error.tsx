import { createSvgWithId } from "../components/icon/svg.js";
export const Error = createSvgWithId(
  (id) => (
    <svg viewBox="0 0 13 12">
      <mask
        id={`${id}mask`}
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
          d="M6.49999 9.96159C6.29375 9.96159 6.11719 9.88815 5.97031 9.74127C5.82344 9.59441 5.75 9.41785 5.75 9.2116C5.75 9.00536 5.82344 8.8288 5.97031 8.68192C6.11719 8.53506 6.29375 8.46162 6.49999 8.46162C6.70623 8.46162 6.88279 8.53506 7.02966 8.68192C7.17654 8.8288 7.24998 9.00536 7.24998 9.2116C7.24998 9.41785 7.17654 9.59441 7.02966 9.74127C6.88279 9.88815 6.70623 9.96159 6.49999 9.96159ZM5.81731 7.5097V1.78857H7.18266V7.5097H5.81731Z"
          fill="currentColor"
        />
      </g>
    </svg>
  ),
  "Error",
);
