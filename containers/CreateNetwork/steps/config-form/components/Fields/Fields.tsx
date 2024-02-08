import React from "react";
import { useFormikContext } from "formik";
import styled from "styled-components";
import { FormikField } from "@/shared/FormikField";

const FieldsContainer = styled.div``;

const InputContainer = styled.div`
  margin-bottom: 0.5rem;
`;

interface FieldsProps {
  fieldNames: string[];
  path: string;
}

const Fields: React.FC<FieldsProps> = ({ fieldNames, path }) => {
  const { values, handleChange, touched, errors } = useFormikContext();
  console.log({ values });
  return (
    <FieldsContainer>
      {fieldNames.map((name, index) => {
        const fieldName = `${path}.${name}`; // Construimos el nombre correcto
        return (
          <InputContainer key={index}>
            <FormikField
              label=""
              name={fieldName}
              placeholder={name}
              value={name}
              onChange={handleChange}
              touched={touched[fieldName]}
              errors={errors[fieldName]}
            />
          </InputContainer>
        );
      })}
    </FieldsContainer>
  );
};

export { Fields };
