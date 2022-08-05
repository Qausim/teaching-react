import { useNavigate } from "react-router-dom"
import PaddedContainer from "../../components/PaddedContainer"
import PostForm from "../../components/PostForm"

const AddPostPage = () => {
  const navigate = useNavigate();

  const handleSubmit = ({ title, body }: { title: string; body: string; }) => {
    console.log({title, body});
    navigate('/posts');
  }

  return (
    <PaddedContainer>
      <h1>Add a new post</h1>
      <PostForm onSubmit={handleSubmit} />
    </PaddedContainer>
  )
}

export default AddPostPage
