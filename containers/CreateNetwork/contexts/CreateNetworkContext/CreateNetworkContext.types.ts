enum ActionType {
  CLEAR_FORM_DATA = "CLEAR_FORM_DATA",
  SET_ERROR = "SET_ERROR",
  UPDATE_STEP = "UPDATE_STEP",
  UPDATE_FORM_DATA = "UPDATE_FORM_DATA",
}

enum CreateNetworkFields {
  IMAGE = "image",
  NAME = "name",
  DESCRIPTION = "description",
  CONFIG_FORM = "config_form",
  SUCCESS = "success",
}

enum CreateNetworkSteps {
  INIT = "step-init",
  NAME = "step-name",
  CONFIG_FORM = "step-config-form",
  SUCCESS = "success",
}

type FormDataState = {
  name: string;
  image: string;
  description: string;
  TableData: any[];
  EditableTableData: [];
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
  TableData: any[];
  EditableTableData: [];
}

type FormValues = {
  image: string;
  name: string;
  description?: string;
  config_form?: string;
  TableData: any[];
  EditableTableData: [];
};

type FormErrors = {
  image: string;
  name: string;
  description?: string;
  TableData: any[];
  EditableTableData: [];
};

interface FormRegisterProps {
  cms: any;
}

type InputData = {
  image: string;
  name: string;
  description: string;
  config_form: string;
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
  FormRegisterProps,
  FormValues,
  InputData,
  CreateNetworkActions,
  CreateNetworkContextType,
  CreateNetworkData,
  CreateNetworkProviderProps,
  CreateNetworkState,
  UpdateCurrentStep,
};
