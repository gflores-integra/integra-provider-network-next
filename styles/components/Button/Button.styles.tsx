import styled, { css, keyframes } from "styled-components";
import { ButtonProps } from "./Button.d";

const VariantPrimary = css`
  background-color: "yellow";
  color: ${({ theme }) => theme.grayscale.white};
  :hover:not(:disabled) {
    background: "green";
    cursor: pointer;
  }
  ${({ outline }: ButtonProps) =>
    outline &&
    css`
      background-color: transparent;
      color: ${({ theme }) => theme.brand.primary};
      border: 2px solid ${({ theme }) => theme.brand.primary};
      :hover:not(:disabled) {
        background-color: #2f6455;
        color: ${({ theme }) => theme.grayscale.white};
        border: 2px solid #2f6455;
      }
    `}
`;

const VariantSecondary = css`
  background: ${({ theme }) => theme.blue90};

  color: ${({ theme }) => theme.grayscale.white};
  :hover:not(:disabled) {
    background: "gray";
  }
`;

const VariantTerciary = css`
  background: ${({ theme }) => theme.grayscale.gray6};
  color: ${({ theme }) => theme.grayscale.gray1};
  :hover:not(:disabled) {
    background: ${({ theme }) => theme.grayscale.gray5};
  }
`;

const VariantLoyalty = css`
  background: ${({ theme }) => theme.loyalty.goldDark};
  color: ${({ theme }) => theme.grayscale.white};
  :hover:not(:disabled) {
    background: #967429;
  }
`;

const VariantDisabled = css`
  color: ${({ theme }) => theme.grayscale.white};
  background-color: ${({ theme }) => theme.grayscale.gray7};
  cursor: not-allowed;
  ${({ outline }: ButtonProps) =>
    outline &&
    css`
      color: ${({ theme }) => theme.grayscale.gray7};
      border: 2px solid ${({ theme }) => theme.grayscale.gray2};
    `};
`;

const StyledButton = styled.button<ButtonProps>`
  font-family: Sailec;
  border-radius: 12px;
  font-size: 1rem;
  text-align: center;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  transition: all 0.3s ease-in-out;
  ${VariantPrimary};
  width: ${({ full }) => (full ? "100%" : "fit-content")};
  ${({ variant }) => variant === "secondary" && VariantSecondary}
  ${({ variant }) => variant === "terciary" && VariantTerciary}
  ${({ variant }) => variant === "loyalty" && VariantLoyalty}
  ${({ disabled }) => disabled && VariantDisabled}
`;

const spinner = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.div`
  border: 2px solid ${({ theme }) => theme.grayscale.gray5};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border-left-color: ${({ theme }) => theme.grayscale.gray4};
  animation: ${spinner} 1s ease infinite;
`;

export { StyledButton, StyledSpinner };
