/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
// import { RootState, AppThunk } from '../../app/store';
import { Post } from '../../types/Post';
import { Comment } from '../../types/Comment';
import { User } from '../../types/User';

export interface PostsState {
  users: User[];
  selectedPost: Post;
  selectedUser: User;
  userPosts: Post[] | null;
  userComments: Comment[] | null;
}

export const initialState: PostsState = {
  users: [],
  selectedPost: {
    id: 0,
    userId: 0,
    title: '',
    body: '',
  },
  selectedUser: {
    id: 0,
    name: '',
    email: '',
    phone: '',
  },
  userPosts: null,
  userComments: null,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },

    setSelectedPost: (state, action: PayloadAction<Post>) => {
      state.selectedPost = action.payload;
    },

    setSelectedUser: (state, action: PayloadAction<User>) => {
      state.selectedUser = action.payload;
    },

    setUserPosts: (state, action: PayloadAction<Post[]>) => {
      state.userPosts = action.payload;
    },

    setPostComments: (state, action: PayloadAction<Comment[]>) => {
      state.userComments = action.payload;
    },
  },
});

export const {
  setUsers,
  setSelectedPost,
  setSelectedUser,
  setUserPosts,
  setPostComments,
} = postsSlice.actions;

export default postsSlice.reducer;
