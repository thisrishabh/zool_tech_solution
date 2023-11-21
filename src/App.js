import React from 'react'

import Main from './components/Main/Main'
import { Route,Routes } from 'react-router-dom'
import About from './components/About/About'
import Navbar from './components/Navbar/navbar'
import Blog from './components/Blog/Blog'
import FullBlog from './components/Blog/FullBlog'
import Contact from './components/Contact/Contact'
import Labs from './components/Labs/Labs'

const App = () => {
  return (
    <>
     <Navbar></Navbar>
    <Routes>
    <Route exact path='/' element={<Main />}></Route>
      <Route exact path="/about" element={<About />}></Route>
      <Route exact path="/blogs" element={<Blog />}></Route>
      <Route exact path="/contact" element={<Contact />}></Route>
      <Route exact path="/labs" element={<Labs />}></Route>
      <Route exact path="/blog/:blog_name" element={<FullBlog />}></Route>
    </Routes>
    </>
  )
}

export default App
