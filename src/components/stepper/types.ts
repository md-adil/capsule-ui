import { type ReactElement } from "react";
import type { PropsWithClasses } from "../../utils/types.js";

export type StepperProps = {
  steps: StepperState;
  activeIndex: number;
};

export type StaticStepperProps = {
  steps: StaticStepperState;
};

export type StepperState = Array<{
  id: string | number;
  state: StepperStateType;
  label: string | ReactElement;
  body?: string | ReactElement;
}>;

export type StaticStepperState = Array<{
  id: string | number;
  label: string | ReactElement;
  body: string;
  icon: ReactElement;
}>;

export type StepperStateType = "default" | "completed" | "error" | "pending" | "cancelled";

export type StepItem = Omit<StepperState[number], "id">;

export type StepProps = StepItem &
  PropsWithClasses<"root"> & {
    index: number;
    activeIndex?: number;
    isActive: boolean;
    isInactive?: boolean;
  };

export type StaticProps = Omit<StepItem, "state"> & {
  index: number;
  icon: ReactElement;
  body: string;
};
