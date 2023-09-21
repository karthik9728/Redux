import React from 'react';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';

const PostsExcerpt = ({ post }) => {
  return (
    <article className="border border-gray-900 p-2">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <TimeAgo timestamp={post.date} />
      <PostAuthor userId={post.userId} />
      <ReactionButtons post={post} />
    </article>
  );
};

export default PostsExcerpt;
