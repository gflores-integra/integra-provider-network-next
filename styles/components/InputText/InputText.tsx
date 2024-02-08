import { InputTextProps } from "./InputText.d";
import * as Styled from "./InputText.styles";

function InputText({
  id,
  value,
  placeholder,
  state,
  iconLeft,
  iconRight,
  outerIconRight,
  label,
  name,
  helpText,
  className,
  onChange,
  disabled,
  type = "text",
  borderColor = "",
  ...props
}: InputTextProps): React.ReactElement {
  return (
    <Styled.GroupForm>
      {label && (
        <Styled.Label htmlFor={id} state={state}>
          {label}
        </Styled.Label>
      )}
      <Styled.InputContainer>
        <Styled.Content
          state={state}
          disabled={disabled}
          borderColor={borderColor}
        >
          {iconLeft && iconLeft}
          <Styled.Input
            type={type}
            state={state}
            placeholder={placeholder}
            value={value}
            role="textbox"
            name={name}
            id={id}
            onChange={onChange}
            className={className}
            disabled={disabled}
            borderColor={borderColor}
            {...props}
          />
          {iconRight && iconRight}
        </Styled.Content>
        {outerIconRight && outerIconRight}
      </Styled.InputContainer>
      {helpText && <Styled.Caption state={state}>{helpText}</Styled.Caption>}
    </Styled.GroupForm>
  );
}

export { InputText };
