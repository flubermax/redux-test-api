import axios from 'axios'
import { setUsersAction, setLoaded } from "../usersReducer"

export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch(setLoaded(false))
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    dispatch(setUsersAction(response.data))
  }
}