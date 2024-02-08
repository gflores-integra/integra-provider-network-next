import styled from "styled-components";

const Container = styled.header`
  background-color: white; /* Fondo blanco */
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: Monserrat, sans-serif;
  padding: 4% 1% 4%;
  justify-content: center;
  align-items: center;
  height: 500px;

  @media (min-width: 768px) {
    padding: 3% 6% 3%;
    margin: 0;
    align-items: center;
    justify-content: center;
  }
`;

const Navigation = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    padding: 0;
  }
`;

const MobileNavigation = styled.nav`
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
  position: relative;

  @media (min-width: 768px) {
    display: none;
  }
`;

export { Container, MobileNavigation, Navigation };
