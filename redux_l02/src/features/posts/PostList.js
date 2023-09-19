import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllPost } from './postsSlice';

const PostList = () => {
  const posts = useSelector(selectAllPost);

  const renderPosts = posts.map((post) => {
    return (
      <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </article>
    );
  });

  return (
    <section>
      <h2>Posts</h2>
      {renderPosts}
    </section>
  );
};

export default PostList;
