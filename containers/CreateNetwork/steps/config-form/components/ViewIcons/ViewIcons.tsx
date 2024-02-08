import React, { useState } from "react";
import styled from "styled-components";
import { useFormikContext } from "formik";

import { EditIconsModal } from "./components/EditIconsModal";
import { Icon } from "@/styles/icons/src/components/icon";

const Container = styled.div`
  border: none;
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: 70px;
  padding: 5%;
  border: 1px solid #cfcfcf;
`;

const AddTabContainer = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: flex-end;
  position: relative;
`;

const AddTabText = styled.div`
  padding: 5px 10px;
  border-bottom: none;
  border: 1px solid #cfcfcf;
  font-size: 12px;
  display: flex;
  align-items: center;
  position: absolute;

  top: -28px;
  right: 0;
  background-color: white;

  border-bottom: none;
`;

const IconContent = styled(Icon).attrs(({ theme }) => ({
  fill: theme.grayscale.white,
}))`
  margin-right: 10px;
`;

const AddIcon = styled(Icon).attrs(({ theme }) => ({}))``;

const ViewIcons = ({ viewProps = {}, path, isEditable = false }) => {
  const { setFieldValue } = useFormikContext();
  const combinedProps = { ...viewProps };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const hasIcons = Object.values(combinedProps).some((value) => value);

  const handleAddClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Container>
        {(!hasIcons || isEditable) && (
          <AddTabContainer onClick={handleAddClick}>
            <AddTabText>
              {" "}
              <AddIcon name="AddIcon" width="16px" height="16px" />
              Añadir
            </AddTabText>
          </AddTabContainer>
        )}
        <IconsContainer>
          {Object.entries(combinedProps).map(([key, value]) => {
            if (value) {
              return <IconContent name={key} width="32px" height="32px" />;
            }
            return null;
          })}
        </IconsContainer>
      </Container>
      {isModalOpen && (
        <EditIconsModal
          path={path}
          initialSelection={viewProps}
          onClose={() => setIsModalOpen(false)}
          onSave={(newSelection) => {
            setFieldValue(path, newSelection);
            setIsModalOpen(false);
          }}
        />
      )}
    </>
  );
};

export { ViewIcons };
