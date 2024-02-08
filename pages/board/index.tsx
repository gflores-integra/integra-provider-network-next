import { Inter } from "next/font/google";
import * as React from "react";
import { Layout } from "../../shared/Layout";
import { Seo } from "../../shared/Seo";
import { Board } from "@/containers/Board";

const inter = Inter({ subsets: ["latin"] });

export default function TDU() {
  return (
    <>
      <Layout pageTitle="Board">
        <Seo title="" />
        <Board />
      </Layout>
    </>
  );
}
