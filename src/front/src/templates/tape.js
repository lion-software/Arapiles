import React from "react"
import { graphql } from "gatsby"
import PrimaryLayout from "../layouts/primaryLayout";
import {PageHeader} from "antd";

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <PrimaryLayout>
      <PageHeader
        title={frontmatter.title}
        onBack={() => window.history.back()}
      />

      <div
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </PrimaryLayout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
