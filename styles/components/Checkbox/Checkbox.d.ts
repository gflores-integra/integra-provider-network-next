interface CheckboxProps {
  disabled?: boolean;
  checked?: boolean;
  label?: string | React.ReactNode;
  name?: string;
  id?: string;
  onChange?: () => void;
}

export { CheckboxProps };
