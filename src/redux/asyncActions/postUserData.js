import { changeUserNameAction } from "../usersReducer"

export const postUderData = () => (dispatch) => {

  fetch(`https://jsonplaceholder.typicode.com/users${idForChange}`, {
    method: 'PUT',
    body: JSON.stringify({
      name: { changedName }
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .then((json) => dispatch(changeUserNameAction(json)));
}
