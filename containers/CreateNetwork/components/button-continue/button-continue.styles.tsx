import styled from "styled-components";
import { Button as UiButton } from "@/styles";
import { MEDIA_QUERIES } from "@/styles";

const ButtonContainer = styled.div`
  margin-top: auto;
  width: 100%;
`;

const Button = styled(UiButton)`
  margin: 0 0 8% 0;
  width: 100%;

  @media ${MEDIA_QUERIES.sm} {
    margin: 2.875rem 0 0 0;
  }
`;

export { ButtonContainer, Button };
