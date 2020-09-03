const axios = require("axios")
const path = require("path")

const getAllProducts = async () => {
  return axios.get("https://fakestoreapi.com/products/").then(res => {
    return res.data
  })
}

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const allProducts = await getAllProducts()
  createPage({
    path: `/allProducts`,
    component: require.resolve("./src/templates/allProducts.js"),
    context: { allProducts },
  })

  const productsFromGraphql = await graphql(`
    {
      allProducts {
        nodes {
          id__normalized
        }
      }
    }
  `)
  const productTemplate = path.resolve("./src/templates/product.js")
  productsFromGraphql.data.allProducts.nodes.forEach(node => {
    createPage({
      path: `/product/${node.id__normalized}`,
      component: productTemplate,
      context: { productId: `${node.id__normalized}` },
    })
  })

  const posts = await graphql(`
    {
      allPrismicPost {
        edges {
          node {
            uid
          }
        }
      }
    }
  `)
  const postTemplate = path.resolve("./src/templates/post.js")
  posts.data.allPrismicPost.edges.forEach(edge => {
    createPage({
      path: `/post/${edge.node.uid}`,
      component: postTemplate,
      context: { uid: `${edge.node.uid}` },
    })
  })
}

