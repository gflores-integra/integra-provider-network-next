import React, { useState } from "react";
import { useFormikContext } from "formik";
import styled from "styled-components";
import { Icon } from "@/styles/icons/src/components/icon";
import { FormikField } from "@/shared/FormikField";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  height: 100%;
  min-height: 150px;
`;

const EmptyContainer = styled.div`
  display: flex;
  align-items: stretch;
  width: 100%;
  flex-grow: 1;
`;

const EmptyContent = styled.div`
  width: 30px;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  border-left: 1px solid #000;
  margin: 9px 11px 14px 0px;
  flex-grow: 1;
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

const GroupNameText = styled.span`
  cursor: text;
  &:hover {
    text-decoration: underline;
  }
`;

interface GroupFieldProps {
  index: number;
  editingGroupIndex: number | null;
  setEditingGroupIndex: (index: number | null) => void;
  handleAddField: (index: number) => void;
  handleGroupNameChange: (e: React.ChangeEvent<any>, index: number) => void;
  handleGroupNameBlur: () => void;
}

const GroupField: React.FC<GroupFieldProps> = ({
  index,
  editingGroupIndex,
  setEditingGroupIndex,
  handleAddField,
  handleGroupNameChange,
  handleGroupNameBlur,
}) => {
  const { values, errors, touched } = useFormikContext<any>();
  const fieldName = `EditableTableData[${index}].grupo`;
  const numFields = values.EditableTableData[index]?.campo?.length || 0;

  if (numFields <= 1) {
    return null;
  }
  const [isEditing, setIsEditing] = useState(false);

  const handleTextClick = () => {
    setIsEditing(true);
    setEditingGroupIndex(index);
  };

  const customHandleGroupNameBlur = () => {
    handleGroupNameBlur();
    setIsEditing(false);
    setEditingGroupIndex(null);
  };

  return (
    <Container>
      {isEditing || !values[fieldName] ? (
        <FormikField
          name={fieldName}
          type="text"
          onChange={(e) => handleGroupNameChange(e, index)}
          onBlur={customHandleGroupNameBlur}
          autoFocus={editingGroupIndex === index}
        />
      ) : (
        <GroupNameText onClick={handleTextClick}>
          {values[fieldName]}
        </GroupNameText>
      )}
      <EmptyContainer>
        <EmptyContent />
      </EmptyContainer>
      <IconContainer>
        <IconContent
          onClick={() => handleAddField(index)}
          name="AddIcon"
          width="32px"
          height="32px"
        />
      </IconContainer>
      {touched[fieldName] && errors[fieldName] && (
        <div style={{ color: "red" }}>{errors[fieldName]}</div>
      )}
    </Container>
  );
};

export { GroupField };
