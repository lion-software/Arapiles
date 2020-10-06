/* API file reference: https://www.gatsbyjs.com/docs/api-files-gatsby-config/
   This file is configuration passed to the Gatsby library in order to provide
   further functionality and customisation to this website.
*/

module.exports = {
  plugins: [

    /* Ant.Design UI library
     */
    'gatsby-plugin-antd',

    /* Image processing
    */
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    /* Strapi API source for graphql
    * 1) https://github.com/strapi/gatsby-source-strapi
    * 1.1) https://github.com/strapi/gatsby-source-strapi/
    */
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.GATSBY_BACKEND_CMS_URI,
        queryLimit: 1000, // Default to 100
        //contentTypes: [`exec`, `image`, `post`, `user`, `tape`, `faq`],
        contentTypes: [`image`, `event`],
        singleTypes: [],
        loginData: {
          identifier: "",
          password: "",
        },
      },
    },

    /* File system object for data sourcing
       from files with GraphQL.
       Markdown Content
       1) https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/
    */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },

    /* File system object for data sourcing
       from files with GraphQL.
       Image content
       1) https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/
    */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    /* Markdown parser
       Includes remark-images which adds some fancy pre-processing
         to enhance user experience when loading images.
       Includes remark-relative-images which allows for relative images spread throughout
         the source tree.
       1) https://www.gatsbyjs.com/plugins/gatsby-transformer-remark/
       2) https://www.gatsbyjs.com/plugins/gatsby-remark-images/
       4) https://www.gatsbyjs.com/plugins/gatsby-remark-relative-images/
     */
    `gatsby-plugin-sharp`, // Image processing
    {
        resolve: `gatsby-transformer-remark`,
        options: {
            plugins: [
                `gatsby-remark-relative-images`,
                {
                  resolve: `gatsby-remark-images`,
                  options: {
                    maxWidth: 1024,
                  },
                }
            ],
        },
    },
  ]
};
