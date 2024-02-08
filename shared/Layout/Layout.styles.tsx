import styled from "styled-components";
import Link from "next/link";

const Root = styled.div`
  background-color: ${({ theme }) => theme.grayscale.white};
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  width: 100%;
  min-height: calc(100vh - 50px);

  @media (min-width: 768px) {
    min-height: 100vh;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  width: 100%;

  @media (min-width: 768px) {
    min-height: 100vh;
  }
`;

const SiteTitle = styled.header`
  font-size: 3rem;
  color: gray;
  font-weight: 700;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
`;

const NavLinkItem = styled.li`
  padding-right: 2rem;
`;

const NavLinkText = styled(Link)`
  color: white;
`;

const Heading = styled.h1`
  color: rebeccapurple;
  height: 450px;
`;

const StyledButton = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  font-size: 16px;
  /* margin: 4px 2px; */
  cursor: pointer;
`;

export {
  Container,
  Heading,
  MainContent,
  NavLinkItem,
  NavLinks,
  NavLinkText,
  Root,
  SiteTitle,
  StyledButton,
};
