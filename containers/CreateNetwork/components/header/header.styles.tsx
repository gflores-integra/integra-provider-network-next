import styled from "styled-components";
import { Icon, Heading, MEDIA_QUERIES } from "@/styles";

const Container = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? "flex" : "none")};
  align-items: center;
  height: 4rem;
  margin-bottom: 1rem;

  @media ${MEDIA_QUERIES.sm} {
    height: auto;
    margin-bottom: 2rem;
  }
`;

const Title = styled(Heading)`
  font-weight: 500;
  font-size: 1.25rem;
`;

const ArrowContainer = styled.div`
  background-color: transparent;
  align-items: center;
  border-radius: 6.25rem;
  display: flex;
  justify-content: center;
  margin-right: 0.6875rem;
  padding: 0.25rem;
`;

const ArrowIcon = styled(Icon).attrs(({ theme }) => ({
  fill: theme.grayscale.white,
}))`
  cursor: pointer;
  height: 1.5rem;
  transform: rotate(90deg);
  width: 1.5rem;
`;

export { ArrowIcon, ArrowContainer, Container, Title };
