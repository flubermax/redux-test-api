import axios from 'axios'

export const postUserData = (idForChange, changedName) => {
  console.log(idForChange)
  console.log(changedName)

  return async () => {
    try {
      const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${idForChange}`, {
        name: changedName
      },
        {
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        .then(function (response) {
          console.log(response);
        })


    } catch (e) {
      console.log(e)
    }
  }
}
