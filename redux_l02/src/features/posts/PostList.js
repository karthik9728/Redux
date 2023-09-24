import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectAllPost,
  getPostsStatus,
  getPostsError,
  fetchPosts,
} from './postsSlice';
import PostsExcerpt from './PostsExcerpt';

const PostList = () => {
  const dispatch = useDispatch();

  const posts = useSelector(selectAllPost);
  const postsStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  useEffect(() => {
    if (postsStatus === 'idle') {
      dispatch(fetchPosts());
    }
  }, [postsStatus, dispatch]);

  let content;

  if (postsStatus === 'loading') {
    content = <p>Loading....</p>;
  } else if (postsStatus === 'succeeded') {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));

    content = orderedPosts.map((post) => (
      <div className="">
        <PostsExcerpt key={post.id} post={post} />
      </div>
    ));
  } else if (postsStatus === 'failed') {
    content = <p>{error}</p>;
  }
  return (
    <section className="mt-6">
      <div className="grid grid-cols-4 justify-center items-start gap-2 pt-10">
        {content}
      </div>
    </section>
  );
};

export default PostList;
