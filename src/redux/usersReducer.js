const initialState = {
  users: [],
  isLoaded: false,
  userToChange: ''
}

const ADD_USER = 'ADD_USER'
const REMOVE_USER = 'REMOVE_USER'
const SET_USERS = 'SET_USERS'
const SET_LOADED = 'SET_LOADED'
const USER_TO_CHANGE = 'USER_TO_CHANGE'
const NEW_NAME = 'NEW_NAME'

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, users: [...state.users, action.payload] }

    case REMOVE_USER:
      return { ...state, users: state.users.filter(user => user.id !== action.payload) }

    case SET_USERS:
      return { ...state, users: action.payload, isLoaded: true }

    case SET_LOADED:
      return { ...state, isLoaded: action.payload }

    case USER_TO_CHANGE:
      return { ...state, userToChange: action.payload }

    case NEW_NAME:
      return {
        ...state,
        users: state.users.map(
          user => user.id === state.userToChange ? { ...user, name: action.payload }
            : user
        )
      }

    default:
      return state
  }
}

export const addUserAction = (payload) => ({ type: ADD_USER, payload })
export const removeUserAction = (payload) => ({ type: REMOVE_USER, payload })
export const setUsersAction = (payload) => ({ type: SET_USERS, payload })

export const setLoaded = (payload) => ({ type: SET_LOADED, payload })

export const setUserToChange = (payload) => ({ type: USER_TO_CHANGE, payload })
export const setNewName = (payload) => ({ type: NEW_NAME, payload })
