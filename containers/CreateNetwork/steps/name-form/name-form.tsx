import React, { useContext, useEffect, useMemo } from "react";
import { FormikProvider, useFormik } from "formik";
import {
  ActionType,
  FormValues,
  CreateNetworkFields,
  CreateNetworkSteps,
} from "@/containers/CreateNetwork/contexts/CreateNetworkContext/CreateNetworkContext.types";
import { CreateNetworkContext } from "@/containers/CreateNetwork/contexts/CreateNetworkContext";
import { ButtonContinue } from "../../components/button-continue";
import { BaseLayout } from "../../components/base-layout";
import { ImageUpload } from "./components/ImageUpload";
import { hasUserInfoComplete, nameValidation } from "./name-form.utils";
import * as Styled from "./name-form.styles";

function NameForm() {
  const { state, dispatch } = useContext(CreateNetworkContext);
  const { formData } = state;

  const formik = useFormik<FormValues>({
    initialValues: formData,
    validationSchema: nameValidation,
    onSubmit: () => {},
  });

  const { handleChange, setFieldValue, touched, errors, values } = formik;
  const nextStep = useMemo(() => CreateNetworkSteps.CONFIG_FORM, []);

  useEffect(() => {
    console.log("Valores de Formik:", formik.values);
    console.log("Errores de Formik:", formik.errors);
  }, [formik.values, formik.errors]);

  const handleImageSelected = (dataUrl: string | null) => {
    console.log("handleImageSelected llamado con:", dataUrl);
    if (dataUrl) {
      setFieldValue("image", dataUrl, true);
    } else {
      setFieldValue("image", null, true);
    }
  };

  const handleContinue = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatch({ type: ActionType.UPDATE_FORM_DATA, value: values });
    dispatch({ type: ActionType.UPDATE_STEP, value: nextStep });
  };

  const canAdvance = hasUserInfoComplete(values, errors);

  return (
    <BaseLayout backStep={CreateNetworkSteps.INIT}>
      <Styled.Container>
        <Styled.NavigationMenu>
          <Styled.NavigationMenuText>
            Home <span> &gt;</span> configuration <span> &gt;</span> Nueva red
          </Styled.NavigationMenuText>
        </Styled.NavigationMenu>
        <FormikProvider value={formik}>
          <Styled.ContainerImage>
            <ImageUpload onImageSelected={handleImageSelected} />
          </Styled.ContainerImage>
          <Styled.InputContainer>
            <Styled.InputText
              label="Nombre"
              name={CreateNetworkFields.NAME}
              placeholder="Nombre de la red"
              touched={touched.name}
              errors={errors.name}
              onChange={handleChange}
            />
          </Styled.InputContainer>
          <Styled.InputContainer>
            <Styled.InputTextArea
              label="Breve descripción"
              name={CreateNetworkFields.DESCRIPTION}
              placeholder="Describe brevemente la red"
              touched={touched.description}
              errors={errors.description}
              onChange={handleChange}
              type="textarea"
            />
          </Styled.InputContainer>
          <Styled.ContainerButton>
            <Styled.ContentButton>
              <ButtonContinue onClick={handleContinue} disabled={!canAdvance} />
            </Styled.ContentButton>
          </Styled.ContainerButton>
        </FormikProvider>
      </Styled.Container>
    </BaseLayout>
  );
}

export { NameForm };
