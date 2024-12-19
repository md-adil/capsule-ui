import styled from "@emotion/native";
import type { ButtonProps } from "./types.native.js";

export const StyledButton = styled.TouchableOpacity<ButtonProps>`
  background-color: ${(props: ButtonProps) => (props.variant === "primary" ? "red" : "transparent")};
  color: blue;
  border-radius: 8;
  min-width: 40;
  min-height: 40;
`;

export const StyledText = styled.Text`
  font-size: 18;
`;

export const RippleSpan = styled.View``;
