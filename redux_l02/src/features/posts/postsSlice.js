import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    title: 'Learning Redux Toolkit',
    content: "I've heard good things about redux toolkit",
  },
  {
    id: 2,
    title: 'Slice..',
    content: 'Slice is easy way to maintain gobal state',
  },
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title: title,
            content: content,
          },
        };
      },
    },
  },
});

export const selectAllPost = (state) => state.posts;

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
