import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  grupo: Yup.string().required("El nombre del grupo es obligatorio"),
  campos: Yup.array()
    .of(Yup.string().required("El nombre del campo no puede estar vacío"))
    .required("Debe haber al menos un campo"),
});

export { validationSchema };
