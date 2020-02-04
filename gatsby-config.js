/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 *
 * https://www.canva.com/learn/100-color-combinations/
 */

const theme = {
  fontSize: "1rem",
  fontFamily: "Montserrat",
  color: "#FFFFFF",
  colorBase: "#90AFC5",
  colorPrimary: "#336B87",
  colorSecondary: "#2A3132",
  colorTertiary: "#763626",
}

module.exports = {
  siteMetadata: {
    title: "Sandro Baccega — CV",
    author: "Sandro Baccega",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-jss",
      options: { theme },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "static",
        path: `${__dirname}/static/`,
      },
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            subsets: [`latin`],
            variants: [`200`, `300`, `400`],
          },
        ],
      },
    },
  ],
}
