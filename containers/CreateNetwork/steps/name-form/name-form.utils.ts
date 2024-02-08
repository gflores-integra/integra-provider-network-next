import * as Yup from "yup";
import {
  FormErrors,
  FormValues,
} from "../../contexts/CreateNetworkContext/CreateNetworkContext.types";

const nameValidation = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Z\s]*$/, "Solo se permiten letras y espacios")
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(50, "El nombre no puede tener más de 50 caracteres")
    .required("El nombre es requerido"),
  description: Yup.string()
    .matches(/^[a-zA-Z\s]*$/, "Solo se permiten letras y espacios")
    .min(2, "La descripción debe tener al menos 2 caracteres")
    .max(500, "La descripción no puede tener más de 500 caracteres")
    .required("La descripción es requerida"),
  image: Yup.string().required("La imagen es requerida"),
});

const hasUserInfoComplete = (values: FormValues, errors: FormErrors): boolean =>
  !!values.name &&
  !!values.description &&
  !!values.image &&
  !errors.name &&
  !errors.description &&
  !errors.image;

export { hasUserInfoComplete, nameValidation };
