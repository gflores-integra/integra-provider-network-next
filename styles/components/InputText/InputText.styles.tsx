import styled, { css } from "styled-components";
import { InputTextProps } from "./InputText.d";
import { FormCaption } from "../FormCaption";
import { FormLabel } from "../FormLabel";

const variantError = css`
  border: 1px solid red;
`;

const variantSuccess = css`
  border: 1px solid ${({ theme }) => theme.status.success};
`;

const variantActive = css`
  border: 1px solid ${({ theme }) => theme.grayscale.gray3};
`;

const GroupForm = styled.div``;

const Label = styled(FormLabel)`
  margin-bottom: 0.25rem;
`;

const Input = styled.input<InputTextProps>`
  flex: 1;
  border: none;
  appearance: none;
  box-sizing: border-box;
  font-weight: 100;
  color: ${({ theme }) => theme.grayscale.gray2};
  padding: 0px 0.5rem;
  transition: all 0.3s ease;
  width: 100%;
  font-family: Sailec;

  ::placeholder {
    color: ${({ theme }) => theme.grayscale.gray7};
  }
  :focus {
    outline: none;
    background-color: transparent;
  }
`;

const InputContainer = styled.div`
  display: flex;
`;

const variantDisabled = css`
  background: ${({ theme }) => theme.grayscale.gray6};
  cursor: not-allowed;

  ${Input} {
    color: ${({ theme }) => theme.grayscale.gray3};
    cursor: not-allowed;
  }
`;

const Content = styled.div<InputTextProps>`
  align-items: center;
  background: ${({ theme }) => theme.grayscale.white};
  border-radius: 10px;
  display: flex;
  padding: 0.5rem;
  border: 1px solid
    ${({ theme, borderColor }) =>
      borderColor ? borderColor : theme.grayscale.gray5};
  width: 100%;

  ${({ state }) => state === "error" && variantError}
  ${({ state }) => state === "success" && variantSuccess}
  ${({ state }) => state === "active" && variantActive}
  ${({ disabled }) => disabled && variantDisabled}
`;

const Caption = styled(FormCaption)`
  margin-top: 0.25rem;
`;

export { Input, InputContainer, GroupForm, Label, Caption, Content };
