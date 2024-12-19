import styled from "@emotion/styled";
import { background, circle, colors, flex, hover, padding, transition } from "../../theme/theme.js";
import { ButtonBase, type ButtonBaseProps } from "./base.js";

const IconButtonContainer = styled(ButtonBase)(transition(), padding(1), circle(7), flex.inline("center"), (props) => ({
  ...(props.disabled
    ? {
        color: colors["gray-300"],
      }
    : {
        ...hover(background("shaded")),
      }),
}));

export interface IconButtonProps extends ButtonBaseProps {}
export function IconButton({ children, disabled, onClick, ...props }: IconButtonProps) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && onClick) {
      onClick(event);
    }
  };
  return (
    <IconButtonContainer onClick={handleClick} disabled={disabled} data-name="icon-button" {...props}>
      {children}
    </IconButtonContainer>
  );
}
