import React from "react";

import { NotificationCardProps } from "./NotificationCard.types";
import * as Styled from "./NotificationCard.styles";

function ErrorCard({ notification }: NotificationCardProps) {
  return (
    <Styled.NotificationContainer>
      <Styled.IconContainer>
        <Styled.ErrorIcon name="Error" xHeight="20px" xWidth="20px" />
      </Styled.IconContainer>
      <Styled.MainContent>
        <Styled.NotificationTitle>
          {notification?.title}
        </Styled.NotificationTitle>
        <Styled.NotificationContent>
          {notification?.message}
        </Styled.NotificationContent>
      </Styled.MainContent>
    </Styled.NotificationContainer>
  );
}

export { ErrorCard };
