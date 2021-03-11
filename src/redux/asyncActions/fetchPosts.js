import axios from 'axios'
import { setPostsAction, setLoadedPosts } from "../postsReducer"

export const fetchPosts = (userId) => {
  return async (dispatch) => {
    dispatch(setLoadedPosts(false))
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    dispatch(setPostsAction(response.data))
  }
}