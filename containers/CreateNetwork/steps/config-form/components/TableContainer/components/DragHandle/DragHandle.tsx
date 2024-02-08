import React from "react";
import styled from "styled-components";

const HandleWrapper = styled.div`
  height: 1rem;
  vertical-align: bottom;
  display: inline-block;
  margin-right: 0.5rem;
  svg {
    width: 24px;
    height: 24px;
  }
  cursor: ${({ isDragging }) => (isDragging ? "grabbing" : "grab")};
`;

const DragHandle = (props) => {
  return (
    <HandleWrapper {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="6"
        viewBox="0 0 16 6"
        fill="none"
      >
        <path d="M0 0H16V2H0V0ZM0 4H16V6H0V4Z" fill="#333333" />
      </svg>
    </HandleWrapper>
  );
};

export { DragHandle };
