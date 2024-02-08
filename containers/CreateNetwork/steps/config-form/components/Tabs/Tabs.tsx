import React, { useState } from "react";
import styled, { css } from "styled-components";

const TabContainer = styled.div``;

const activeTabStyle = css`
  background-color: #0a216f; /* Fondo azul cuando está activo */
  color: white; /* Texto blanco cuando está activo */
`;

const TabButton = styled.button`
  /* Estilos base para todos los botones */
  cursor: pointer;
  border: none;
  padding: 10px;
  margin: 5px;
  transition: background-color 0.3s;

  /* Estilos condicionales basados en la prop 'active' */
  ${({ active }) => active && activeTabStyle}

  &:focus {
    outline: none;
  }
`;

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <TabContainer>
      <TabButton active={activeTab === 0} onClick={() => setActiveTab(0)}>
        Datos obligatorios
      </TabButton>
      <TabButton active={activeTab === 1} onClick={() => setActiveTab(1)}>
        Datos específicos
      </TabButton>
      {children[activeTab]}
    </TabContainer>
  );
};

export { Tabs };
