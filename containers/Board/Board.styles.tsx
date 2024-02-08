import styled from "styled-components";
import Link from "next/link";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100vh;
  height: auto;
  object-fit: cover;
`;

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 8%;

  @media (min-width: 768px) {
    width: 50%;
    height: 100vh;
    margin: 0;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  color: black;
  flex-direction: column;
  padding: 2% 3% 2% 3%;

  @media (min-width: 768px) {
    padding: 0% 2% 1% 2%;
  }
`;

const ContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  color: black;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 2%;
  }
`;

const Title = styled.h1`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: Monserrat;
  font-weight: 800;
  font-size: 3rem;
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeSpeed;
  letter-spacing: 0;

  line-height: 1.2;

  @media (min-width: 768px) {
  }
`;

const Line = styled.div`
  width: 60%;
  height: 7px;
  background-color: black;
  opacity: 0.3;
  margin-bottom: 5px;
`;

const SubTitle = styled.div`
  width: 100%;
  display: flex;
  font-family: Monserrat;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 200;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizelegibility;
  font-size: 100%;
  line-height: 1.5;
  font-style: normal;
  font-family: "Montserrat", sans-serif;

  @media (min-width: 768px) {
  }
`;

const ContainerText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: black;
  padding: 5%;
  height: 371px;

  @media (min-width: 768px) {
    width: 405px;
    height: auto;
  }
`;

const ContainerImage = styled.div`
  flex-grow: 1;
  background-size: cover;
  background-position: center;
  height: 400px;
`;

const ContainerCentral = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
  }
`;

const CardContainerValues = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;

  @media (min-width: 768px) {
  }
`;

const NavLink = styled(Link)`
  display: block;
  padding: 20px;
  text-decoration: none;
  color: gray;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  text-decoration: none;
  font-size: 14px;
  line-height: 1.5;
`;

export {
  CardContainer,
  CardContainerValues,
  ContainerCentral,
  ContainerImage,
  ContainerText,
  ContainerTitle,
  SubTitle,
  Title,
  Container,
  ContentContainer,
  Image,
  ImageContainer,
  MainContent,
  NavLink,
};
