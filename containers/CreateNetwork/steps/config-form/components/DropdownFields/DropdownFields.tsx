import React, { useEffect } from "react";
import { useFormikContext } from "formik";
import { Dropdown } from "./components/Dropdown";

const DropdownFields = ({ children }) => {
  return <>{children}</>;
};

DropdownFields.Original = ({ parametros, path, options }) => {
  const { setFieldValue, values } = useFormikContext();

  const handleChange = (index, value) => {
    const fieldName = `${path}[${index}].selectedOption`;
    setFieldValue(fieldName, value);
  };

  return (
    <>
      {parametros.map((parametro, index) => {
        const isOptionFixed = options.includes(parametro);
        const selectedOption = isOptionFixed
          ? parametro
          : values[path] && values[path][index]
          ? values[path][index].selectedOption
          : undefined;

        return (
          <Dropdown
            key={index}
            options={options}
            selectedOption={selectedOption}
            onChange={(value) => handleChange(index, value)}
            disabled={isOptionFixed}
          />
        );
      })}
    </>
  );
};

DropdownFields.Editable = ({ path, options }) => {
  const { setFieldValue, values } = useFormikContext();

  useEffect(() => {
    if (values[path] === undefined) {
      setFieldValue(path, options[0]);
    }
  }, [path, options, setFieldValue, values]);

  const handleChange = (value) => {
    setFieldValue(path, value);
  };

  const selectedOption = values[path] || options[0]; // Usa el valor de Formik si está disponible, si no, usa el valor por defecto

  return (
    <Dropdown
      options={options}
      selectedOption={selectedOption}
      onChange={handleChange}
      disabled={false}
    />
  );
};

export { DropdownFields };
