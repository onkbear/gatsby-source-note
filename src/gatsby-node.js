const { getNotePost } = require(`./fetch`)

const POST_NODE_TYPE = `NotePost`

exports.sourceNodes = async ({
  actions,
  createContentDigest,
  createNodeId,
}, { creator }) => {
  const { createNode } = actions

  getNotePost(creator).then(results =>
    // loop through data and create Gatsby nodes
    results.forEach(content =>
      createNode({
        ...content,
        id: createNodeId(`${POST_NODE_TYPE}-${content.id}`),
        parent: null,
        children: [],
        internal: {
          type: POST_NODE_TYPE,
          content: JSON.stringify(content),
          contentDigest: createContentDigest(content),
        },
      })
    )
  )
}
