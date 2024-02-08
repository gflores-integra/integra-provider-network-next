import { INITIAL_STATE } from "./create-network.constants";
import {
  CreateNetworkState,
  CreateNetworkActions,
  ActionType,
} from "./create-network.types";
import { updateCreateNetworkData } from "./create-network.utils";

function CreateNetworkReducer(
  state: CreateNetworkState,
  action: CreateNetworkActions
): CreateNetworkState {
  switch (action.type) {
    case ActionType.UPDATE_STEP: {
      return { ...state, currentStep: action.value };
    }
    case ActionType.UPDATE_FORM_DATA: {
      const newFormData = { ...state.formData, ...action.value };

      updateCreateNetworkData(newFormData);

      return {
        ...state,
        formData: newFormData,
      };
    }
    case ActionType.SET_ERROR: {
      return { ...state, error: action.payload.error };
    }
    case ActionType.CLEAR_FORM_DATA: {
      return { ...INITIAL_STATE };
    }
    default: {
      return state;
    }
  }
}

export { CreateNetworkReducer };
