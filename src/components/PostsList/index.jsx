import React from 'react';

const PostsList = React.memo(function Posts({posts, postsLoaded}) {
  return (
    <div>
      { postsLoaded ? (
        <ul>
          {posts.map(post => (
            <li 
              className="posts__item"
              key={post.id}
              >
              {post.body}
            </li>))}
        </ul>
      ) : 'Идёт загрузка...'}
    </div>
  );
})

export default PostsList;