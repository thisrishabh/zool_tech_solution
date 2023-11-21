import React, { useEffect, useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import './about.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js'
import axios from 'axios';
import Footer from '../Footer/Footer.jsx';


const About = () => {
    const [about, setAbout] = useState('');
    console.log(about)
    const fetchAbout = async () => {
        try {
            const response = await axios.get('http://localhost:1337/api/about?populate=*');
            setAbout(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchAbout();
    }, []);
    return (
        <>
            <div className='container-fluid'>
                {about && about.attributes.header_img && (
                    <div className="text-center">

                        <img src={about.attributes.header_img} className="img img-fluid" alt="" />
                        <p className="centered">{about.attributes.header_title}</p></div>
                )}
                <div className='about-main'>
                    {about && about.attributes.middle && about.attributes.gallery && (
                        <>
                            <div className='mid'>
                                <div className='row'>
                                    <p><b>Zool Tech Solutions Pvt Ltd / Company / </b>About</p>
                                </div>
                                <div className='row mid-title'><p className=''>{about.attributes.middle.title}</p></div>
                                <div className='row mid-desc'>
                                    <div className="col left_desc ">
                                        <p style={{ fontSize: '16px', color: '#666666' }}>{about.attributes.middle.left_desc}</p>
                                    </div>
                                    <div class="col right_desc" style={{ marginLeft: '30px' }}>
                                        <p style={{ fontSize: '16px', color: '#666666' }}>{about.attributes.middle.right_desc}</p>
                                    </div>
                                </div>

                            </div>
                            <div className='team'>
                                <div className='row img-title'>
                                    <p style={{ fontSize: '40px' }} className=''>{about.attributes.gallery.title}</p>
                                </div>
                                <div style={{ height: '2px', width: '100%', backgroundColor: 'black' }}></div>
                                <div className='row img-sub-title'>
                                    <p style={{ fontSize: '30px' }}>{about.attributes.gallery.sub_title}</p>
                                </div>
                                <div className='row justify-content-center'>
                                    {about.attributes.gallery && (
                                        about.attributes.gallery.img_url.map((img, index) => (
                                            <div className="col-md-3 mb-4 " key={index}>
                                            <div className="card" style={{width: '14rem', height:'300px'}}>
                                                <img src={img.img} className="card-img-top team-img" alt="..." />
                                                    <div className="card-body">
                                                        <p className="card-text text-center">{img.name}</p>
                                                        <p className="card-text text-center">{img.designation}</p>
                                                    </div>
                                            </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                        </>
                    )}
                </div>

            </div>
            <Footer />
        </>
    )
}

export default About
