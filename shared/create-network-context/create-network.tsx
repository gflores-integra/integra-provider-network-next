import { createContext } from "react";

import { INITIAL_STATE } from "./create-network.constants";

import { CreateNetworkContextType } from "./create-network.types";

const CreateNetworkContext = createContext<CreateNetworkContextType>({
  state: INITIAL_STATE,
  dispatch: () => {
    throw new Error(
      "Dispatch function cannot be called outside of the CreateNetworkProvider"
    );
  },
});

export { CreateNetworkContext };
