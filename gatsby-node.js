const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)
// 每当 GraphQL 数据中创建（或更新）新节点时，Gatsby 都会调用此函数
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // 在 GraphQL 数据中创建的节点类型是 MarkdownRemark
  if (node.internal.type === `MarkdownRemark`) {
    // 获取其父节点,是一个 file 节点,通过 file 节点获取到文件名和路径
    // const fileNode = getNode(node.parent)
    // 通过 fileNode.relativePath 来获取相对路径, 去除公共路径, 来获取 slug
    // 通过 createFilePath 方法,封装了前面的步骤, 快速获取 slug
    let slug = createFilePath({ node, getNode, basePath: `posts` })
    // 通过 createNodefield 创建一个数据字段
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
// 创建页面
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // 查询所有 md 文件数据
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  // 逐个创建相应的页面
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug, // 路径
      // 创建页面需要模板组件
      component: path.resolve(`./src/templates/post.js`),
      context: {
        // 传递给模板组件中在查询时, 接收的变量值
        slug: node.fields.slug,
      },
    })
  })
}
