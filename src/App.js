import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFake, fetchUsers } from './redux/asyncActions/fetchUsers'
import { Header, Users, NewUser, Posts } from './components'
import { setUserIdAction, setUserNameAction } from './redux/postsReducer'

import './App.scss'

function App() {
  const dispatch = useDispatch()
  const { users, isLoaded } = useSelector(({ usersReducer }) => usersReducer)
  const [visiblePosts, setVisiblePosts] = React.useState(false);

  React.useEffect(() => {
    dispatch(fetchUsers())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const setActiveUserId = React.useCallback((userId) => {
    dispatch(setUserIdAction(userId))
    setVisiblePosts(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const setActiveUserName = React.useCallback((userName) => {
    dispatch(setUserNameAction(userName))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div className="app">
      <div className="app__main">
        <Header />
        <Users users={users} isLoaded={isLoaded} changePostsUserId={setActiveUserId} changePostsUserName={setActiveUserName} />
        <NewUser />
      </div>
      <div className="app__aside">
        {visiblePosts ? <Posts /> : <div className="app__aside__info">Здесь будут отображаться сообщения пользователей</div>}
      </div>
    </div>
  );
}

export default App;
