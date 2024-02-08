import { createContext } from "react";

import { INITIAL_STATE } from "./CreateNetworkContext.constants";

import { CreateNetworkContextType } from "./CreateNetworkContext.types";

const CreateNetworkContext = createContext<CreateNetworkContextType>({
  state: INITIAL_STATE,
  dispatch: () => {
    throw new Error(
      "Dispatch function cannot be called outside of the CreateNetworkProvider"
    );
  },
});

export { CreateNetworkContext };
