import styled from "@emotion/styled";

export const CONNECTOR_TRANSITION_TIME = "0.2s";
export const LIST_ITEM_TRANSITION_TIME = "0.3s";

export const RootListItemBase = styled.li`
  flex: 1;
  display: flex;

  &.active {
    span > span.count {
      ::before {
        border-color: var(--color-black);
      }
      &.error::before {
        border-color: var(--color-error-500);
      }
      &.cancelled::before {
        border-color: var(--color-error-500);
      }
      &.pending::before {
        border-color: var(--color-caution-500);
      }
    }
    span > span.connector {
      ::after {
        right: 0;
      }
    }
  }

  &.semiActive {
    span > span.count {
      ::before {
        border-color: transparent;
      }
    }
  }
`;

export const Count = styled.span<{ bgColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  background-color: ${({ bgColor }) => `var(--color-${bgColor})`};
  transition: background-color ${LIST_ITEM_TRANSITION_TIME} ease-in;
  transition-delay: ${CONNECTOR_TRANSITION_TIME};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: relative;
  margin: 4px;
  text-align: center;
  font-size: 12px;

  ::before {
    content: "";
    position: absolute;
    background-color: var(--color-white);
    width: 24px;
    height: 24px;
    z-index: -1;
    border-radius: 50%;
    border: 1px solid transparent;
    transition: border ${LIST_ITEM_TRANSITION_TIME} ease-in;
    transition-delay: ${CONNECTOR_TRANSITION_TIME};
  }
`;

export const StepLabel = styled.div<{ active: boolean }>`
  margin: 8px 0 0;
  text-align: center;
  padding: 0 8px;
  transition: color ${LIST_ITEM_TRANSITION_TIME} ease-in;
  transition-delay: ${CONNECTOR_TRANSITION_TIME};
`;
