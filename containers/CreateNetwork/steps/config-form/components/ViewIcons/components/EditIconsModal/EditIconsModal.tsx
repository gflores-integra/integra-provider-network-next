import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Icon } from "@/styles/icons/src/components/icon";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;

const ModalContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  min-width: 300px;
  min-height: 35%;
  position: relative;
`;

const IconList = styled.ul`
  list-style: none;
  padding: 0;
`;

const IconListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-weight: 600;
`;

const StyledCheckbox = styled.div<{ checked: boolean }>`
  width: 18px;
  height: 18px;
  border: 2px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 10px;

  &:after {
    content: "${({ checked }) => (checked ? "✔" : "")}";
    color: black;
    font-size: 14px;
  }
`;

const SaveText = styled.span`
  cursor: pointer;
  text-decoration: underline;
  color: ${({ theme }) => theme.blue10};

  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 14px;
  font-weight: 600;
`;

const IconContent = styled(Icon).attrs(({ theme }) => ({
  fill: theme.grayscale.white,
}))`
  margin-right: 10px;
`;

const IconLabel = styled.span<{ labelColor: string }>`
  color: ${({ labelColor }) => labelColor};
`;

const availableIcons = [
  { value: "ViewCac", label: "CAC", labelColor: "#BC3914" },
  { value: "ViewFinanzas", label: "Finanzas", labelColor: "#22A9C5" },
  { value: "ViewApp", label: "APP", labelColor: "#78D886" },
];

const EditIconsModal: React.FC<EditIconsModalProps> = ({
  path,
  initialSelection,
  onClose,
  onSave,
}) => {
  const [selectedIcons, setSelectedIcons] =
    useState<Record<string, boolean>>(initialSelection);

  useEffect(() => {
    setSelectedIcons(initialSelection);
  }, [initialSelection]);

  const handleIconToggle = (iconValue: string) => {
    setSelectedIcons((prev) => ({ ...prev, [iconValue]: !prev[iconValue] }));
  };

  const handleSelectAllToggle = () => {
    const areAllSelected = availableIcons.every(
      (icon) => selectedIcons[icon.value]
    );
    const newSelection = availableIcons.reduce((acc, icon) => {
      acc[icon.value] = !areAllSelected; // Si todos están seleccionados, deselecciona todos, y viceversa
      return acc;
    }, {} as Record<string, boolean>);
    setSelectedIcons(newSelection);
  };

  const handleSave = () => {
    onSave(selectedIcons);
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <IconList>
          <IconListItem>
            <StyledCheckbox
              checked={availableIcons.every(
                (icon) => selectedIcons[icon.value]
              )}
              onClick={handleSelectAllToggle}
            />
            Seleccionar Todos
          </IconListItem>
          {availableIcons.map((icon) => (
            <IconListItem key={icon.value}>
              <StyledCheckbox
                checked={selectedIcons[icon.value]}
                onClick={() => handleIconToggle(icon.value)}
              />
              <IconContent name={icon.value} width="32px" height="32px" />
              <IconLabel labelColor={icon.labelColor}>{icon.label}</IconLabel>
            </IconListItem>
          ))}
        </IconList>
        <SaveText onClick={handleSave}>Guardar</SaveText>
      </ModalContainer>
    </ModalOverlay>
  );
};

export { EditIconsModal };
