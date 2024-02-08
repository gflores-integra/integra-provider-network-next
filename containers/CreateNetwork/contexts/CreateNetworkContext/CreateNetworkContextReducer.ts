import { INITIAL_STATE } from "./CreateNetworkContext.constants";
import {
  CreateNetworkState,
  CreateNetworkActions,
  ActionType,
} from "./CreateNetworkContext.types";
import { updateCreateNetworkData } from "./CreateNetworkContext.utils";

function createNetworkReducer(
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

export { createNetworkReducer };
