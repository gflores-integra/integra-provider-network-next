import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/styles";
import Home from "@/styles/assets/icons/Home.svg";

const Sidebar = styled.div<{ isExpanded: boolean }>`
  width: ${({ isExpanded }) => (isExpanded ? "300px" : "50px")};
  top: 0;
  transition: width 0.3s ease;
  height: 100%;
  background-color: white;
  color: gray;
  display: flex;
  flex-direction: column;
  z-index: 3;

  @media (min-width: 768px) {
    width: ${({ isExpanded }) => (isExpanded ? "300px" : "50px")};
  }
`;

const LogoContainer = styled.div`
  align-items: flex-start;
  background-color: white;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const IconContent = styled(Icon)``;

const Logo = styled.img`
  max-height: 70px;
`;

const MenuContainer = styled.div`
  align-items: flex-start;
  background-color: white;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  flex-direction: column;
`;

const NavLink = styled(Link)`
  display: block;
  padding: 20px;
  text-decoration: none;
  color: gray;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  width: 100%;

  &:hover {
    background-color: blue;
    color: #fff;
  }
`;

function Menu() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <Sidebar isExpanded={isExpanded}>
      <LogoContainer>
        <Logo
          src="https://www.integra-salud.mx/Plantilla/wp-content/uploads/2021/01/color_horiz.png"
          alt="Logo"
        />
      </LogoContainer>
      <MenuContainer>
        <NavLink href="/providers-network">Red de proveedores</NavLink>
        <NavLink href="/board">
          Dashboard{" "}
          <IconContent name="DashboardIcon" width="20px" height="20px" />
        </NavLink>
      </MenuContainer>
    </Sidebar>
  );
}

export { Menu };
