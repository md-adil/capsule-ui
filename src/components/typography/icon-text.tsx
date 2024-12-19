import { css } from "@emotion/react";
import { flex, gap } from "../../theme/theme.js";
import type { PropsWithAdornment } from "../../utils/types.js";
import { Text, type TextProps } from "./text.js";

const styles = {
  text: css(flex("items-center"), gap.x(1 / 2)),
};
export interface IconTextProps extends TextProps, PropsWithAdornment {}

export function IconText({ children, start, end, classes = {}, ...props }: IconTextProps) {
  return (
    <Text css={styles.text} {...props}>
      {start && <span className={classes.start}>{start}</span>}
      {children}
      {end && <span className={classes.end}>{end}</span>}
    </Text>
  );
}
