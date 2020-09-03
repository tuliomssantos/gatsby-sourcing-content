# Gatsby Sourcing Content

>A core feature of Gatsby is its ability to load data from anywhere. This is part of what makes Gatsby more powerful than static site generators that are limited to only loading content from Markdown files.

>Gatsby uses source plugins to pull in data. Numerous source plugins already exist for pulling in data from other APIs, CMSs, and databases. Each plugin fetches data from their source, meaning the filesystem source plugin knows how to fetch data from the file system, the WordPress plugin knows how to fetch data from the WordPress API, etc. By including multiple source plugins, you can fetch data and combine it all in one data layer.

---
##  [Gatsby without GraphQL](https://www.gatsbyjs.com/docs/using-gatsby-without-graphql/)

>Most examples in the Gatsby docs and on the web at large focus on leveraging source plugins to manage your data in Gatsby sites. However, source plugins (or even Gatsby nodes) aren’t strictly necessary to pull data into a Gatsby site! It’s also possible to use an **“unstructured data”** approach in Gatsby sites, no GraphQL required.

Notes
1.  This is the most simple way to get data in Gatsby, but you lose out on some benefits of structured data and image transformations.
2.  This method does not allow you to consume data on pages not dynamically created in the build process. You can't consume data at build time in index.js for example
3.  If you need to consume a large volume of data, from many sources, you may end up having problems with the build process. One way around this problem is to handle the data in another system that provides Gatsby with all the necessary data.
4.  If you pass a large amount of data in the context of the page, you will experience problems such as a very large starting bundle and a slow website. So try to keep your pages as lean as possible.

In this example, we fetch a list with products and create a page named /allProducts.
You can see this in the gatsby-node.js file.

---
##  [Sourcing from Private APIs](https://www.gatsbyjs.com/docs/sourcing-from-private-apis/)

```
There are 3 approaches that you can use to source data from your private API:
1.  If your private API is a GraphQL API, you can use gatsby-source-graphql.
2.  If your private API is not a GraphQL API and you are new to GraphQL, treat the data as unstructured data and fetch it during build time, as described by the guide ”Using Gatsby without GraphQL”. However, as highlighted in the guide, this approach comes with some tradeoffs.
3.  Create a source plugin, as described in the tutorial ”Source plugin tutorial“.
```
Otherwise, you can use the **[GATSBY-SOURCE-CUSTOM-API](https://www.gatsbyjs.com/plugins/gatsby-source-custom-api/) plugin**

>gatsby-source-custom-api helps you sourcing data from any API and transform it into Gatsby nodes. Define keys you want to be transformed into image-nodes and use them with Gatsby Image.

---

## [Source from Prismic (Headless CMS)](https://github.com/angeloashmore/gatsby-source-prismic)

Step-by-step:
1.  Create a prismic account
1.  Create a prismic repository
1.  Under Settings, acces API & Security
1.  Generate an Access Token (you can leave Callback URL in blank)
    *   You will need some Custom Types and Document to configure your Gatsby plugin
    *   Create a Custom Type
    *   In JSON editor tab you can get the **schema**
    *   You will need the schema of your custom types to configure the gatsby-source-prismic
    *   You can just copy the schema and set it in your Gatsby project. See the schemas folder in this repository.
    *   In this example we created a Repeatable Custom Post, with UID, Title, Date and Rich Text
1.  Configure **[gatsby-source-prismic](https://github.com/angeloashmore/gatsby-source-prismic)** plugin
    *   Get your acces token in the API & Security tab
    *   You need to inform the schemas of your Custom Types