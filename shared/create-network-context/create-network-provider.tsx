import React, { useReducer } from "react";
import { CreateNetworkContext } from "./create-network";
import { CreateNetworkReducer } from "./create-network.reducers";
import { INITIAL_STATE } from "./create-network.constants";
import { CreateNetworkProviderProps } from "./create-network.types";

function CreateNetworkProvider({ children }: CreateNetworkProviderProps) {
  const [state, dispatch] = useReducer(CreateNetworkReducer, INITIAL_STATE);

  return (
    <CreateNetworkContext.Provider value={{ state, dispatch }}>
      {children}
    </CreateNetworkContext.Provider>
  );
}

export { CreateNetworkProvider };
