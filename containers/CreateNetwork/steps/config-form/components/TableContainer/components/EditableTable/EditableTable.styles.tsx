import { Icon } from "@/styles/icons/src/components/icon";
import styled from "styled-components";

const AddElementButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  width: 100%;
  margin-bottom: 20px;
`;

const StyledDropdown = styled.div`
  position: absolute;
  right: 0;
  top: -60px;
  min-width: 200px;
  z-index: 3;
`;

const IconContainer = styled.div`
  display: flex;
  cursor: pointer;
`;

const IconContent = styled(Icon).attrs(({ theme }) => ({
  fill: theme.grayscale.white,
}))`
  margin-right: 10px;
`;

const StyledTd = styled.td`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100%;
`;

export {
  AddElementButtonContainer,
  StyledDropdown,
  IconContainer,
  IconContent,
  StyledTd,
};
