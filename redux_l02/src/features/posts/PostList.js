import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllPost } from './postsSlice';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';

const PostList = () => {
  const posts = useSelector(selectAllPost);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderPosts = orderedPosts.map((post) => {
    return (
      <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <TimeAgo timestamp={post.date} />
        <PostAuthor userId={post.userId} />
        <ReactionButtons post={post} />
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
