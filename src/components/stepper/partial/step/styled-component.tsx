import styled from "@emotion/styled";
import { CONNECTOR_TRANSITION_TIME, LIST_ITEM_TRANSITION_TIME, RootListItemBase } from "../commonStyles.js";

export const RootListItem = styled(RootListItemBase)`
  flex-direction: column;
  align-items: center;
`;

export const CountContainer = styled.span`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const Connector = styled.span<{ progression: boolean }>`
    height: 2px;
    background-color: 
        ${({ progression }) => (progression ? `var(--color-black);` : "var(--color-gray-300);")}
    position: absolute;
    top: 13px;
    left: calc(-50% + 13px);
    right: calc(50% + 13px);
    
    ::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 100%;
        background-color: 
            ${({ progression }) => (progression ? `var(--color-black);` : "var(--color-gray-300);")}
        transition: right ${LIST_ITEM_TRANSITION_TIME} ease-in;
        }

`;

export const StepLabel = styled.div<{ active: boolean }>`
  margin: 8px 0 0;
  text-align: center;
  padding: 0 8px;
  transition: color ${LIST_ITEM_TRANSITION_TIME} ease-in;
  transition-delay: ${CONNECTOR_TRANSITION_TIME};
`;
