import { setPostsAction, setLoadedPosts } from "../postsReducer"

export const fetchPosts = (userId) => (dispatch) => {
  dispatch(setLoadedPosts(false))
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    .then((response) => response.json())
    .then(json => dispatch(setPostsAction(json)))
}