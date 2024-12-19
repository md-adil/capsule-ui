import styled from "@emotion/styled";

export const RootOrderedList = styled.ol<{ variant: "horizontal" | "vertical" | "static" }>`
  all: unset;
  list-style-type: none;
  display: flex;
  flex-direction: ${(props) => (props.variant === "horizontal" ? "row" : "column")};
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 100%;
`;
