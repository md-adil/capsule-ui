import { useId, type AriaAttributes, type HTMLProps, type PropsWithChildren, type ReactNode } from "react";
import { Paper, type PaperProps } from "../paper/paper.js";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

import type { ClickHandler, PropsWithAction, PropsWithClass, PropsWithClasses } from "../../utils/types.js";
import {
  background,
  border,
  cv,
  flex,
  gap,
  hover,
  padding,
  shadow,
  spacing,
  transform,
  transition,
  type TextVariant,
} from "../../theme/theme.js";
import { Text } from "../typography/index.js";
import { ButtonClose } from "../button/button-close.js";

const pad = [{ padding: cv("card-padding", spacing(4)) }];

const styles = {
  header: css(pad, border.bottom(1), gap(), flex("justify-between", "items-center"), {
    background: cv("card-header-background"),
    color: cv("card-header-color"),
  }),
  footer: css(pad, flex("justify-between"), border.top(1)),
  action: css(flex(), gap(2)),
  content: css(pad),
  extras: css(flex("items-center"), gap(1)),
};

const closeOnlyStyles = {
  button: css(background("gray-500"), { svg: transform("scale(0.85)") }, hover(background("gray-500"))),
  header: css({ position: "relative" }, padding(4), padding.bottom(0), flex("row-reverse")),
};

export interface CardHeaderProps extends AriaAttributes, PropsWithClass, PropsWithChildren {
  title?: ReactNode;
  extras?: ReactNode;
  closable?: boolean;
  id?: string;
  variant?: TextVariant;
  onClose?: ClickHandler;
}

function CardHeader({
  title,
  extras,
  closable,
  variant = "header-3",
  onClose,
  children,
  className,
  ...props
}: CardHeaderProps) {
  const hasContent = title ?? children;
  if (closable) {
    if (!hasContent && !extras) {
      return (
        <div data-name="card-header" css={closeOnlyStyles.header} className={className}>
          <ButtonClose onClick={onClose} />
        </div>
      );
    }
    extras ??= true;
  }

  if (extras && !hasContent) {
    title = true;
  }

  return (
    <div data-name="card-header" css={styles.header} className={className}>
      {title && (
        <Text role="heading" aria-level={2} variant={variant} {...props}>
          {title}
        </Text>
      )}
      {children}
      {extras && (
        <div css={styles.extras}>
          {extras}
          {closable && <ButtonClose onClick={onClose} />}
        </div>
      )}
    </div>
  );
}

export interface CardFooterProps extends Omit<HTMLProps<HTMLDivElement>, "action"> {
  action?: ReactNode;
}

function CardFooter({ children, action, ...props }: CardFooterProps) {
  return (
    <div css={styles.footer} {...props}>
      <div>{children}</div>
      {action && <div css={styles.action}>{action}</div>}
    </div>
  );
}

export interface CardProps extends PaperProps, PropsWithClasses<"content" | "header" | "footer">, PropsWithAction {
  children: ReactNode;
  title?: string;
  extras?: ReactNode;
  cover?: ReactNode;
  hoverable?: boolean;
  container?: boolean;
}

const Content = styled.div(styles.content);

export function Card({
  children,
  hoverable,
  extras,
  cover,
  title,
  action,
  container = true,
  classes = {},
  role = "group",
  ...props
}: CardProps) {
  const id = "card" + useId();
  const aria: AriaAttributes = {};
  if (title) {
    aria["aria-labelledby"] = id + "label";
  }

  return (
    <Paper css={hoverable && [transition(), hover(shadow("lg"))]} role={role} {...aria} {...props}>
      {title && <CardHeader title={title} id={aria["aria-labelledby"]} extras={extras} className={classes.header} />}
      {cover}
      {container ? (
        <Content data-name="card-content" className={classes.content}>
          {children}
        </Content>
      ) : (
        children
      )}
      {action && <CardFooter data-name="card-footer" className={classes.footer} action={action} />}
    </Paper>
  );
}

export const card = {
  header: CardHeader,
  footer: CardFooter,
  content: Content,
};
