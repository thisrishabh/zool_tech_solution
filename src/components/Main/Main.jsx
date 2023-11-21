import React, { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Footer from '../Footer/Footer.jsx';


const Main = () => {
    const [home, setHome] = useState('');

    const fetchHome = async () => {
        try {
            const response = await axios.get('http://localhost:1337/api/home?populate=*');
            setHome(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchHome();
    }, []);

    return (
        <>
    
        <div className="container-fluid">
            <section>
                <div className="rt-container">
                    <div className="col-rt-12">
                        <div id="slider">
                            <div className="slides">
                                {home && home.attributes && home.attributes.header && (
                                    home.attributes.header.map((item, index) => (
                                        <div key={index} className="slider">
                                            <div className="legend"></div>
                                            <div className="content">
                                                <div className="content-txt">
                                                    <h1>{item.title}</h1>
                                                    <h5>{item.sub_title}</h5>
                                                </div>
                                            </div>
                                            <div className="image">
                                                <img src={item.img_url} alt="" />
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                            <div className="switch">
                                <ul>
                                    <li>
                                        <div className="on"></div>
                                    </li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {home && home.attributes && home.attributes.main && home.attributes.middle && home.attributes.gallery && (
                <div className="main">
                    <div className="middle">
                    
                        <div className="text-center b1">
                            <h1 className="display-4 b1" style={{ fontSize: '50px' }}>{home.attributes.main.title}</h1>
                        </div>
                        <div className="desc">
                            <p className="lead" style={{ fontSize: '16px' }}>{home.attributes.main.desc}</p>
                        </div>
                        <hr className="my-3" />
                        <div className="text-center">
                            <h2 className="display-5" style={{ fontSize: '30px', color: '#7A7A7A' }}>{home.attributes.main.sub_title}</h2>
                        </div>
                    
                        <div className="row text">
                            <div className="col-lg-6 left-side">
                                <h2>{home.attributes.middle[0].title}</h2>
                                <hr className="my-4" style={{ width: '300px' }} />
                                <h3 style={{ fontSize: '25px', color: '#7A7A7A' }}>Featured In & Awards</h3>
                            </div>
                            <div className="col-lg-6 right-side">
                                <div>
                                    <img src={home.attributes.middle[0].img_url} alt="" className="img-fluid" />
                                    <p>{home.attributes.middle[0].desc}</p>
                                </div>
                                <div>
                                    <img src={home.attributes.middle[1].img_url} alt="" className="img-fluid" />
                                    <p>{home.attributes.middle[1].desc}</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5"></div>
                        <div className="gallery ">
                        <div className="gal-title">
                            <h2 className="text-center mb-4">{home.attributes.gallery.title}</h2>
                        </div>
                        <hr className="my-4" />
                        <div>
                            <h2 className="text-center" style={{ fontSize: '25px', color: '#7A7A7A' }}>{home.attributes.gallery.sub_title}</h2>
                        </div>
                        <div className="row">
                            {home.attributes.gallery.img_url && (
                                home.attributes.gallery.img_url.map((img, index) => (
                                    <div key={index} className="col-lg-4 col-md-6 col-sm-12 gal-img">
                                        <img className="img-fluid" src={img.img} alt="" />
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    </div>
                   
                </div>
            )}
        </div>
        <Footer />
        </>
    );
};

export default Main;
