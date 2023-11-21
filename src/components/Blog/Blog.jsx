import React, { useEffect, useState } from 'react'
import './blog.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer.jsx'

const Blog = () => {
    const [blog, setBlog] = useState('')
    const [recent, setRecentBlog] = useState('')
    console.log(recent)
    console.log(blog)
    const fetchBlog = async () => {
        try {
            const response = await axios.get('http://localhost:1337/api/blogs?populate=*&sort=id:desc')
            setBlog(response.data.data)
            //sort=id:desc&pagination[start]=0&pagination[limit]=3
        } catch (error) {
            console.log(error)
        }

    }
    const fetchRecent = async () => {
        try {
            const data = await axios.get('http://localhost:1337/api/recent-blogs?populate=*^&sort=id:desc')
            setRecentBlog(data.data.data)

        } catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        fetchBlog()

    }, [blog])
    useEffect(() => {
        fetchRecent()

    }, [])
    return (
        <>
            <div className='container-fluid'>

                <div className="text-center">

                    <img src="https://zool.in/wp-content/uploads/2016/12/blogs.jpg" className="img img-fluid" alt="" />
                    <p className="centered">Blogs</p>
                </div>

                <div className='blog-main'>
                    <div className='row'>
                        <p><b>Zool Tech Solutions Pvt Ltd / Company / </b>blog</p>
                    </div>
                    <div className='row'>
                        <div className='col col-lg-2 blog d-flex flex-wrap'>
                            {blog && blog.map((item, index) => (

                                <div key={index} className='blog-card text-center '>
                                    <img src={item.attributes.img_url} className="img-fluid" alt="" />
                                    <Link className='nav-link blog-link' to={`/blog/${item.attributes.slug}`}> <p className=''>{item.attributes.title}</p></Link>

                                </div>

                            ))}
                        </div>

                        <div className='col recent-blog'>
                        <div style={{borderBottom:'1px solid #A4A4A4'}}>
                            <h4>RECENT BLOGS</h4>
                            </div><br></br>
                            {recent && recent.map((item) => (
                                <div>
                                    <p>{item.attributes.name}</p>
                                </div>
                            ))}
                        </div>


                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Blog
