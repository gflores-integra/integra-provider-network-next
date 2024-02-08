import React from "react";
import { useFormikContext } from "formik";
import styled from "styled-components";
import { FormikField } from "@/shared/FormikField";

const FieldsContainer = styled.div``;

const InputContainer = styled.div`
  margin-bottom: 0.5rem;
`;

interface FieldsEditableProps {
  fieldNames: string[];
  path: string;
}

const FieldsEditable: React.FC<FieldsEditableProps> = ({
  fieldNames,
  path,
}) => {
  const { setFieldValue, values } = useFormikContext();

  const handleFieldChange = (e, index) => {
    const updatedFields = [...fieldNames];
    updatedFields[index] = e.target.value;
    setFieldValue(path, updatedFields);
  };

  return (
    <FieldsContainer>
      {fieldNames.map((name, index) => {
        return (
          <InputContainer key={index}>
            <FormikField
              label=""
              name={`${path}[${index}]`}
              placeholder="Ingresa un valor"
              value={name}
              onChange={(e) => handleFieldChange(e, index)}
            />
          </InputContainer>
        );
      })}
    </FieldsContainer>
  );
};

export { FieldsEditable };
