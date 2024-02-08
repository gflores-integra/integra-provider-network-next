import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderSection = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 26px 4px 4px 4px;
  border-radius: 44px;
  border-top: 2px solid #d1d1d1;
  border-right: 2px solid #d1d1d1;

  @media (min-width: 980px) {
    padding: 8px 16px;
  }
`;
const Logo = styled.img`
  max-height: 70px;
  padding: 2%;
`;

const LogoLink = styled.a`
  text-decoration: none;
`;

const Container = styled.header`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: Monserrat, sans-serif;
  /* padding: 4% 1% 4%; */
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    margin: 0;
    align-items: center;
    justify-content: center;
  }
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
  padding: 0.25rem 0.75rem;
  font-size: 16px;
  line-height: 1;
  /* background-color: ${({ theme }) => theme.grayscale.gray3}; */
  border: none;
  border-radius: 0;
  transition: box-shadow 0.15s ease-in-out;
  width: 100%;
  /* position: relative; */

  /* @media (min-width: 768px) {
    display: none;
  } */
`;

export {};

export {
  Container,
  HeaderContainer,
  HeaderSection,
  Logo,
  LogoLink,
  Navigation,
};
