import { setUsersAction, setLoaded } from "../usersReducer"

export const fetchUsers = () => (dispatch) => {
  dispatch(setLoaded(false))
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(json => dispatch(setUsersAction(json)))
}