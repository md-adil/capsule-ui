import { type Color } from "../../theme/theme.js";
import { Pending, Completed, Error, Close } from "../../icons/index.js";
import { type StepperStateType } from "./types.js";

/**
 * A mapper object that links each stepper state to its corresponding image source.
 */
export const COUNT_IMAGE_MAPPER = {
  default: null,
  completed: Completed,
  error: Error,
  pending: Pending,
  cancelled: Close,
};
/**
 * Returns an image element if the state has a corresponding image, otherwise returns the step (index + 1).
 *
 * @param {StepperStateType} state - The state of the step (e.g., 'completed', 'error', 'pending', 'cancelled').
 * @param {number} index - The index of the step in the stepper.
 * @returns {JSX.Element | string} - An image element if there is a corresponding image for the state, otherwise the step index + 1 as a string.
 */

export const COLOR_MAPPER: Record<string, Color> = {
  completed: "black",
  default: "black",
  error: "error-500",
  pending: "caution-500",
  cancelled: "error-500",
};

export const DEFAULT_COLOR = "gray-300";
export const BLACK = "black";

export const getColor = (isInactive: boolean, state: StepperStateType) => {
  if (isInactive) {
    return DEFAULT_COLOR;
  }
  return COLOR_MAPPER[state] || DEFAULT_COLOR;
};
