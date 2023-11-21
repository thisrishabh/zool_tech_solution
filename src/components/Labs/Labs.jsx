import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './labs.css'
import Footer from '../Footer/Footer'

const Labs = () => {
    const [lab, setLab] = useState('')
    console.log(lab)

    const fetchLab = async () => {
        try {
            const response = await axios.get('http://localhost:1337/api/lab?populate=*')
            setLab(response.data.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchLab()
    }, [])

    return (
    <>
            <div className='container-fluid'>
                {lab && lab.attributes.header && (
                    <div className="text-center">

                        <img src={lab.attributes.header.img_url} className="img img-fluid" alt="" />
                        <p className="centered">{lab.attributes.header.title}</p>
                    </div>

                )}
                <div className='lab-main'>
                {lab && lab.attributes.middle && (
                    <>
                    <div className='mid'>
                        <div className='row'>
                            <p><b>Zool Tech Solutions Pvt Ltd / Company / </b>About</p>
                        </div>
                        <div className='row lab_mid-title'><p className=''>{lab.attributes.middle.title}</p></div>
                        <div className='row lab_mid-desc'>
                            <div className="col lab_left_desc ">
                                <p style={{ fontSize: '18px', color: '#666666' }}>{lab.attributes.middle.left_desc}</p>
                            </div>
                            <div class="col lab_right_desc" style={{ marginLeft: '30px' }}>
                                <p style={{ fontSize: '18px', color: '#666666' }}>{lab.attributes.middle.right_desc}</p>
                            </div>
                        </div>
                    </div>
                    <div className='inovation'>
                    <hr className="" /><br></br>
                    <h2>Focus on Innovation</h2>
                    <div className='inovation d-flex flex-wrap '>
                    {lab.attributes.inovation && lab.attributes.inovation.map((item)=>(
                        <div className='inovation-card'>
                            <img src={item.img_url} className='img-fluid inovation-img'></img>
                            <p style={{fontSize:'25px'}}>{item.title}</p>
                            <p style={{fontSize:'18px', whiteSpace: 'pre-line'}}>{item.desc}</p>
                        </div>
                    ))}
                        
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

            export default Labs
