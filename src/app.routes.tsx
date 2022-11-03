import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddPostPage from "./pages/AddPost";
import ChatPage from "./pages/Chat";
import EditPostPage from "./pages/EditPost";
import HomePage from "./pages/Home";
import PostPage from "./pages/Post";
import PostsPage from "./pages/Posts";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="chat" element={<ChatPage />} />
        <Route path="posts" element={<PostsPage />} />
        <Route path="posts/:postId" element={<PostPage />} />
        <Route path="posts/new" element={<AddPostPage />} />
        <Route path="posts/:postId/edit" element={<EditPostPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
