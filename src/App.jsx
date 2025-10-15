import './App.css'
import logo from './assets/logo-white.png'
import {Route, Routes} from "react-router-dom";
import BlogOverview from "./pages/blog-overview/BlogOverview.jsx";
import Error404 from "./pages/error404/Error404.jsx";
import Home from "./pages/home/Home.jsx";
import NewPost from "./pages/new-post/NewPost.jsx";
import Navigation from "./components/navigation/Navigation.jsx";
import BlogpostDetail from "./pages/BlogpostDetail/BlogpostDetail.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/blog-overview" element={<BlogOverview/>}/>
                <Route path="/new-post" element={<NewPost/>}/>
                <Route path="/error404" element={<Error404/>}/>
                <Route path="/posts/:id" element={<BlogpostDetail/>}/>
                <Route path="*" element={<Error404/>}/>
            </Routes>
            <Footer/>
        </>
    )
}

export default App
