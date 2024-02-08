import styled from "styled-components";
import { FormikField } from "@/shared/FormikField";
import { Heading } from "@/styles";
import { MEDIA_QUERIES } from "@/styles";
import DeleteButtonImage from "@/styles/assets/icons/delete_button.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 6rem 1rem 0 1rem;
`;

const ContainerTitle = styled.div`
  display: flex;
  padding: 1rem 1rem 1rem 1rem;
  align-items: center;
`;

const DeleteButton = styled.div`
  align-content: center;
  align-items: center;
  color: ${({ theme }) => theme.red60};
  display: flex;
  padding: 1rem 1rem 1rem 1rem;
  justify-content: flex-end;
  width: 100%;
`;
const ContainerImage = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.7rem;
  border: 1px solid gray;
  align-items: center;
  align-content: center;
  border-radius: 8px;
  width: 105px;
`;

const NavigationMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const NavigationMenuText = styled.h1`
  -webkit-font-smoothing: antialiased;
  display: flex;
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  width: 100%;
  color: ${({ theme }) => theme.grayscale.gray7};
  display: inline-flex;

  span {
    font-weight: 800;
    margin: 0 5px 0 5px;
  }
`;

const Title = styled(Heading)`
  font-size: 1.125rem;
  font-weight: 500;
  margin-bottom: 0;
  margin-left: 30px;

  @media ${MEDIA_QUERIES.sm} {
    margin-bottom: 0.75rem;
  }
`;

const InputContainer = styled.div`
  margin: 0 0 1.625rem 0;

  @media ${MEDIA_QUERIES.sm} {
    margin: 0rem 0 1rem 0;
  }
`;

const InputText = styled(FormikField)``;
const InputTextArea = styled(FormikField)`
  height: 63px;
`;

const CheckboxContainer = styled.div`
  margin: 1rem 0 5rem 0;
`;

const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-end;
`;

const ContentButton = styled.div`
  width: 320px;
  padding: 8px;
`;

export {
  CheckboxContainer,
  Container,
  ContainerButton,
  ContainerImage,
  ContentButton,
  DeleteButton,
  DeleteButtonImage,
  InputContainer,
  InputText,
  InputTextArea,
  NavigationMenu,
  NavigationMenuText,
  Title,
  ContainerTitle,
};
