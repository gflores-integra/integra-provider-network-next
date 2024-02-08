import styled from "styled-components";

const Container = styled.div`
  gap: 32px;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  height: 100vh;

  /* 
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  } */
`;

const Content = styled.div`
  gap: 32px;
  /* max-width: 100%; */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  width: 400px;
  height: 480px;

  border-radius: 8px;
  border: 1px solid #d1d1d1;

  background: var(--Fondo-2, #f8f7f7);
  box-shadow: 0px 4px 4px 0px #d1d1d1;
  /* 
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  } */
`;

export { Container, Content };
