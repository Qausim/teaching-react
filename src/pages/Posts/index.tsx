import { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import Button from '../../components/Button';
import PaddedContainer from '../../components/PaddedContainer';
import PostList from '../../containers/PostList';
import { useAppDispatch, useAppSelector } from '../../store';
import { fetchPosts as fetchPostsAction } from '../../store/reducers/posts.reducer';

const PostsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageNumber = parseInt(searchParams.get('page') || '1', 10);
  const dispatch = useAppDispatch();
  const { loading, posts } = useAppSelector((state) => state.posts);
  // const location = useLocation();
  // console.log('STATE', location.state); // access data passed using navigate

  const fetchPosts = () => {
    dispatch(fetchPostsAction(pageNumber));
  }

  useEffect(() => {
    if (!posts.length) fetchPosts();
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [pageNumber]);

  const handlePrevClick = () => {
    if (pageNumber > 1) {
      setSearchParams({page: (pageNumber - 1).toString()});
    }
  }

  const handleNextClick = () => {
    setSearchParams({page: (pageNumber + 1).toString()});
  }

  return (
    <PaddedContainer>
      <h1>Posts</h1>
      {posts.length && <PostList loading={loading} posts={posts} />}
      <Button.Link href='/posts/new'>
        + Add New
      </Button.Link>
      <br />
      <br />
      <br />
      <Button.Primary onClick={handlePrevClick}>Prev</Button.Primary>
      {pageNumber}
      <Button.Primary onClick={handleNextClick}>Next</Button.Primary>
    </PaddedContainer>
  );
}

export default PostsPage
