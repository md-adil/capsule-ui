import { IconButton, type IconButtonProps } from "./icon-button.js";
import { Close } from "../../icons/close.js";
import { css } from "@emotion/react";
import { hover, transform, transition } from "../../theme/theme.js";

const styles = {
  button: css({ cursor: "pointer" }, hover({ "> svg": transform("scale(0.75)") })),
  icon: css(transition("transform")),
};

export function ButtonClose(props: IconButtonProps) {
  return (
    <IconButton css={styles.button} {...props}>
      <Close css={styles.icon} />
    </IconButton>
  );
}
