const initialState = {
  posts: [],
  userId: null,
  userName: '',
  postsLoaded: false
}

const SET_POSTS = 'SET_POSTS'
const SET_ID = 'SET_ID'
const SET_LOADED_POSTS = 'SET_LOADED_POSTS'
const SET_NAME = 'SET_NAME'

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return { ...state, posts: action.payload, postsLoaded: true }

    case SET_ID:
      return { ...state, userId: action.payload }

    case SET_NAME:
      return { ...state, userName: action.payload }

    case SET_LOADED_POSTS:
      return { ...state, postsLoaded: action.payload }

    default:
      return state
  }
}

export const setPostsAction = (payload) => ({ type: SET_POSTS, payload })
export const setUserIdAction = (payload) => ({ type: SET_ID, payload })
export const setUserNameAction = (payload) => ({ type: SET_NAME, payload })

export const setLoadedPosts = (payload) => ({ type: SET_LOADED_POSTS, payload })