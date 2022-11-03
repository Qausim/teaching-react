import { useEffect } from "react";
import { useParams } from "react-router-dom"
import Button from "../../components/Button";
import PaddedContainer from "../../components/PaddedContainer";
import { useAppDispatch, useAppSelector } from "../../store";
import { fetchPost } from "../../store/reducers/posts.reducer";

const PostPage = () => {
  const { postId } = useParams<Record<'postId', string>>();
  const dispatch = useAppDispatch();
  const { loading, post } = useAppSelector(state => ({ loading: state.posts.loading, post: state.posts.post }));

  useEffect(() => {
    dispatch(fetchPost(postId!));
  }, []);

  return (
    <PaddedContainer>
      {
        loading ? (
          <p>Loading</p>
        ) : post && (
          <div>
            <h1>{post.title}</h1>
            <div>{post.body}</div>
            <Button.Link href={`/posts/${postId}/edit`}>Edit</Button.Link>
          </div>
        )
      }
    </PaddedContainer>
  );
}

export default PostPage
