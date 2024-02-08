import React, { useState, useEffect } from "react";
import styled from "styled-components";

const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
  border: 1px solid #7fa8fa;
  border-radius: 4px;
  background-color: white;
`;

const DropdownButton = styled.div`
  padding: 8px 12px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 4px 4px;
  background-color: white;
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 1;
  max-height: 200px;
  overflow-y: auto;
`;

const DropdownItem = styled.li`
  padding: 8px 12px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.blue10};
    color: ${({ theme }) => theme.grayscale.white};
  }
`;

const Arrow = styled.span`
  border: solid black;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${({ isOpen }) => (isOpen ? "rotate(-135deg)" : "rotate(45deg)")};
  transition: transform 0.3s;
`;

const Dropdown = ({ options, selectedOption, onChange, disabled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(selectedOption);

  useEffect(() => {
    if (!selectedOption && options.length > 0) {
      setSelected(options[0]);
    }
  }, [selectedOption, options]);

  const handleSelect = (option) => {
    setSelected(option);
    onChange(option);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <DropdownButton
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
      >
        {selected}
        <Arrow isOpen={isOpen} />
      </DropdownButton>
      {isOpen && (
        <DropdownList>
          {options.map((option, index) => (
            <DropdownItem key={index} onClick={() => handleSelect(option)}>
              {option}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

export { Dropdown };
