import { useEffect } from "react";
import { useMatch, useNavigate, useParams } from "react-router-dom";
import PaddedContainer from "../../components/PaddedContainer";
import PostForm from "../../components/PostForm";
import { useAppDispatch, useAppSelector } from "../../store";
import { fetchPost } from "../../store/reducers/posts.reducer";

const EditPostPage = () => {
  const { postId } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading, currentPost } = useAppSelector(state => ({ loading: state.posts.loading, currentPost: state.posts.post }));

  useEffect(() => {
    if (!currentPost) dispatch(fetchPost(postId!));
  }, []);

  const handleSubmit = (values: { title: string; body: string; }) => {
    console.log('EDITING POST WITH VALUE', values);
    navigate('/posts', { state: { message: 'done' } });
  };

  return (
    <PaddedContainer>
      {
        loading ? (<p>Loading...</p>) : (
          <>
            <h1>Edit Post</h1>
            <PostForm post={currentPost} onSubmit={handleSubmit} />
          </>
        )
      }
    </PaddedContainer>
  )
}

export default EditPostPage;
