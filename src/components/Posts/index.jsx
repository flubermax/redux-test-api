import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../../redux/asyncActions/fetchPosts'
import { PostsList } from '../../components'

import './Posts.scss'

const Posts = React.memo(function Posts() {
  const dispatch = useDispatch()
  const { posts, userId, userName, postsLoaded } = useSelector(({ postsReducer }) => postsReducer)

  React.useEffect(() => {
    dispatch(fetchPosts(userId))
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId])

  return (
    <div className="posts">
      {posts.length > 0 ? (
        <div>
          <div className="posts__title">Сообщения пользователя <b>{userName}</b>:</div>
          <PostsList postsLoaded={postsLoaded} posts={posts} />
        </div>
      )
      : <div className="posts__empty">Выбранный пользователь ещё не оставил ни одного сообщения.</div>}
    </div>
  );
})

export default Posts;