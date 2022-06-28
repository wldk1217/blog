import { StaticImage } from "gatsby-plugin-image";
import React from "react"
import Head from "../components/Head";
import Layout from "../components/Layout";

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage alt="test" src="../images/tree.jpg" />
      <StaticImage alt="test" src="../images/icon.jpg" />
    </Layout>
  );
};

export default IndexPage;
