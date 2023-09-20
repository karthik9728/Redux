import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllUsers } from '../users/usersSlice';

const PostAuthor = (props) => {
  const { userId } = props;

  const users = useSelector(selectAllUsers);

  const author = users.find((user) => user.id === userId);

  return (
    <span style={{ color: 'blue' }}>
      {author ? author.name : 'Unknown author'}
    </span>
  );
};

export default PostAuthor;
