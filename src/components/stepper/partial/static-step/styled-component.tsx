import styled from "@emotion/styled";
import { CONNECTOR_TRANSITION_TIME, LIST_ITEM_TRANSITION_TIME } from "../commonStyles.js";

export const IconContainer = styled.div`
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    max-width: 100%;
    max-height: 100%;
  }
`;

export const StepLabel = styled.div`
  margin: 16px 0 0;
  text-align: left;
  transition: color ${LIST_ITEM_TRANSITION_TIME} ease-in;
  transition-delay: ${CONNECTOR_TRANSITION_TIME};
  font-weight: 500;
`;

export const Connector = styled.span<{ expand: boolean }>`
  height: 28px;
  width: 1px;
  background-color: var(--color-gray-200);
  position: absolute;
  top: ${({ expand }) => (expand ? "calc(100% + 5px)" : "100%")};
`;
