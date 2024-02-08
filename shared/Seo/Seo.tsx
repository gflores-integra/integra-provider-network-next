import * as React from "react";
import Head from "next/head";

const Seo = ({ title = "" }: { title?: string }) => {
  const siteTitle = "Red de proveedores";
  const siteDescription = "Integra Salud";

  return (
    <Head>
      <title>
        {siteTitle} {title && `| ${title}`}
      </title>
      <link rel="canonical" href="https://www.integra-salud.mx/" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={siteDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta
        name="facebook-domain-verification"
        content="17bpff1rqh5sqciqcse65acyn4i0j9"
      />
    </Head>
  );
};

export { Seo };
