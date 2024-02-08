import React from "react";
import PropTypes from "prop-types";
import { InputText } from "@/styles";
import { NumberFormatField } from "../NumberFormatField";
import { useField } from "formik";

function FormikField(props) {
  const { onChange } = props;
  const [field, meta] = useField(props);
  const Field = props.format ? NumberFormatField : InputText;

  return (
    <Field
      state={meta.error && "error"}
      helpText={meta.error}
      {...field}
      {...props}
      onChange={(...args) => {
        onChange(...args);
        field?.onChange(...args);
      }}
      type
    />
  );
}

FormikField.propTypes = {
  onChange: PropTypes.func,
  format: PropTypes.string,
};

FormikField.defaultProps = {
  onChange: () => {},
};

export { FormikField };
