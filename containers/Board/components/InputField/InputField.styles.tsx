import styled from "styled-components";
import { Form } from "formik";

const FormGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
    width: 80%;
  }
`;

const Label = styled.p`
  color: #ffff;
  margin: 2px 0 3px 0;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid rgb(204, 204, 204);
  border-radius: 25px;
  background: #ffff;
  margin-bottom: 10px;
`;

const ErrorMessage = styled.p`
  color: red;
  margin: 2px 0 3px 0;
`;

export { Label, ErrorMessage, FormGroup, Input };
