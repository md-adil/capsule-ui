import { type FC } from "react";
import { type StepProps } from "../../types.js";
import {
  CountContainer,
  RootListItem,
  Connector,
  StepLabel,
  StepSubheading,
  StepLabelContainer,
} from "./styled-component.js";
import { Text } from "../../../typography/index.js";
import CountValue from "../count-value.js";
import { Count } from "../commonStyles.js";
import { getColor } from "../../utils.js";

export const VerticalStep: FC<StepProps> = ({
  state,
  label,
  index,
  body = " ",
  isActive,
  classes = {},
  isInactive = true,
}) => {
  const color = getColor(isInactive, state);
  return (
    <RootListItem className={classes.root}>
      <CountContainer>
        {index !== 0 && <Connector progression={!isInactive} />}
        <Text variant="body-1" color={color}>
          <Count className={`count ${state}`} bgColor={color}>
            <CountValue state={state} index={index} />
          </Count>
        </Text>
      </CountContainer>
      <StepLabelContainer>
        <Text variant="body-1" color={color}>
          {typeof label === "string" ? (
            <StepLabel className={state} active={isActive}>
              {label}
            </StepLabel>
          ) : (
            label
          )}
        </Text>
        <Text variant="label-1" color="gray-300">
          {typeof label === "string" ? <StepSubheading className={state}>{body}</StepSubheading> : body}
        </Text>
      </StepLabelContainer>
    </RootListItem>
  );
};
