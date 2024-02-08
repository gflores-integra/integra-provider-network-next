import React from "react";
import { NotificationCardProps } from "./NotificationCard.types";
import * as Styled from "./NotificationCard.styles";

function ErrorCodeCard({ notification }: NotificationCardProps) {
  return (
    <Styled.NotificationContainer>
      <Styled.Border />
      <Styled.MainContent>
        <Styled.NotificationTitleErrorCode>
          {notification?.title}
        </Styled.NotificationTitleErrorCode>
        <Styled.NotificationContentErrorCode>
          {notification?.message}
        </Styled.NotificationContentErrorCode>
      </Styled.MainContent>
    </Styled.NotificationContainer>
  );
}

export { ErrorCodeCard };
