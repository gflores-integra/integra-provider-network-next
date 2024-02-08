import { useFormikContext } from "formik";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface CustomRadioProps {
  isMandatory?: boolean;
}

interface CustomCheckboxProps {
  isMandatory?: boolean;
  path?: string; // Para la versión editable
  children?: React.ReactNode;
}

const RadioContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RadioInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border: 1px solid #ccc;
  border-radius: 50%;
  outline: none;
  box-shadow: 0 0 0 2px white inset;
  border-color: black;

  &:checked {
    border-color: black;
    background-color: ${({ theme }) => theme.grayscale.gray1};
  }
`;

const CustomCheckbox: React.FC<CustomCheckboxProps> & {
  Original: React.FC<{ isMandatory?: boolean }>;
  Editable: React.FC<{ path: string }>;
} = ({ children, ...props }) => {
  return <RadioContainer>{children}</RadioContainer>;
};

CustomCheckbox.Original = ({ isMandatory }) => {
  return (
    <RadioInput
      type="checkbox"
      checked={!!isMandatory}
      onChange={() => {}}
      disabled={isMandatory !== undefined}
    />
  );
};

CustomCheckbox.Editable = ({ path }) => {
  const { values, setFieldValue } = useFormikContext();

  // Usar el valor de Formik para el estado inicial
  const [checked, setChecked] = useState(!!values[path]);

  useEffect(() => {
    // Sincronizar con cambios en el estado de Formik
    setChecked(!!values[path]);
  }, [values, path]);

  const handleChange = (e) => {
    // Cambiar el estado local
    setChecked(e.target.checked);

    // Actualizar el estado de Formik
    setFieldValue(path, e.target.checked);
  };

  return (
    <RadioInput
      type="checkbox"
      checked={checked}
      onChange={handleChange}
      disabled={false}
    />
  );
};

export { CustomCheckbox };
