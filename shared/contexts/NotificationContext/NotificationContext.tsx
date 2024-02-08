import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  ErrorCard,
  ErrorCodeCard,
  SuccessCard,
  TalonCard,
} from "@/shared/NotificationCard";

import { NotificationContextProps } from "./NotificationContext.types";
import * as Styled from "./NotificationContext.styles";

const NotificationContext = React.createContext({
  setNotification: (notification: {}) => {},
});

function NotificationProvider({ children }: NotificationContextProps) {
  const [notification, setNotification] = useState({
    type: "",
    platform: "local",
    title: "",
    message: "",
    image: "",
    options: {},
  });

  useEffect(() => {
    if (!notification?.title) return;

    const isLocal = ["local"].includes(notification.platform);

    if (!isLocal) {
      toast(<TalonCard notification={notification} />, notification.options);
      return;
    }

    if (notification?.type === "success") {
      toast(<SuccessCard notification={notification} />, notification.options);
    }

    if (notification?.type === "errorCode") {
      toast(
        <ErrorCodeCard notification={notification} />,
        notification.options
      );
    }

    if (notification?.type === "error") {
      toast.dark(
        <ErrorCard notification={notification} />,
        notification.options
      );
    }
  }, [notification]);

  const isOffer = notification?.type === "Offer";

  return (
    <NotificationContext.Provider value={{ setNotification }}>
      {children}
      <Styled.ErrorCodeContainer
        enableMultiContainer
        containerId="errorCodeToast"
      />
      <Styled.ErrorContainer enableMultiContainer containerId="errorToast" />
      <Styled.SuccesContainer enableMultiContainer containerId="succesToast" />
      <Styled.CustomContainer
        isOffer={isOffer}
        enableMultiContainer
        containerId="talonToast"
      />
    </NotificationContext.Provider>
  );
}

export { NotificationProvider, NotificationContext };
