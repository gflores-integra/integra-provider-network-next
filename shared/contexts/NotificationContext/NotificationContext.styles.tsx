import styled, { css } from "styled-components";
import { ToastContainer } from "react-toastify";

const cssCommonStyles = css`
  min-width: 357px;
  .Toastify__toast-body p {
    :last-child {
      margin-top: 4px;
    }
    font-size: 14px;
  }
  .Toastify__zoom-enter {
    margin-right: 18px;
  }
`;

const SuccesContainer = styled(ToastContainer)`
  top: 130px;
  max-width: 357px;
  width: calc(100% - 20px);

  .Toastify__toast {
    min-height: 62px;
    border-radius: 10px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12),
      0px 1px 3px rgba(0, 0, 0, 0.2);
    background-color: ${({ theme }) => theme.grayscale.white};
    margin-left: auto;
    width: 100%;
    max-width: 357px;
  }

  .Toastify__toast-body {
    width: 100%;
  }

  --toastify-color-progress-light: var(--toastify-color-success);
`;

const ErrorContainer = styled(ToastContainer)`
  ${cssCommonStyles}
`;

const ErrorCodeContainer = styled(ToastContainer)`
  ${cssCommonStyles}
  top: 17%;

  .Toastify__close-button--light {
    color: ${({ theme }) => theme.grayscale.black};
    opacity: unset;
  }
`;

const CustomContainer = styled(ToastContainer)<{ isOffer: boolean }>`
  ${cssCommonStyles}
  .Toastify__toast-theme--light {
    background: ${({ theme, isOffer }) =>
      isOffer ? theme.brand.secondary : theme.text.secondary};
  }
  .Toastify__toast-icon svg {
    fill: ${({ theme, isOffer }) =>
      isOffer ? theme.text.secondary : theme.grayscale.white};
  }
  .Toastify__close-button--light {
    opacity: 1;
  }
  .Toastify__close-button > svg {
    fill: ${({ theme, isOffer }) =>
      isOffer ? theme.text.secondary : theme.grayscale.white};
  }
  .Toastify__close-button {
    align-self: ${({ isOffer }) => (isOffer ? "self-start" : "center")};
  }
  .Toastify__toast-body p {
    color: ${({ theme, isOffer }) =>
      isOffer ? theme.text.secondary : theme.grayscale.white};
  }
`;

export { SuccesContainer, ErrorContainer, ErrorCodeContainer, CustomContainer };
