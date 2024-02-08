import { Field, ErrorMessage } from "formik";
import * as Styled from "./InputField.styles";

interface InputFieldProps {
  label?: string;
  name: string;
  type: string;
  placeholder: string;
  maxLength?: number;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  label,
  type,
  placeholder,
  maxLength,
}) => (
  <Styled.FormGroup>
    {label && <Styled.Label>{label}</Styled.Label>}
    <Field
      name={name}
      type={type}
      placeholder={placeholder}
      as={Styled.Input}
      maxLength={maxLength}
    />
    <ErrorMessage name={name} component={Styled.ErrorMessage} />
  </Styled.FormGroup>
);

export { InputField };
