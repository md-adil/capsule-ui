import { type StepperStateType } from "../types.js";
import { COUNT_IMAGE_MAPPER } from "../utils.js";

const CountValue = ({ state, index }: { state: StepperStateType; index: number }): JSX.Element => {
  const Component = COUNT_IMAGE_MAPPER[state];
  if (Component) {
    return <Component />;
  }
  return <span>{index + 1}</span>;
};

export default CountValue;
