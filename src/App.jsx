import './App.css'
import logo from './assets/logo-white.png'
import {Route, Routes} from "react-router-dom";
import BlogOverview from "./pages/blog-overview/BlogOverview.jsx";
import Error404 from "./pages/error404/Error404.jsx";
import Home from "./pages/home/Home.jsx";
import NewPost from "./pages/new-post/NewPost.jsx";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/blog-overview" element={<BlogOverview/>}/>
                <Route path="/new-post" element={<NewPost/>}/>
                <Route path="/error404" element={<Error404/>}/>
            </Routes>
        </>
    )
}

export default App
