import * as React from "react";
import { Layout } from "../shared/Layout";
import { Seo } from "../shared/Seo";
import { Home } from "@/containers/Home";

export default function IndexPage() {
  return (
    <>
      <Layout pageTitle="Home Page">
        <Seo title="" />
        <Home />
      </Layout>
    </>
  );
}
