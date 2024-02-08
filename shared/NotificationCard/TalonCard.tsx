import React from "react";
import { NotificationCardProps } from "./NotificationCard.types";
import * as Styled from "./NotificationCard.styles";

function TalonCard({ notification }: NotificationCardProps) {
  const { type, title, message } = notification;

  if (type === "Offer") {
    return (
      <Styled.NotificationContainer>
        <Styled.MainContent>
          <Styled.NotificationTitleOffer level="h5">
            {title}
          </Styled.NotificationTitleOffer>
          <Styled.NotificationContentOffer variant="body2">
            {message}
          </Styled.NotificationContentOffer>
        </Styled.MainContent>
      </Styled.NotificationContainer>
    );
  }

  return (
    <Styled.NotificationContainer>
      <Styled.IconContainer>
        {type === "Error" ? (
          <Styled.ErrorIcon name="Error" xHeight="20px" xWidth="20px" />
        ) : (
          <Styled.DefaultIcon name="InfoFilled" xHeight="20px" xWidth="20px" />
        )}
      </Styled.IconContainer>

      <Styled.MainContent>
        <Styled.NotificationTitle>{title}</Styled.NotificationTitle>
        <Styled.NotificationContent>{message}</Styled.NotificationContent>
      </Styled.MainContent>
    </Styled.NotificationContainer>
  );
}

export { TalonCard };
