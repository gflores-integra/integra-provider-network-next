import React, { useContext } from "react";
import dynamic from "next/dynamic";
import { CreateNetworkContext } from "./contexts/CreateNetworkContext";
import { CreateNetworkSteps } from "./contexts/CreateNetworkContext";
import { CreateNetworkProps } from "./CreateNetwork.types";

const ConfigForm = dynamic(() => import("./steps/config-form"));
const NameForm = dynamic(() => import("./steps/name-form"));

function CreateNetwork({}: CreateNetworkProps) {
  const { state } = useContext(CreateNetworkContext);

  const { currentStep } = state;

  return (
    <>
      {currentStep === CreateNetworkSteps.INIT && <NameForm />}
      {currentStep === CreateNetworkSteps.CONFIG_FORM && <ConfigForm />}
    </>
  );
}

export { CreateNetwork };
