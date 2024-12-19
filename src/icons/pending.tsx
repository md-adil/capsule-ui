import { createSvgWithId } from "../components/icon/svg.js";

export const Pending = createSvgWithId(
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
          d="M6.42186 10.75C5.76478 10.75 5.14728 10.6253 4.56936 10.376C3.99145 10.1266 3.48875 9.78827 3.06125 9.36085C2.63375 8.93343 2.29531 8.43081 2.04594 7.85299C1.79656 7.27518 1.67188 6.65779 1.67188 6.00083C1.67188 5.34386 1.79656 4.72634 2.04594 4.14828C2.29531 3.5702 2.63375 3.06736 3.06125 2.63975C3.48875 2.21213 3.99145 1.8736 4.56936 1.62416C5.14728 1.37472 5.76478 1.25 6.42186 1.25C7.1039 1.25 7.75038 1.38718 8.36128 1.66154C8.97217 1.9359 9.5039 2.32404 9.95646 2.82596L6.42186 6.35575V1.99999C5.3052 1.99999 4.35936 2.38749 3.58436 3.16249C2.80936 3.93749 2.42186 4.88332 2.42186 5.99999C2.42186 7.11665 2.80936 8.06249 3.58436 8.83749C4.35936 9.61249 5.3052 9.99999 6.42186 9.99999C7.03212 9.99999 7.60937 9.86521 8.1536 9.59566C8.69783 9.32611 9.16225 8.95126 9.54686 8.47113V9.53841C9.11161 9.91919 8.627 10.2163 8.09303 10.4298C7.55904 10.6432 7.00199 10.75 6.42186 10.75ZM10.5469 8.99999V5.125H11.2969V8.99999H10.5469ZM10.9219 10.6634C10.8074 10.6634 10.7115 10.6247 10.6341 10.5473C10.5567 10.4699 10.518 10.374 10.518 10.2596C10.518 10.1452 10.5567 10.0493 10.6341 9.97185C10.7115 9.89445 10.8074 9.85575 10.9219 9.85575C11.0363 9.85575 11.1322 9.89445 11.2096 9.97185C11.287 10.0493 11.3257 10.1452 11.3257 10.2596C11.3257 10.374 11.287 10.4699 11.2096 10.5473C11.1322 10.6247 11.0363 10.6634 10.9219 10.6634Z"
          fill="currentColor"
        />
      </g>
    </svg>
  ),
  "Pending",
);
