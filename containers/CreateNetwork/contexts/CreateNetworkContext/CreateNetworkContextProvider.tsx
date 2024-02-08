import React, { useReducer } from "react";
import { CreateNetworkContext } from "./CreateNetworkContext";
import { createNetworkReducer } from "./CreateNetworkContextReducer";
import { CreateNetworkProviderProps } from "./CreateNetworkContext.types";
import { INITIAL_STATE } from "./CreateNetworkContext.constants";

function CreateNetworkProvider({ children }: CreateNetworkProviderProps) {
  const [state, dispatch] = useReducer(createNetworkReducer, INITIAL_STATE);

  return (
    <CreateNetworkContext.Provider value={{ state, dispatch }}>
      {children}
    </CreateNetworkContext.Provider>
  );
}

export { CreateNetworkProvider };
