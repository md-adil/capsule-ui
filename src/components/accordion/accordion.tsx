import styled from "@emotion/styled";
import { type MouseEvent, type ReactNode } from "react";
import { Text } from "../typography/text.js";
import { flex, gap, padding, rotate, transition, text, radius, grid, border, selection } from "../../theme/theme.js";
import { ArrowChevronUp } from "../../icons/index.js";
import { useAccordion } from "./accordion-list.js";
import type { PropsWithAction, PropsWithClass, PropsWithClasses } from "../../utils/types.js";
import { Paper } from "../paper/paper.js";

type ChangeEvent = MouseEvent<HTMLDivElement>;

const Container = styled(Paper.withComponent("dl"))(padding.x(), {
  ":not(:first-of-type)": { 'dt[role="heading"]': border.top(2) },
  ":first-of-type": radius.top(2),
  ":last-of-type": radius.bottom(2),
});

const Term = styled.dt(flex("justify-between", "items-center"), selection(false), gap(7.5), padding.y(), {
  width: "100%",
  cursor: "pointer",
});

type DescriptionProps = {
  open: boolean;
};
const Description = styled.dd<DescriptionProps>(grid(), transition("all", "0.3s ease"), text("body-1"), (props) => ({
  gridTemplateRows: props.open ? "1fr" : "0fr",
}));

const Content = styled.div(flex("column"), padding.y());

const Action = styled.div({ label: "button_container" }, flex(), padding.y(2), padding.x(1 / 4), gap.x(2));

export interface AccordionProps extends PropsWithClass, PropsWithClasses<"summary" | "description">, PropsWithAction {
  children?: ReactNode;
  index?: number;
  onChange?: (e: ChangeEvent) => void;
  title: string;
  open?: boolean;
}
export function Accordion({ children, index, title, action, className, classes = {}, onChange, open }: AccordionProps) {
  const ctx = useAccordion();
  if (ctx.active !== undefined) {
    open = index === ctx.active;
  }

  function handleChange(e: ChangeEvent) {
    ctx.onChange(index!);
    onChange?.(e);
  }
  return (
    <Container role="presentation" rounded={false} className={className}>
      <Term role="heading" onClick={handleChange} className={classes.summary}>
        <Text css={transition()} variant={open ? "header-4" : "sub-heading-1"}>
          {title}
        </Text>
        <ArrowChevronUp css={[transition("transform"), !open && rotate[180]]} />
      </Term>
      <Description open={open!} className={classes.description}>
        <div css={{ overflow: "hidden" }}>
          <Content>
            <div>{children}</div>
            {action && <Action>{action}</Action>}
          </Content>
        </div>
      </Description>
    </Container>
  );
}
