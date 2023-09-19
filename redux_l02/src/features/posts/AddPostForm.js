import React, { useState } from 'react';
import { postAdded } from './postsSlice';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

const AddPostForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();
    const post = {
      id: nanoid(),
      title: title,
      content: content,
    };

    dispatch(postAdded(title, content));

    setTitle('');
    setContent('');
  };

  return (
    <section>
      <h2>Add New Post</h2>
      <form onSubmit={submitHandler}>
        <label htmlFor="postTitle">Title</label>
        <input
          type="text"
          id="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content</label>
        <input
          type="text"
          id="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="submit">Add</button>
      </form>
    </section>
  );
};

export default AddPostForm;
