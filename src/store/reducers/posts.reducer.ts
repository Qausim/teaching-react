import Axios from "axios";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";


export type Post = {
  id: number;
  title: string;
  userId: number;
  body: string;
};


export type PostsState = {
  loading: boolean;
  posts: Post[];
  post: Post | null;
};

const initialState: PostsState = {
  loading: false,
  posts: [],
  post: null,
};

export const fetchPosts = createAsyncThunk<Post[], number>('fetchPosts', async (page = 1) => {
  const { data } = await Axios.get(`https://jsonplaceholder.typicode.com/posts?page${page}`);
  return data as Post[];
});

export const fetchPost = createAsyncThunk('fetchPost', async (postId: string) => {
  const { data } = await Axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  return data as Post;
});

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.posts = payload;
      })
      .addCase(fetchPost.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.post = payload;
      })
      .addMatcher((action: PayloadAction) => {
        return [fetchPost.pending.type, fetchPosts.pending.type].includes(action.type)
      }, (state) => {
        state.loading = true;
      })
      .addMatcher((action: PayloadAction) => {
        return [fetchPost.rejected.type, fetchPosts.rejected.type].includes(action.type)
      }, (state) => {
        state.loading = false;
      });
  }
});

export const postsReducer = postSlice.reducer;

// type FetchPostsRequestAction = {
//   type: typeof FETCH_POSTS_REQUEST;
// };
// type FetchPostsSuccessAction = {
//   type: typeof FETCH_POSTS_SUCCESS;
//   payload: Post[];
// }
// type FetchPostsFailureAction = {
//   type: typeof FETCH_POSTS_FAILURE;
// };

// export type FetchPostActions = FetchPostsRequestAction | FetchPostsSuccessAction | FetchPostsFailureAction;

// export type PostActions = FetchPostActions;

// export const postsReducer: Reducer<PostsState, PostActions> = (state=initialState, action) => {
//   switch (action.type) {
//     case FETCH_POSTS_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };
//     case FETCH_POSTS_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         posts: action.payload,
//       };
//     case FETCH_POSTS_FAILURE:
//       return {
//         ...state,
//         loading: false,
//       };
//     default:
//       return state;
//   }
// };
