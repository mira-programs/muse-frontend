// Router.....................
import { BrowserRouter, Route, Routes } from "react-router-dom"

// Components ................
import Header from "../components/Header"
import Footer from "../components/Footer"

// Pages....................
import Homepage from '../pages/Homepage'
import PostDetail from '../pages/PostDetail'
import Muser from '../pages/Muser'
import Post from '../pages/MuserPosts'
import CategoryPost from '../pages/CategoryPost'
import CreatePost from '../pages/CreatePost'
import DashBoard from '../pages/DashBoard'
import DeletePosts from '../pages/DeletePosts'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login'
import Logout from '../pages/Logout'
import Register from '../pages/Register'
import Profile from '../pages/Profile'



export default function Router() {
  return (
    <>
    <BrowserRouter>
        <Header />
         <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/muser" element={<Muser />} />
            <Route path="/posts/user/:id" element={<Post />} />
            <Route path="/posts/categories/:category" element={<CategoryPost/>} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/myposts/:id" element={<DashBoard />} />
            {/* <Route path="/" element={<DeletePosts />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/posts/:id" element={<PostDetail />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile/:id" element={<Profile/>} />
            <Route path="*" element={<ErrorPage />} />
         </Routes>
        <Footer />
    </BrowserRouter>
    </>
  )
}
