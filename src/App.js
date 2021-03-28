import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './redux/asyncActions/fetchUsers'
import { Users, NewUser, Posts } from './components'
import { setUserIdAction, setUserNameAction } from './redux/postsReducer'

import './App.scss'

function App() {
  const dispatch = useDispatch()
  const { users, isLoaded } = useSelector(({ usersReducer }) => usersReducer)
  const [visiblePosts, setVisiblePosts] = React.useState(false);

  React.useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  const setActiveUserId = React.useCallback((userId) => {
    dispatch(setUserIdAction(userId))
    setVisiblePosts(true)
  }, [dispatch])

  const setActiveUserName = React.useCallback((userName) => {
    dispatch(setUserNameAction(userName))
  }, [dispatch])


  return (
    <div className="app">
      <div className="app__main">
        <Users users={users} isLoaded={isLoaded} changePostsUserId={setActiveUserId} changePostsUserName={setActiveUserName} />
        <NewUser />
      </div>
      <div className="app__aside">
        {visiblePosts ? <Posts /> : <div className="app__aside__info">Здесь будут отображаться сообщения пользователя</div>}
      </div>
    </div>
  );
}

export default App;
