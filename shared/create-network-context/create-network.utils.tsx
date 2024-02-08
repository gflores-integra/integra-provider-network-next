import { CreateNetworkData } from "./create-network.types";

function updateCreateNetworkData(data: Partial<CreateNetworkData>) {
  if (typeof window === "undefined") return;

  const currentData = JSON.parse(
    sessionStorage.getItem("CreateNetworkData") || "{}"
  );
  const updatedData = { ...currentData, ...data };

  sessionStorage.setItem("CreateNetworkData", JSON.stringify(updatedData));
}

function getCreateNetworkData() {
  if (typeof window !== "undefined") {
    return JSON.parse(sessionStorage.getItem("CreateNetworkData") || "{}");
  }

  return {};
}

export { getCreateNetworkData, updateCreateNetworkData };
