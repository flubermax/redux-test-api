import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../../redux/asyncActions/fetchPosts'

import './Posts.scss'

const Posts = React.memo(function Posts() {
  const dispatch = useDispatch()
  const { posts, userId, userName } = useSelector(({ postsReducer }) => postsReducer)

  React.useEffect(() => {
    dispatch(fetchPosts(userId))
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId])

  return (
    <div className="posts">
      {posts.length > 0 ? (
        <div>
          <div className="posts__title">Сообщения пользователя <b>{userName}</b>:</div>
          <ul>
            {posts.map(post => (
              <li 
                className="posts__item"
                key={post.id}
                >
                {post.body}
              </li>))}
          </ul>          
        </div>
      )
      : <div className="posts__empty">Выбранный пользователь ещё не оставил ни одного сообщения.</div>}
    </div>
  );
})

export default Posts;