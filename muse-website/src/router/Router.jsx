// Router.....................
import { BrowserRouter, Route, Routes } from "react-router-dom"

// Components ................
import HeaderContent from "../components/HeaderContent/HeaderContent"
import Footer from "../components/Footer/Footer"

// Pages....................
import LandingPage from '../pages/LandingPage/LandingPage'
import Homepage from '../pages/Homepage/Homepage'
import PostDetail from '../pages/PostDetail'
import Muser from '../pages/Muser'
import Post from '../pages/MuserPosts'
import CategoryPost from '../pages/CategoryPost'
import CreatePost from '../pages/Create Post/CreatePost'
import DashBoard from '../pages/DashBoard'
import DeletePosts from '../pages/DeletePosts'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login'
import Logout from '../pages/Logout'
import Register from '../pages/Register'
import Profile from '../pages/Profile/Profile'
import Messages from '../pages/Messages/Messages'



export default function Router() {
  return (
    <>
    <BrowserRouter>
      <HeaderContent />
         <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/muser" element={<Muser />} />
            <Route path="/posts/user/:id" element={<Post />} />
            <Route path="/posts/categories/:category" element={<CategoryPost/>} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/myposts/:id" element={<DashBoard />} />
            <Route path="/posts/:id/delete" element={<DeletePosts />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/posts/:id" element={<PostDetail />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile/:id" element={<Profile/>} />
            <Route path="/messages" element={<Messages />} />
            <Route path="*" element={<ErrorPage />} />
         </Routes>
        <Footer />
    </BrowserRouter>
    </>
  )
}
