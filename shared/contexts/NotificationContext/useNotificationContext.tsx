import { useContext } from "react";
import { NotificationContext } from "./NotificationContext";

import {
  ERROR_OPTIONS,
  ERROR_CODE_OPTIONS,
  SUCCESS_OPTIONS,
  TALON_OPTIONS,
} from "./NotificationContext.constants";
import { NotificationProps } from "./NotificationContext.types";

function useNotificationContext() {
  const { setNotification } = useContext(NotificationContext);

  const showError = ({ title, message, ...otherProps }: NotificationProps) => {
    setNotification({
      type: "error",
      platform: "local",
      title,
      message,
      options: {
        ...ERROR_OPTIONS,
        ...otherProps,
      },
    });
  };

  const showErrorCode = ({
    title,
    message,
    ...otherProps
  }: NotificationProps) => {
    setNotification({
      type: "errorCode",
      platform: "local",
      title,
      message,
      options: {
        ...ERROR_CODE_OPTIONS,
        ...otherProps,
      },
    });
  };

  const showSuccess = ({
    image,
    title,
    message,
    ...otherProps
  }: NotificationProps) => {
    setNotification({
      type: "success",
      platform: "local",
      image,
      title,
      message,
      options: {
        ...SUCCESS_OPTIONS,
        ...otherProps,
      },
    });
  };

  const showCustomAlert = ({
    type,
    title,
    message,
    ...otherProps
  }: NotificationProps) => {
    setNotification({
      type,
      platform: "custom",
      title,
      message,
      options: {
        ...TALON_OPTIONS,
        ...otherProps,
      },
    });
  };

  return { showError, showErrorCode, showSuccess, showCustomAlert };
}

export { useNotificationContext };
