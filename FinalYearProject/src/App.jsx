import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Blog from "./pages/Blog";
import BlogContext from "./context/BlogContext";
import { useState } from "react";

export default function App() {

  const[isAuth,setIsAuth] = useState(false)

  return (
    <BlogContext.Provider value={{isAuth,setIsAuth}} > 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/blog/:id" element={<Blog />} />
      </Routes>
    </BrowserRouter>
    </BlogContext.Provider>
  );
}
