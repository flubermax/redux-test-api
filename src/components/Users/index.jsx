import React from 'react'
import { useDispatch } from 'react-redux'
import { setNewName, setUserToChange } from '../../redux/usersReducer'

import './Users.scss'

const Users = React.memo(function Users({users, isLoaded, changePostsUserId, changePostsUserName}) {
  const dispatch = useDispatch()

  const onSelectId = (id) => {
    if (changePostsUserId) {
      changePostsUserId(id);
    }
  }

  const onSelectName = (name) => {
    if (changePostsUserName) {
      changePostsUserName(name);
    }
  }


  return (
    <div className="users">
      <h3 className="users__title">
        Пользователи:
      </h3>

      <ul className="users__list">
        {isLoaded ? users.map(user => (
          <li 
            className="users__item"
            key={user.id}            
          >
            {user.name}
            <div className="users__item__row">
              <button onClick={() => {onSelectId(user.id); onSelectName(user.name) }}>Загрузить сообщения</button>
              <button className="yellowBtn" onClick={() => {dispatch(setUserToChange(user.id)); dispatch(setNewName(prompt()))}}>Изменить имя</button>
            </div>            
          </li>)) : 'Идёт загрузка...'}
      </ul>
    </div>
  );
})

export default Users;