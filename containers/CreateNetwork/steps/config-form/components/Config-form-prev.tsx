import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { FormikProvider, useFormik } from "formik";
import { Checkbox } from "@/styles";

import AddPhotoImage from "@/styles/assets/icons/ic_twotone-add-photo-alternate.svg";
import DeleteButtonImage from "@/styles/assets/icons/delete_button.svg";

import { CreateNetworkContext } from "@/containers/CreateNetwork/contexts/CreateNetworkContext";
import {
  ActionType,
  FormValues,
  CreateNetworkFields,
  CreateNetworkSteps,
} from "@/containers/CreateNetwork/contexts/CreateNetworkContext/CreateNetworkContext.types";

import { hasValidForm } from "../config-form.utils";
import * as Styled from "../config-form.styles";
import { BaseLayout } from "@/containers/CreateNetwork/components/base-layout";
import { ButtonContinue } from "@/containers/CreateNetwork/components/button-continue";

function ConfigFormPrev() {
  const [showPassword, setShowPassword] = useState(false);

  const { state, dispatch } = useContext(CreateNetworkContext);
  const { formData } = state;

  const titleFromContext = formData.name;
  const descriptionFromContext = formData.description;

  const formik = useFormik<FormValues>({
    initialValues: formData,
    validationSchema: undefined,
    onSubmit: () => {
      return;
    },
  });
  const { handleChange, touched, errors, values } = formik;

  const nextStep = CreateNetworkSteps.SUCCESS;

  const handleContinue = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    dispatch({
      type: ActionType.UPDATE_FORM_DATA,
      value: values,
    });

    dispatch({
      type: ActionType.UPDATE_STEP,
      value: nextStep,
    });
  };

  const canAdvance = hasValidForm(values, errors);

  return (
    <BaseLayout backStep={CreateNetworkSteps.NAME}>
      <Styled.Container>
        <Styled.NavigationMenu>
          <Styled.NavigationMenuText>
            Home <span> &gt;</span> configuration <span> &gt;</span> Nueva red
          </Styled.NavigationMenuText>
        </Styled.NavigationMenu>
        <FormikProvider value={formik}>
          <Styled.DeleteButton>
            <Image
              src={DeleteButtonImage}
              alt="delte_button"
              width={30}
              height={30}
              objectFit="cover"
            />
            Eliminar
          </Styled.DeleteButton>
          <Styled.ContainerTitle>
            <Styled.ContainerImage>
              <Image
                src={AddPhotoImage}
                alt="icon"
                width={80}
                height={80}
                objectFit="cover"
              />
            </Styled.ContainerImage>
            <Styled.Title level="h4">{titleFromContext}</Styled.Title>
          </Styled.ContainerTitle>
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

          <Styled.CheckboxContainer>
            <Checkbox
              label="configForm"
              checked={showPassword}
              onChange={() => setShowPassword((v) => !v)}
            />
          </Styled.CheckboxContainer>
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

export { ConfigFormPrev };
