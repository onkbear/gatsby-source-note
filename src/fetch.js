const axios = require(`axios`)

const API_BASE      = `https://note.com/api/v2/`
const MAX_FETCH_NUM = 64

/**
 * Get note posts filtered by creator.
 */
export const getNotePost = async (creator) => {
  let posts = []

  for (let page = 1; page <= MAX_FETCH_NUM; ++page) {

    const items = await axios(`${API_BASE}/creators/${creator}/contents?kind=note&page=${page}`)
      .then(res => res.data)
      .catch(error => console.log(error))

    posts = [...posts, ...items.data.contents]

    if (items.data.isLastPage) {
      break;
    }
  }

  return posts
}
