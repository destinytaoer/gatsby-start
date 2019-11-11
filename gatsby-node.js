const path = require('path')
const _ = require('lodash')

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
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  // 查询所有 md 文件数据
  const result = await graphql(`
    query {
      posts: allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      tags: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query`)
    return
  }
  // 逐个创建相应的页面
  const posts = result.data.posts.edges
  const postTemplate = path.resolve(`./src/templates/post.js`)
  posts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug, // 路径
      // 创建页面需要模板组件
      component: postTemplate,
      context: {
        // 传递给模板组件中在查询时, 接收的变量值
        slug: node.fields.slug,
      },
    })
  })
  const tags = result.data.tags.group
  const tagTemplate = path.resolve('./src/templates/tag.js')
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}
