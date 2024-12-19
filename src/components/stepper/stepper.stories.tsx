import type { Meta, StoryObj } from "@storybook/react";
import { StaticStepper, Stepper as StepperComp, VerticalStepper } from "./stepper.js";
import { ClosedEnvelope } from "../../icons/closed-envelope.js";

const meta: Meta<typeof StepperComp> = {
  title: "components/Stepper",
  component: StepperComp,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

const defaultUserDrivenStepperState = [
  {
    id: "2e7caab8-8f27-4b34-8cf5-2017a51ce7fd",
    label: "Claim Details",
    state: "completed" as const,
    body: "03 Sep, 2023 | 12:15 PM ",
  },
  {
    id: "a998d659-5dce-4814-a429-cbb1be49e0de",
    label: "Upload Documents",
    state: "pending" as const,
    body: "03 Sep, 2023 | 12:15 PM ",
  },
  {
    id: "99a639f2-8a35-4770-a469-be5e40f06576",
    label: "Payment Details",
    state: "default" as const,
    body: "03 Sep, 2023 | 12:15 PM ",
  },
];

export const Completed: StoryObj<typeof StepperComp> = {
  render: StepperComp,
  args: {
    steps: [
      {
        id: "2e7caab8-8f27-4b34-8cf5-2017a51ce7fd",
        label: "Claim Details",
        state: "completed",
      },
      {
        id: "a998d659-5dce-4814-a429-cbb1be49e0de",
        label: "Upload Documents",
        state: "completed",
        body: "03 Sep, 2023 | 12:15 PM ",
      },
      {
        id: "99a639f2-8a35-4770-a469-be5e40f06576",
        label: "Payment Details",
        state: "default",
        body: "03 Sep, 2023 | 12:15 PM ",
      },
    ],

    activeIndex: 2,
  },
};

export const ActiveState: StoryObj<typeof StepperComp> = {
  args: {
    activeIndex: 1,
    steps: [
      {
        id: "2e7caab8-8f27-4b34-8cf5-2017a51ce7fd",
        label: "Claim Details",
        state: "completed",
      },
      {
        id: "a998d659-5dce-4814-a429-cbb1be49e0de",
        label: "Upload Documents",
        state: "completed",
        body: "03 Sep, 2023 | 12:15 PM ",
      },
      {
        id: "99a639f2-8a35-4770-a469-be5e40f06576",
        label: "Payment Details",
        state: "default",
        body: "03 Sep, 2023 | 12:15 PM ",
      },
    ],
  },
};

export const ErrorState: StoryObj<typeof StepperComp> = {
  args: {
    steps: [
      {
        id: "2e7caab8-8f27-4b34-8cf5-2017a51ce7fd",
        label: "Claim Details",
        state: "completed",
      },
      {
        id: "a998d659-5dce-4814-a429-cbb1be49e0de",
        label: "Upload Documents",
        state: "error",
        body: "03 Sep, 2023 | 12:15 PM ",
      },
      {
        id: "99a639f2-8a35-4770-a469-be5e40f06576",
        label: "Payment Details",
        state: "default",
        body: "03 Sep, 2023 | 12:15 PM ",
      },
    ],
  },
};

export const PendingState: StoryObj<typeof StepperComp> = {
  args: {
    steps: [
      {
        id: "2e7caab8-8f27-4b34-8cf5-2017a51ce7fd",
        label: "Claim Details",
        state: "completed",
      },
      {
        id: "a998d659-5dce-4814-a429-cbb1be49e0de",
        label: "Upload Documents",
        state: "pending",
        body: "03 Sep, 2023 | 12:15 PM ",
      },
      {
        id: "99a639f2-8a35-4770-a469-be5e40f06576",
        label: "Payment Details",
        state: "default",
        body: "03 Sep, 2023 | 12:15 PM ",
      },
    ],
  },
};

export const CancelledState: StoryObj<typeof StepperComp> = {
  args: {
    steps: [
      {
        id: "2e7caab8-8f27-4b34-8cf5-2017a51ce7fd",
        label: "Claim Details",
        state: "completed",
      },
      {
        id: "a998d659-5dce-4814-a429-cbb1be49e0de",
        label: "Upload Documents",
        state: "cancelled",
        body: "03 Sep, 2023 | 12:15 PM ",
      },
      {
        id: "99a639f2-8a35-4770-a469-be5e40f06576",
        label: "Payment Details",
        state: "default",
        body: "03 Sep, 2023 | 12:15 PM ",
      },
    ],
  },
};

export const BackendDrivenStepper: StoryObj<typeof StepperComp> = {
  render: VerticalStepper,
  args: {
    steps: defaultUserDrivenStepperState,
    activeIndex: 1,
  },
};

export const IconStepper: StoryObj<typeof StaticStepper> = {
  render: StaticStepper,
  args: {
    steps: [
      {
        id: "2e7caab8-8f27-4b34-8cf5-2017a51ce7fd",
        label: "Upload your prescription",
        body: "Upload your prescription and we will give you a call back in 10 hours ",
        icon: <ClosedEnvelope />,
      },
      {
        id: "a998d659-5dce-4814-a429-cbb1be49e0de",
        label: "Sample Collection",
        body: "Agent X Collected your",
        icon: <ClosedEnvelope />,
      },
      {
        id: "99a639f2-8a35-4770-a469-be5e40f06576",
        label: "Report Delivery",
        body: "Your reports will be delivered to your email within 24 hours of sample collection ",
        icon: <ClosedEnvelope />,
      },
    ],
  },
};
