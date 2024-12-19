import styled from "@emotion/styled";
import { CONNECTOR_TRANSITION_TIME, LIST_ITEM_TRANSITION_TIME, RootListItemBase } from "../commonStyles.js";

export const RootListItem = styled(RootListItemBase)`
  flex-direction: row;
  align-items: left;
`;

export const CountContainer = styled.span`
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 20px 0 0;
`;

export const Connector = styled.span<{ progression: boolean }>`
    height: 50px;
    width: 1px;
    background-color: 
        ${({ progression }) => (progression ? `var(--color-black);` : "var(--color-gray-300);")}
    position: absolute;
    top: calc(-50% - 29px);
    
    ::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 100%;
        right: 0;
        background-color: 
            ${({ progression }) => (progression ? `var(--color-black);` : "var(--color-gray-300);")}
        transition: right ${CONNECTOR_TRANSITION_TIME} ease-in;
    }
`;

export const StepLabel = styled.div<{ active: boolean }>`
  margin: 16px 0 0;
  text-align: left;
  transition: color ${LIST_ITEM_TRANSITION_TIME} ease-in;
  transition-delay: ${CONNECTOR_TRANSITION_TIME};
  font-weight: 400;
`;

export const StepSubheading = styled.div`
  min-height: 18px;
  font-weight: 400;
  margin-top: 8px;
  max-width: 320px;
`;

export const StepLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
`;
