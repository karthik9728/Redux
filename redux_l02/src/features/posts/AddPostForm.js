import React, { useState } from 'react';
import { postAdded } from './postsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllUsers } from '../users/usersSlice';
import { addNewPost } from './postsSlice';

const AddPostForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');
  const [addRequestStatus, setAddRequestStatus] = useState('idle');

  //getting users from store
  const users = useSelector(selectAllUsers);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const canSave =
    [title, content, userId].every(Boolean) && addRequestStatus === 'idle';

  const submitHandler = (e) => {
    e.preventDefault();

    if (canSave) {
      try {
        setAddRequestStatus('pending');
        dispatch(addNewPost({ title, body: content, userId })).unwrap();

        setTitle('');
        setContent('');
        setUserId('');
      } catch (error) {
        console.error('Failder to save the post', error);
      } finally {
        setAddRequestStatus('idle');
      }
    }
  };

  const usersOptions = users.map((user) => {
    return (
      <option key={user.id} value={user.id}>
        {user.name}
      </option>
    );
  });

  return (
    <section>
      <h2>Add New Post</h2>
      <form
        onSubmit={submitHandler}
        className="flex flex-col justify-center items-center mt-5"
      >
        <label htmlFor="postTitle">Title</label>
        <input
          type="text"
          id="postTitle"
          value={title}
          className="p-2 border border-gray-300 mb-2"
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content</label>
        <input
          type="text"
          id="postContent"
          value={content}
          className="p-2 border border-gray-300 mb-2"
          onChange={onContentChanged}
        />
        <select
          id="postAuthor"
          className="p-2 border border-gray-600 mb-2"
          value={userId}
          onChange={onAuthorChanged}
        >
          <option value="" selected disabled>
            Select Author
          </option>
          {usersOptions}
        </select>
        <button
          type="submit"
          disabled={!canSave}
          className="px-8 py-2 p-2 bg-green-400 text-white rounded-lg hover:bg-green-800 duration-500 cursor-pointer"
        >
          Add
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
