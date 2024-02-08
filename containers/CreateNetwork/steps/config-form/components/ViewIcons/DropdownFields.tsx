import React from "react";
import { useFormikContext } from "formik";
import { Dropdown } from "./components/EditIconsModal";

const DropdownFields = ({ parametros, path, options }) => {
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

export { DropdownFields };
