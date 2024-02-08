import Link from "next/link";
import styled from "styled-components";

const Container = styled.footer`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-gap: 1rem;
  align-items: center;
  padding: 1rem;
  background-color: black;
  color: white;

  @media (max-width: 768px) {
    grid-template-columns: auto;
    grid-template-rows: auto;
    text-align: center;
  }
`;

const Logo = styled.img`
  max-width: 100px;
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  justify-content: center;
`;

const MiddleSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const ContentCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const Image = styled.img`
  width: 88px;
  height: 31px;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`;

const LinkItem = styled(Link)`
  text-decoration: none;
  color: white;
  margin-bottom: 0.5rem;
`;

const RightText = styled.p`
  margin: 0;

  @media (max-width: 768px) {
    grid-row: 3;
  }
`;

const AdditionalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: black;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LeftText = styled.p`
  margin: 0;
  @media (min-width: 768px) {
    margin-bottom: 5px;
  }
`;

const RightTextDesktop = styled.p`
  margin: 0;
`;

export {
  AdditionalContainer,
  ContentCards,
  Container,
  Image,
  LeftText,
  LinkItem,
  LinksContainer,
  Logo,
  LogoLink,
  MiddleSection,
  RightText,
  RightTextDesktop,
};
