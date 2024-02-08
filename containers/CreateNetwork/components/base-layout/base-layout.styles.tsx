import styled from "styled-components";
import { FormikField } from "@/shared/FormikField";
import { Heading } from "@/styles";
import { MEDIA_QUERIES } from "@/styles";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  /* flex: 1; */
  overflow-y: auto;
`;

const Title = styled(Heading)`
  font-size: 1.125rem;
  font-weight: 500;
  margin-bottom: 1rem;

  @media ${MEDIA_QUERIES.sm} {
    margin-bottom: 2rem;
  }
`;

const InputContainer = styled.div`
  margin: 0 0 1.625rem 0;

  @media ${MEDIA_QUERIES.sm} {
    margin: 0.5rem 0 2rem 0;
  }
`;

const InputText = styled(FormikField)``;

const SkipButton = styled.a`
  align-items: center;
  background: ${({ theme }) => theme.grayscale.gray6};
  border-radius: 0.75rem;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.green50};
  display: flex;
  font-weight: 500;
  height: 2.25rem;
  justify-content: center;
  margin: 0 0 1.5rem 0;
  padding: 0.5rem 1rem;
  text-decoration: none;
  width: 100%;

  @media ${MEDIA_QUERIES.sm} {
    margin: 2.875rem 0 -1.625rem 0;
  }
`;

const CheckboxContainer = styled.div`
  margin-top: 1rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 1rem 0 1rem;
  width: 95%;

  @media ${MEDIA_QUERIES.sm} {
    height: auto;
    min-height: 31.875rem;
    padding: 0;
  }
`;

const ProgressBarContainer = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? "block" : "none")};
  border-radius: 0.625rem;
  background-color: ${({ theme }) => theme.grayscale.gray6};
  height: 0.5rem;
  margin-bottom: 1.25rem;
  width: 100%;

  @media ${MEDIA_QUERIES.sm} {
    margin-bottom: 18px;
  }
`;

const Progress = styled.div<{ width: number }>`
  background-color: "red";
  border-radius: inherit;
  height: 100%;
  width: ${({ width }) => `${width}%`};
`;

export {
  Container,
  CheckboxContainer,
  Content,
  InputContainer,
  InputText,
  SkipButton,
  Title,
  ProgressBarContainer,
  Progress,
};
