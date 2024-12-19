import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "./accordion.js";
import { ClosedEnvelope } from "../../icons/closed-envelope.js";
import { Button } from "../button/button.js";
import { AccordionList } from "./accordion-list.js";
import { useState } from "react";

const list = [
  {
    title: "What is SuperCard Bajaj Finserv Health Prime?",
    description: (
      <>
        At any time, you can contact our support centre for help, because we won over 1000 clients. At any time, you can
        contact our support centre for help, because we won over 100 clients.
      </>
    ),
  },
  {
    title: "I want to raise a reimbursement request for appointments",
    description: (
      <>
        You can raise a reimbursement request in few simple steps.
        <ul>
          <li>Go to Active Plans</li>
          <li>Select the plan against which you want to raise a request</li>
          <li>Select the service for which you want to raise a reimbursement</li>
          <li>Click on raise a claim</li>
          <li>Go through the guidelines and submit all required documents </li>
          <li>Confirm and submit</li>
        </ul>
      </>
    ),
  },
  {
    title: "My appointment did not happen",
    description: (
      <>We are really sorry for this experience. You can reach out to our executive and we will resolve the issue.</>
    ),
  },
];

const meta: Meta<typeof Accordion> = {
  title: "components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {
    title: {
      description: "Heading for the Accordion",
      type: "string",
    },
    children: { control: false },
    action: { control: false },
    open: { type: "boolean", description: "This prop controls the Open/Close state of Accordion" },
  },
  args: {},
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const AccordionComp: Story = {
  name: "Accordion",
  render(props) {
    const [open, setOpen] = useState(true);
    return <Accordion {...props} open={open} onChange={() => setOpen((x) => !x)} />;
  },
  args: {
    title: "What is SuperCard Bajaj Finserv Health Prime?",
    action: (
      <>
        <Button size="small" variant="ghost" start={<ClosedEnvelope css={{ fontSize: "1.2em" }} />}>
          Chat with us
        </Button>
        <Button size="small" variant="ghost" start={<ClosedEnvelope css={{ fontSize: "1.2em" }} />}>
          Chat with us
        </Button>
      </>
    ),
    children: (
      <>
        At any time, you can contact our support centre for help, because we won over 1000 clients. At any time, you can
        contact our support centre for help, because we won over 100 clients.
      </>
    ),
  },
};

export const Accordions: Story = {
  render() {
    const [active, setActive] = useState(new Set());
    return (
      <>
        {list.map((x, i) => (
          <Accordion
            open={active.has(i)}
            onChange={() => {
              setActive((x) => (x.has(i) ? (x.delete(i), new Set(x)) : new Set([...x, i])));
            }}
            key={String(i)}
            index={i}
            title={x.title}
          >
            {x.description}
          </Accordion>
        ))}
      </>
    );
  },
};

export const AccordionsList: Story = {
  render() {
    const [active, setActive] = useState(0);
    return (
      <AccordionList active={active} onChange={setActive}>
        {list.map((x, i) => (
          <Accordion key={String(i)} index={i} title={x.title}>
            {x.description}
          </Accordion>
        ))}
      </AccordionList>
    );
  },
};
