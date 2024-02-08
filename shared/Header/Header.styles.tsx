import styled from "styled-components";
import Link from "next/link";

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
  padding: 4px;

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

export { HeaderContainer, HeaderSection, Logo, LogoLink };
