import React from "react";
import { NotificationCardProps } from "./NotificationCard.types";
import * as Styled from "./NotificationCard.styles";

function SuccessCard({ notification }: NotificationCardProps) {
  return (
    <Styled.NotificationContainer>
      <Styled.IconContainer>
        {notification.image ? (
          <Styled.ImageSucces src={notification.image} />
        ) : (
          <Styled.SuccessIcon name="Check" xWidth="24" xHeight="24" />
        )}
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

export { SuccessCard };
