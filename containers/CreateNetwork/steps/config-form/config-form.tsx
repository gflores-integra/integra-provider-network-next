import React, { useContext, useState } from "react";
import Image from "next/image";
import { FormikProvider, useFormik } from "formik";

import AddPhotoImage from "@/styles/assets/icons/ic_twotone-add-photo-alternate.svg";
import DeleteButtonImage from "@/styles/assets/icons/delete_button.svg";

import { CreateNetworkContext } from "@/containers/CreateNetwork/contexts/CreateNetworkContext";
import {
  ActionType,
  FormValues,
  CreateNetworkFields,
  CreateNetworkSteps,
} from "@/containers/CreateNetwork/contexts/CreateNetworkContext/CreateNetworkContext.types";
import { ButtonContinue } from "../../components/button-continue";
import { BaseLayout } from "../../components/base-layout";

import {
  base64ToBlob,
  formValidationSchema,
  transformDataToServerFormat,
} from "./config-form.utils";
import * as Styled from "./config-form.styles";
import { TableContainer } from "./components/TableContainer";
import makeData from "./components/TableContainer/makeData";
import { saveData } from "./saveData";
import axios from "axios";
import { Modal } from "./components/Modal";

function ConfigForm() {
  const { state, dispatch } = useContext(CreateNetworkContext);
  const { formData } = state;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");

  const titleFromContext = formData.name;
  const descriptionFromContext = formData.description;
  const imageFromContext = formData.image;

  const formik = useFormik<FormValues>({
    initialValues: {
      ...formData,
      TableData: formData.TableData || makeData(),
      EditableTableData: [],
    },
    validationSchema: formValidationSchema,

    onSubmit: () => {
      return;
    },
  });
  const { handleChange, touched, errors, values } = formik;
  console.log("Valores del Formulario:", values);
  console.log("Errores del Formulario:", errors);

  const nextStep = CreateNetworkSteps.SUCCESS;

  const api = process.env.NEXT_PUBLIC_APP_API_URL;
  const handleContinue = async (e) => {
    e.preventDefault();

    if (canAdvance) {
      console.log("values antes de transformar los datos", values);
      const transformedData = transformDataToServerFormat(values);
      transformedData[0].ImageRed = "url"; // Usando "url" como placeholder para la imagen

      console.log("Datos JSON para enviar:", transformedData[0]);

      try {
        const response = await axios.post(
          `${api}/supplier/opp/createsupplier`,
          transformedData[0],
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("Respuesta del servidor:", response.data);
      } catch (error) {
        console.error("Error al enviar los datos JSON:", error);
      }
    } else {
      console.log("El formulario contiene errores y no puede avanzar.");
    }
  };

  const canAdvance = Object.keys(errors).length === 0;
  console.log("configformprueba: ", errors, values);

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
              {imageFromContext ? (
                <Image
                  src={imageFromContext}
                  alt="Imagen de la red"
                  width={80}
                  height={80}
                  style={{ objectFit: "cover" }}
                />
              ) : (
                <Image
                  src={AddPhotoImage}
                  alt="icon"
                  width={80}
                  height={80}
                  objectFit="cover"
                />
              )}
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
          <TableContainer />
          <Styled.ContainerButton>
            <Styled.ContentButton>
              <ButtonContinue onClick={handleContinue} disabled={!canAdvance} />
            </Styled.ContentButton>
          </Styled.ContainerButton>
        </FormikProvider>
      </Styled.Container>
      <Modal
        title={modalTitle}
        message={modalMessage}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </BaseLayout>
  );
}

export { ConfigForm };
