module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-styled-components`,    
  ],
  siteMetadata: {
    title: `Styling Experiment`,
    description: `Blazing fast styling example playground`,
    navigationItems: [
      { path: "/", name: "Home" },
      { path: "/about/", name: "About Us" },
    ]
  },
}