import { Link } from "react-router-dom";
import { Post as PostType } from "../../store/reducers/posts.reducer";
import styles from './post.module.css';

const Post = ({ post }: { post: PostType }) => {
  return (
    <Link to={`/posts/${post.id}`} className={styles.post}>
      <div>
        <h3>{post.title}</h3>
      </div>
    </Link>
  )
}

export default Post;
