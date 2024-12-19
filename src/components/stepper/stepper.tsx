import { type StepperProps, type StaticStepperProps } from "./types.js";
import { Step } from "./partial/step/index.js";
import { RootOrderedList } from "./styled-component.js";
import { VerticalStep } from "./partial/vertical-step/index.js";
import { StaticStep } from "./partial/static-step/index.js";

export const Stepper = ({ steps, activeIndex }: StepperProps) => {
  if (!Array.isArray(steps)) {
    return <></>;
  }

  return (
    <RootOrderedList variant={"horizontal"}>
      {steps.map((listItem, index) => {
        return (
          <Step
            key={listItem.id}
            {...listItem}
            index={index}
            isActive={index === activeIndex}
            classes={{
              root: `${listItem.state} ${index === activeIndex ? "active" : ""} ${index < activeIndex ? "semiActive" : ""}`,
            }}
            isInactive={index > activeIndex}
          />
        );
      })}
    </RootOrderedList>
  );
};

export const VerticalStepper = ({ steps, activeIndex }: StepperProps) => {
  if (!Array.isArray(steps)) {
    return <></>;
  }

  return (
    <RootOrderedList variant={"vertical"}>
      {steps.map((listItem, index) => (
        <VerticalStep
          key={listItem.id}
          {...listItem}
          index={index}
          isActive={index === activeIndex}
          classes={{
            root: `${listItem.state} ${index === activeIndex ? "active" : ""} ${index < activeIndex ? "semiActive" : ""}`,
          }}
          isInactive={index > activeIndex}
        />
      ))}
    </RootOrderedList>
  );
};

export const StaticStepper = ({ steps }: StaticStepperProps) => {
  if (!Array.isArray(steps)) {
    return <></>;
  }

  return (
    <RootOrderedList variant={"static"}>
      {steps.map((listItem, index) => (
        <StaticStep key={listItem.id} {...listItem} index={index} />
      ))}
    </RootOrderedList>
  );
};
