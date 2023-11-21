
import React, { useEffect, useState } from 'react'
import './blog.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Footer from '../Footer/Footer.jsx'
//import { Link } from 'react-router-dom'
//import Footer from '../Footer/Footer.jsx'

const FullBlog = () => {
    const { blog_name } = useParams();
    const [blog, setBlog] = useState('')
    console.log(blog)
    console.log(blog_name)
    const fetchBlog = async () => {
        try {
            const response = await axios.get(`http://localhost:1337/api/blogs?populate=*&&filters[slug][$eq]=${blog_name}`)
            setBlog(response.data.data)

        } catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        fetchBlog();

    })
    return (
        <>
            <div className='container'>

                {blog && blog.map((item) => (
                    <>
                        <div className=' row blog-title text-center'>
                            <h1>{item.attributes.title}</h1>
                        </div>
                        <div className='row'>
                            <img src={item.attributes.img_url} className="blog-img img-fluid" alt="" />
                        </div>

                        <div className='row blog-desc'>
                            {item.attributes.description.split('\n').map((line, lineIndex) => (
                                <React.Fragment key={lineIndex}>
                                    {line.includes('[bold]') ? (
                                        <strong>{line.replace('[bold]', '')}</strong>
                                    ) : (
                                        line
                                    )}
                                    <br />
                                </React.Fragment>
                            ))}
                        </div>
                    </>
                ))}
            </div>
            <Footer />
        </>
    )
}

export default FullBlog
