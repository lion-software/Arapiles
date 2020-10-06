import React from "react";
import PrimaryLayout from "../layouts/primaryLayout";
import {graphql, useStaticQuery} from "gatsby";

const Test = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiImage {
        edges {
          node {
            Title
            Picture {
              createdAt
              url
            }
          }
        }
      }
    }
  `);

  return(
    <PrimaryLayout>
      {
        data.allStrapiImage.edges.map(
          (edge) => {
            return (
              <>
                <h1>{edge.node.Title}</h1>
                <img alt={edge.node.Title} src={process.env.GATSBY_FRONTEND_CMS_URI + edge.node.Picture[0].url} />
                <p>{edge.node.Picture[0].createdAt}</p>
              </>
            )
          }
        )
      }
    </PrimaryLayout>
  );
};

export default Test;
