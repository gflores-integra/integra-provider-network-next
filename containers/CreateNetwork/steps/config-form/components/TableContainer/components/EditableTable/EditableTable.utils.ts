import * as Yup from "yup";

const tableRowSchema = Yup.object().shape({
  grupo: Yup.string().trim().required("El nombre del grupo es obligatorio"),
  campo: Yup.array().of(
    Yup.string().trim().required("El nombre del campo no puede estar vacío")
  ),
});

const validationSchema = Yup.object().shape({
  EditableTableData: Yup.array().of(tableRowSchema),
});

export { validationSchema };
