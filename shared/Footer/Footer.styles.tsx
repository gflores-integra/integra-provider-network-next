import styled, { css } from "styled-components";
import Link from "next/link";

const boldStyles = css`
  font-weight: bold;
`;

const FooterContainer = styled.footer`
  background-color: rgb(0, 28, 113);
  display: flex;
  align-items: center;
  text-decoration: none;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    max-width: 1200px;
    width: 100%;
    align-items: flex-start;
  }
`;

const ImagesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: column;
    width: 30%;
    padding: 2%;
  }
`;

const Logo = styled.img`
  max-width: 100%;
  max-height: 100px;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 1rem;
  }
`;

const GreatPlaceToWorkImage = styled.img`
  max-width: 100%;
  max-height: 160px;
`;

const ImageLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  justify-content: center;

  &:hover {
    opacity: 0.7;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    /* align-items: center; */
  }
`;

const LinksSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 2%;
`;

const LinksSectionTitle = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  font-size: 1.3125em;
  margin: 0;
  line-height: 2.2rem;
  text-align: center;

  @media (min-width: 768px) {
    text-align: start;
  }
`;

const linkStyles = css<{ bold?: boolean }>`
  text-decoration: none;
  color: white;
  margin-bottom: 10px;
  ${(props) => props.bold && boldStyles};
`;

const LinkItem = styled(Link)<{ bold?: boolean }>`
  ${linkStyles};
`;

const LinkItemRedirect = styled.a<{ bold?: boolean }>`
  ${linkStyles};

  &:hover {
    color: #00abc8;
  }
`;

const TextItem = styled.span`
  color: white;
  margin-bottom: 0.2rem;
  cursor: default;
`;

const BoldLinkItem = styled(Link)`
  text-decoration: none;
  color: white;
  margin-bottom: 0.2rem;
  font-weight: bold;
`;

const BoldTextItem = styled.span`
  color: white;
  margin-bottom: 0.2rem;
  cursor: default;
  font-weight: bold;
`;

export {
  BoldLinkItem,
  BoldTextItem,
  Container,
  FooterContainer,
  GreatPlaceToWorkImage,
  ImageLink,
  ImagesContainer,
  LinkItem,
  LinkItemRedirect,
  LinksContainer,
  LinksSection,
  LinksSectionTitle,
  Logo,
  TextItem,
};
