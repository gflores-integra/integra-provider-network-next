import React from "react";
import * as Styled from "./DesktopMenu.styles";

function DesktopMenu() {
  return <DesktopMenuContainer />;
}

function DesktopMenuContainer() {
  return (
    <Styled.Container>
      <Styled.NavLinkWrapper>
        <Styled.NavLink href="/about">
          <Styled.NavText>NOSOTROS</Styled.NavText>
          <Styled.AnimatedLine />
        </Styled.NavLink>
      </Styled.NavLinkWrapper>
      <Styled.Services>
        <Styled.ServicesDesktopLink href="/services">
          SERVICIOS
          <Styled.AnimatedLine />
        </Styled.ServicesDesktopLink>
        <Styled.Dropdown>
          <Styled.DropdownLink href="/services/membership-integra-salud">
            Membresía Integra Salud
          </Styled.DropdownLink>
          <Styled.DropdownLink href="/services/integra-protects">
            Integra Protege
          </Styled.DropdownLink>
          <Styled.DropdownLink href="/services/service-administration">
            Administración de Servicios
          </Styled.DropdownLink>
          <Styled.DropdownLink href="/services/medical-assistance">
            Asistencias Médicas
          </Styled.DropdownLink>
          <Styled.DropdownLink href="/services/prevention-and-wellbeing">
            Prevención y Bienestar
          </Styled.DropdownLink>
          <Styled.DropdownLink href="/services/occupational-health">
            Salud Ocupacional
          </Styled.DropdownLink>
          <Styled.DropdownLink href="/services/covid-services">
            Servicios COVID
          </Styled.DropdownLink>
        </Styled.Dropdown>
      </Styled.Services>
      <Styled.NavLinkWrapper>
        <Styled.NavLink href="/providers-network">
          <Styled.NavText>RED DE PROVEEDORES</Styled.NavText>
          <Styled.AnimatedLine />
        </Styled.NavLink>
      </Styled.NavLinkWrapper>
      <Styled.NavLinkWrapper>
        <Styled.NavLink href="/video-consultations">
          <Styled.NavText>VIDEOCONSULTAS</Styled.NavText>
          <Styled.AnimatedLine />
        </Styled.NavLink>
      </Styled.NavLinkWrapper>
      <Styled.NavLinkWrapper>
        <Styled.NavLink href="/agreements">
          <Styled.NavText>CONVENIOS</Styled.NavText>
          <Styled.AnimatedLine />
        </Styled.NavLink>
      </Styled.NavLinkWrapper>
      <Styled.NavLinkWrapper>
        <Styled.NavLink href="/blog">
          <Styled.NavText>BLOG</Styled.NavText>
          <Styled.AnimatedLine />
        </Styled.NavLink>
      </Styled.NavLinkWrapper>
      <Styled.NavLinkWrapper>
        <Styled.NavLink href="/contact">
          <Styled.NavText>CONTÁCTANOS</Styled.NavText>
          <Styled.AnimatedLine />
        </Styled.NavLink>
      </Styled.NavLinkWrapper>
    </Styled.Container>
  );
}

export { DesktopMenu };
