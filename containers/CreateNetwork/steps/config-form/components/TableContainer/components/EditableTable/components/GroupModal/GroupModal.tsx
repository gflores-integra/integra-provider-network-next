import React from "react";
import { Formik, Form, FieldArray } from "formik";
import styled from "styled-components";
import * as Yup from "yup";
import { Icon } from "@/styles/icons/src/components/icon";

import { FormikField } from "@/shared/FormikField";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background-color: #f8f7f7;
  padding: 70px;
  border-radius: 8px;
  min-width: 620px;
  min-height: 620px;
  display: flex;
  flex-direction: column;
  position: relative;
  /* justify-content: space-between; */
`;

const FormContainer = styled(Form)`
  justify-content: space-between;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  left: 27px;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 24px;
`;

const Title = styled.h2`
  text-align: center;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const InputText = styled(FormikField)`
  width: 300px;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const IconContent = styled(Icon).attrs(({ theme }) => ({
  fill: theme.grayscale.white,
}))`
  margin-right: 10px;
  display: block;
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const Button = styled.button`
  cursor: pointer;
  background-color: ${({ theme }) => theme.blue90};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
  }
`;

const ButtonCancel = styled.button`
  cursor: pointer;
  background-color: transparent;
  color: ${({ theme }) => theme.blue90};
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.2s;
  text-decoration: underline;

  &:focus {
    outline: none;
  }
`;

const RemoveButton = styled.button`
  margin-left: auto;
  padding: 2px 5px;
  font-size: 20px;
  color: #000;
  background-color: transparent;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin-left: 2px;
  align-items: center;
  justify-content: center;
`;

const FieldWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const FieldWrapperGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

const FieldContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  width: 100%;
  justify-content: center;
`;

const EmptyContainer = styled.div`
  width: 30px;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  border-left: 1px solid #000;
  flex-shrink: 0;
  margin: 9px 11px 14px 0px;
`;

const TextContent = styled.div`
  display: flex;
  justify-content: center;
`;

const Text = styled.p`
  font-size: 20px;
  margin: 0;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 200;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizelegibility;
  font-style: normal;
  font-size: 100%;
  margin-bottom: 32px;

  @media (min-width: 768px) {
    width: 430px;
  }
`;

const GroupModal = ({ isOpen, onClose, onSave }) => {
  if (!isOpen) {
    return null;
  }

  const handleKeyPress = (e, arrayHelpers, index) => {
    if (e.key === "Enter") {
      e.preventDefault();
      arrayHelpers.insert(index + 1, "");
    }
  };

  return (
    <Formik
      initialValues={{
        grupo: "",
        campos: ["", ""],
      }}
      validationSchema={Yup.object().shape({
        grupo: Yup.string().required("El nombre del grupo es obligatorio"),
        campos: Yup.array().of(
          Yup.string().required("El nombre del campo no puede estar vacío")
        ),
      })}
      onSubmit={(values) => {
        onSave(values);
        onClose();
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <ModalOverlay onClick={onClose}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={onClose}>&times;</CloseButton>
            <IconContainer>
              <IconContent name="AddGroup" width="60px" height="60px" />
            </IconContainer>
            <Title>Agregando nuevo grupo</Title>
            <FormContainer onSubmit={handleSubmit}>
              <FieldContainer>
                <FieldWrapperGroup>
                  <InputText
                    name="grupo"
                    placeholder="Nombre del grupo"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.grupo}
                    borderColor="#000"
                  />
                </FieldWrapperGroup>
                <FieldArray
                  name="campos"
                  render={(arrayHelpers) => (
                    <FieldContent>
                      <EmptyContainer />
                      <div>
                        {values.campos.map((campo, index) => (
                          <FieldWrapper key={index}>
                            <InputText
                              name={`campos.${index}`}
                              placeholder="Campo"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              onKeyPress={(e: any) =>
                                handleKeyPress(e, arrayHelpers, index)
                              }
                              value={campo}
                              borderColor="#000"
                            />
                            {index > 1 && (
                              <RemoveButton
                                type="button"
                                onClick={() => arrayHelpers.remove(index)}
                              >
                                -
                              </RemoveButton>
                            )}
                          </FieldWrapper>
                        ))}
                      </div>
                    </FieldContent>
                  )}
                />
                <TextContent>
                  <IconContent name="InfoIcon" width="24px" height="22px" />

                  <Text>Presiona enter para agregar un nuevo campo</Text>
                </TextContent>
              </FieldContainer>

              <ActionButtons>
                <ButtonCancel type="button" onClick={onClose}>
                  Cancelar
                </ButtonCancel>
                <Button type="submit">Guardar</Button>
              </ActionButtons>
            </FormContainer>
          </ModalContainer>
        </ModalOverlay>
      )}
    </Formik>
  );
};

export { GroupModal };
