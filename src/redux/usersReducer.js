const initialState = {
  users: [],
  idForChange: '',
  changedName: '',
  isLoaded: false
}

const ADD_USER = 'ADD_USER'
const SET_USERS = 'SET_USERS'
const SET_LOADED = 'SET_LOADED'

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, users: [...state.users, action.payload] }

    case SET_USERS:
      return { ...state, users: action.payload, isLoaded: true }

    case SET_LOADED:
      return { ...state, isLoaded: action.payload }

    default:
      return state
  }
}

export const addUserAction = (payload) => ({ type: ADD_USER, payload })
export const setUsersAction = (payload) => ({ type: SET_USERS, payload })

export const setLoaded = (payload) => ({ type: SET_LOADED, payload })