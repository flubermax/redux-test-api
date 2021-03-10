import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchUsers } from '../../redux/asyncActions/fetchUsers'
import {addUserAction} from '../../redux/usersReducer'

import './NewUser.scss'

const  NewUser = () => {
  const dispatch = useDispatch()
  const [name, setName] = React.useState('')
  const [nameError, setNameError] = React.useState('Введите имя пользователя')
  const [nameDirty, setNameDirty] = React.useState(false)  
  const [formValid, setFormValid] = React.useState(false)
  const [newUserSuccess, setNewUserSuccess] = React.useState(false)

  React.useEffect(() => {
    if (nameError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [nameError]) 

  const nameHandler = (e) => {
    setName(e.target.value)
    if (e.target.value.length < 2) {
      setNameError('Минимум 2 символа')
      if(!e.target.value) {
        setNameError('Введите имя пользователя')
      }
    } else {
      setNameError('')
    }
  }

  const blurHandler = (e) => {
    if (e.target.name) {
        setNameDirty(true)
    }
  }

  const addUser = () => {
    const user = {
      "id":  Date.now(),
      name,
    }
    dispatch(addUserAction(user))

    setName('')

    setNewUserSuccess(true)
    setFormValid(false)
    setTimeout(() => setNewUserSuccess(false), 3000);
  }

  React.useEffect(() => {
    dispatch(fetchUsers())
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <form className="new-user">
      <h4 className="new-user__title">
        Новый пользователь:
      </h4>

      <div className="new-user__row">
        <input
          value={name}
          onChange={e => nameHandler(e)}
          onBlur={e => blurHandler(e)}
          id="name"
          type="text"
          placeholder="Имя пользователя"
          name="name"
        />
        {(nameDirty && nameError) && <div className="new-user__info error">{nameError}</div>}
        <button onClick={addUser} disabled={!formValid} type="submit">Добавить</button>

        {
          newUserSuccess && (<div className='new-user__info success'>Пользователь добавлен!</div>)          
        }
      </div>      
      
    </form>
  );
}

export default NewUser;