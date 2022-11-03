import Axios from "axios";
import { useAppDispatch } from "../..";
import { FETCH_POSTS_FAILURE, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS } from "../../constants/posts.action.types";
import { Post } from '../../reducers/posts.reducer';


export const fetchPosts = (dispatch: ReturnType<typeof useAppDispatch>) => async () => {
  dispatch({ type: FETCH_POSTS_REQUEST });
  try {
    const { data } = await Axios.get('https://jsonplaceholder.typicode.com/posts');
    dispatch({
      type: FETCH_POSTS_SUCCESS,
      payload: data as Post[],
    });
  } catch (error) {
    dispatch({
      type: FETCH_POSTS_FAILURE,
    });
  }
};
