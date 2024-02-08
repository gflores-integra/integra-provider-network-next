import {
  FormDataState,
  CreateNetworkState,
  CreateNetworkSteps,
} from "./CreateNetworkContext.types";

const FORM_INIITAL_STEP: FormDataState = {
  image: "",
  name: "",
  description: "",
};

const INITIAL_STATE: CreateNetworkState = {
  currentStep: CreateNetworkSteps.INIT,
  formData: FORM_INIITAL_STEP,
  error: "",
};

export { INITIAL_STATE };
