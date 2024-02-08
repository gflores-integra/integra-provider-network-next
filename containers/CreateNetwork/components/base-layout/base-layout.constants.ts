import { CreateNetworkSteps } from "../../contexts/CreateNetworkContext";

const DEFAULT_STEPS = [
  CreateNetworkSteps.INIT,
  CreateNetworkSteps.NAME,
  CreateNetworkSteps.CONFIG_FORM,
];

const BR_STEPS = [
  CreateNetworkSteps.INIT,
  CreateNetworkSteps.NAME,
  CreateNetworkSteps.CONFIG_FORM,
];

export { DEFAULT_STEPS, BR_STEPS };
