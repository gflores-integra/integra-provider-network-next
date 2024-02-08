import Image from "next/image";
enum ActionType {
  CLEAR_FORM_DATA = "CLEAR_FORM_DATA",
  SET_ERROR = "SET_ERROR",
  UPDATE_STEP = "UPDATE_STEP",
  UPDATE_FORM_DATA = "UPDATE_FORM_DATA",
}

enum CreateNetworkFields {
  image = "image",
  name = "name",
  description = "description",
  CONFIG_FORM = "step-config-form",
}

enum CreateNetworkSteps {
  INIT = "step-init",
  NAME = "step-name",
  description = "description",
  CONFIG_FORM = "step-config-form",
}

type FormDataState = {
  image: string;
  name: string;
  description: string;
};

type CreateNetworkState = {
  currentStep: CreateNetworkSteps;
  error?: string;
  formData: FormDataState;
};

interface Dispatch {
  data: any;
  type: string;
}

type CreateNetworkContextType = {
  state: CreateNetworkState;
  dispatch: React.Dispatch<CreateNetworkActions>;
};

interface CreateNetworkProviderProps {
  children: JSX.Element | JSX.Element[];
}

interface CreateNetworkData {
  image: string;
  name: string;
  description: string;
}

type FormValues = {
  image: string;
  name?: string;
  description?: string;
};

type FormErrors = {
  image: string;
  name?: string;
  description?: string;
};

type InputData = {
  image: string;
  name: string;
  description: string;
};

interface UpdateCurrentStep {
  type: ActionType.UPDATE_STEP;
  value: CreateNetworkSteps;
}

interface UPDATE_FORM_DATA {
  type: ActionType.UPDATE_FORM_DATA;
  value: Partial<FormDataState>;
}

interface SetErrorAction {
  type: ActionType.SET_ERROR;
  payload: {
    error: string;
  };
}

interface ClearFormAction {
  type: ActionType.CLEAR_FORM_DATA;
}

type CreateNetworkActions =
  | UPDATE_FORM_DATA
  | SetErrorAction
  | ClearFormAction
  | UpdateCurrentStep;

export { ActionType, CreateNetworkSteps, CreateNetworkFields };
export type {
  Dispatch,
  FormDataState,
  FormErrors,
  FormValues,
  InputData,
  CreateNetworkActions,
  CreateNetworkContextType,
  CreateNetworkData,
  CreateNetworkProviderProps,
  CreateNetworkState,
  UpdateCurrentStep,
};
