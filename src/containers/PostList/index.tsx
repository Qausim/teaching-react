import Post from "../../components/Post";
import {  Post as PostType } from "../../store/reducers/posts.reducer";


type PostListProps = {
  loading: boolean;
  posts: PostType[];
};

const PostList = ({ loading, posts}: PostListProps) => {
  return (
    <div>
      {
        loading ? <p>Loading...</p> : (
          <div>
            {
              posts.map((post) => <Post key={(post as PostType).id} post={post} />)
            }
          </div>
        )
      }
    </div>
  )
}

export default PostList
