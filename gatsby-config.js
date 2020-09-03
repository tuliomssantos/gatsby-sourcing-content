const productSchema = `
  id: Int
  title: String
  price: Float
  description: String
  category: String
  image: String
`

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: "https://fakestoreapi.com/products/",
        rootKey: "products",
        schemas: {
          products: productSchema
        }
      },
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: 'first-prismic-repository',
        accessToken: 'MC5YMUVTakJJQUFINTJxOV9D.77-9Tkjvv73vv73vv73vv73vv73vv73vv71377-9VHPvv73vv70Z77-977-9ce-_ve-_vQbvv71w77-9eu-_ve-_vQPvv73vv70',
        linkResolver: ({ node, key, value }) => (post) => `/${post.id}`,
        schemas: {
          post: require("./src/schemas/post.json")
        }
      },
    },
  ],
}
