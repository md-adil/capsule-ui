import { type FC } from "react";
import { type StaticProps } from "../../types.js";
import { CountContainer, RootListItem, StepSubheading, StepLabelContainer } from "../vertical-step/styled-component.js";
import { IconContainer, StepLabel, Connector } from "./styled-component.js";

import { Text } from "../../../typography/index.js";
import { BLACK, DEFAULT_COLOR } from "../../utils.js";

export const StaticStep: FC<StaticProps> = ({ label, index, body = " ", icon }) => {
  return (
    <RootListItem>
      <CountContainer>
        {index !== 2 && <Connector expand={body.length > 50} />}
        <IconContainer>{icon}</IconContainer>
      </CountContainer>
      <StepLabelContainer>
        <Text variant="body-1" color={BLACK}>
          <StepLabel>{label}</StepLabel>
        </Text>
        <Text variant="label-1" color={DEFAULT_COLOR}>
          {typeof label === "string" ? <StepSubheading>{body}</StepSubheading> : body}
        </Text>
      </StepLabelContainer>
    </RootListItem>
  );
};
