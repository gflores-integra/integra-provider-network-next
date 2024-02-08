import * as React from "react";
import { Layout } from "../../shared/Layout";
import { Seo } from "../../shared/Seo";
import { CreateNetwork } from "@/containers/CreateNetwork";
import { CreateNetworkProvider } from "@/containers/CreateNetwork/contexts/CreateNetworkContext";

export default function TDU() {
  return (
    <>
      <Layout pageTitle="Board">
        <Seo title="" />
        <CreateNetworkProvider>
          <CreateNetwork />
        </CreateNetworkProvider>
      </Layout>
    </>
  );
}
