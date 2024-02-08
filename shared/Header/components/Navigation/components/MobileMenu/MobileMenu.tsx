import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

const MobileMenuButton = styled.div<{ isOpen: boolean }>`
  background-color: ${({ isOpen }) =>
    isOpen ? "white" : "rgba(0, 0, 0, 0.1)"};

  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border-radius: 50%;
  padding: 12px;
  z-index: 2;
`;

const MobileMenuButtonBar = styled.div`
  width: 30px;
  height: 4px;
  background-color: ${({ theme }) => theme.grayscale.white};
`;

const ArrowIcon = styled.span<{ isOpen: boolean }>`
  display: inline-block;
  margin-left: 6px;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.3s ease;
`;

const Sidebar = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  width: 80%;
  height: 100%;
  background-color: rgb(0, 28, 113);
  color: white;
  transition: right 0.3s ease;
  display: flex;
  flex-direction: column;
  z-index: 3;
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${({ isOpen }) =>
    isOpen ? "rgba(0, 0, 0, 0.5)" : "transparent"};
  z-index: 2;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

const LogoContainer = styled.div`
  align-items: center;
  align-items: center;
  background-color: white;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Logo = styled.img`
  max-height: 70px;
`;

const NavLink = styled(Link)`
  display: block;
  padding: 20px;
  text-decoration: none;
  color: white;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  text-decoration: none;
  font-size: 14px;
  line-height: 1.5;
`;

const SubMenuNavLink = styled(NavLink)`
  display: block;
  padding: 20px;
  text-decoration: none;
  color: rgb(0, 28, 113);
  border-bottom: solid 1px rgb(0, 28, 113);
  width: 100%;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  text-decoration: none;
  font-size: 14px;
  line-height: 1.5;
`;

const MobileServiceLink = styled.div<{ isServicesActive: boolean }>`
  display: block;
  padding: 20px;
  background-color: ${({ isServicesActive }) =>
    isServicesActive ? "white" : "transparent"};
  color: ${({ isServicesActive }) =>
    isServicesActive ? "rgb(0, 28, 113);" : "white"};
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
`;

const SubMenu = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  background-color: white;
  padding: 0px 0px 0px 2px;
`;

function MobileMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <>
      <Overlay
        isOpen={mobileMenuOpen}
        onClick={() => setMobileMenuOpen(false)}
      />
      <Sidebar isOpen={mobileMenuOpen}>
        <LogoContainer>
          <Logo
            src="https://www.integra-salud.mx/Plantilla/wp-content/uploads/2021/01/color_horiz.png"
            alt="Logo"
          />
        </LogoContainer>
        <NavLink href="/providers-network">Red de proveedores</NavLink>
        <NavLink href="/about">Nosotros</NavLink>

        <MobileServiceLink
          isServicesActive={subMenuOpen}
          onClick={() => setSubMenuOpen(!subMenuOpen)}
        >
          Servicios
        </MobileServiceLink>
        <SubMenu isOpen={subMenuOpen}>
          <SubMenuNavLink href="/services/membership-integra-salud">
            Membresia Integra Salud
          </SubMenuNavLink>
          <SubMenuNavLink href="/services/integra-protects">
            Integra Protege
          </SubMenuNavLink>
          <SubMenuNavLink href="/services/service-administration">
            Administración de Servicios
          </SubMenuNavLink>
          <SubMenuNavLink href="/services/medical-assistance">
            Asistencias Médicas
          </SubMenuNavLink>
          <SubMenuNavLink href="/services/prevention-and-wellbeing">
            Prevención y Bienestar
          </SubMenuNavLink>
          <SubMenuNavLink href="/services/occupational-health">
            Salud Ocupacional
          </SubMenuNavLink>
          <SubMenuNavLink href="/services/covid-services">
            Servicios COVID
          </SubMenuNavLink>
        </SubMenu>
        <NavLink href="/agreements">Convenios</NavLink>
        <NavLink href="/video-consultations">Videoconsultas</NavLink>
        <NavLink href="/contact">Contacto</NavLink>
        <NavLink href="/blog">Blog</NavLink>
      </Sidebar>
    </>
  );
}

export { MobileMenu };
