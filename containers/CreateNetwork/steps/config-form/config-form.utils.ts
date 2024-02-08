import * as Yup from "yup";

const formValidationSchema = Yup.object().shape({
  image: Yup.string().required("La imagen es obligatoria"),
  name: Yup.string()
    .min(2, "El nombre es muy corto")
    .max(50, "El nombre es muy largo")
    .required("El nombre es obligatorio"),
  description: Yup.string()
    .matches(/^[a-zA-Z\s]*$/, "Solo letras y espacios permitidos")
    .min(2, "La descripción es muy corta")
    .max(50, "La descripción es muy larga")
    .required("La descripción es obligatoria"),
  EditableTableData: Yup.array().of(
    Yup.object().shape({
      grupo: Yup.string().when("isGroup", (isGroup, schema) => {
        const isGroupValue = Array.isArray(isGroup) ? isGroup[0] : isGroup;
        return isGroupValue
          ? schema.required("El nombre del grupo es obligatorio")
          : schema.notRequired();
      }),
      isGroup: Yup.boolean().notRequired(),
      campo: Yup.array()
        .of(Yup.string().required("El campo no puede estar vacío"))
        .min(1, "Debe haber al menos un campo"),
    })
  ),
});

function base64ToBlob(base64: string, mimeType: any) {
  const byteCharacters = atob(base64.split(",")[1]);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += 512) {
    const slice = byteCharacters.slice(offset, offset + 512);
    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  return new Blob(byteArrays, { type: mimeType });
}

function transformDataToServerFormat(formData) {
  const dataToSend = {
    NameRed: formData.name,
    DescriptionRed: formData.description,
    Groups: [],
  };

  formData.TableData.concat(formData.EditableTableData).forEach((row) => {
    let groupIndex = dataToSend.Groups.findIndex(
      (group) => group.DescriptionGroup === row.grupo
    );

    if (groupIndex === -1 && row.grupo !== "") {
      groupIndex = dataToSend.Groups.length;
      dataToSend.Groups.push({
        DescriptionGroup: row.grupo,
        Mandatory: row.esObligatorio,
        ViewCac: row.quienPuedeVerlo.ViewCac,
        ViewFinanzas: row.quienPuedeVerlo.ViewFinanzas,
        ViewApp: row.quienPuedeVerlo.ViewApp,
        Fields: {},
      });
    }

    row.campo.forEach((campo, index) => {
      if (row.grupo === "") {
        dataToSend.Groups.push({
          DescriptionGroup: "",
          Mandatory: row.esObligatorio,
          ViewCac: row.quienPuedeVerlo.ViewCac,
          ViewFinanzas: row.quienPuedeVerlo.ViewFinanzas,
          ViewApp: row.quienPuedeVerlo.ViewApp,
          Fields: {
            [campo]: {
              Parametro: row.parametros[index],
              TextoAdaptable: row.visualizacion[index],
            },
          },
        });
      } else {
        // Agregar campos al grupo existente
        dataToSend.Groups[groupIndex].Fields[campo] = {
          Parametro: row.parametros[index],
          TextoAdaptable: row.visualizacion[index],
        };
      }
    });
  });

  return [dataToSend];
}

//Send binary image version

// const handleContinue = async (e) => {
//   e.preventDefault();

//   if (canAdvance) {
//     // Transforma los datos del formulario excluyendo la imagen
//     const transformedData = transformDataToServerFormat(values);
//     const jsonPayload = JSON.stringify(transformedData[0]);

//     console.log("jsonPayload:", jsonPayload);
//     const imageBlob = base64ToBlob(values.image, "image/png"); // Ajusta el 'image/png' según tu caso

//     const formData = new FormData();
//     formData.append("jsonPayload", jsonPayload); // Envía los datos JSON como un string
//     formData.append("image", imageBlob, "image.png"); // Agrega la imagen como binario

//     console.log("Datos JSON transformados:", transformedData[0]);
//     console.log("Imagen convertida a Blob:", imageBlob);

//     try {
//       const response = await axios.post(
//         "http://a5e51c027a1a94de593eba24d25f3669-1565155552.us-west-2.elb.amazonaws.com/supplier/opp/createsupplier",
//         formData,
//         {
//           headers: {
//             // 'Content-Type': 'multipart/form-data' es establecido automáticamente por Axios cuando se envía FormData
//           },
//         }
//       );
//       console.log("Datos guardados exitosamente:", response.data);
//     } catch (error) {
//       console.error("Error al guardar los datos:", error);
//     }
//   } else {
//     console.log("El formulario contiene errores y no puede avanzar.");
//   }
// };

export { formValidationSchema, base64ToBlob, transformDataToServerFormat };
