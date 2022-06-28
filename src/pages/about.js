import React from "react";
import Head from "../components/Head";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

function AboutPage() {
  return(
    <Layout pageTitle="About Me">
      <p>
        Hi there! I'm the proud creator this site, which I built with Gatsby.
      </p>
      <StaticImage alt="test" src="../images/icon.png" />
    </Layout>
  );
}

export default AboutPage;