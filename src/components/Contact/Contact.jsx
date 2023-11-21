import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './contact.css'
import Footer from '../Footer/Footer'

const Contact = () => {
    const [contact, setContact] = useState('')
    console.log({ contact: contact })
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    console.log(name)



    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:1337/api/contact-forms',
                {
                    data: {
                        name,
                        email,
                        phone,
                        subject,
                        message
                    }
                }
            );
            console.log(response); // Handle success response as needed
        } catch (error) {
            console.error(error); // Handle error
        }
    };

    const fetchContact = async () => {
        try {
            const response = await axios.get('http://localhost:1337/api/contact?populate=*')
            setContact(response.data.data)
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        fetchContact();
    }, [])
    return (
        <>
            <div className='container-fluid'>
                {contact && contact.attributes.header && (
                    <div className="text-center">

                        <img src={contact.attributes.header.img_url} className="img img-fluid" alt="" />
                        <p className="centered">{contact.attributes.header.title}</p>
                    </div>
                )}

                <div className='contact-main'>
                    {contact && contact.attributes.main &&
                        (
                            <>
                                <div className='row '>
                                    <p style={{ fontSize: '40px' }} className=''>{contact.attributes.main.title}</p>
                                </div>
                                {/* <div style={{ height: '2px', width: '100%', backgroundColor: 'black' }}></div> */}
                                <hr className="my-3" />
                                <div className='row '>
                                    <p style={{ fontSize: '30px' }}>{contact.attributes.main.sub_title}</p>
                                </div>
                                <div className='row'>
                                    <div className='col contact-address'>
                                        <p>{contact.attributes.region}</p>
                                        <pre>{contact.attributes.address}</pre><br></br>
                                        <h5>Email: {contact.attributes.email}</h5>
                                    </div>
                                    <div className='col contact-form'>
                                        <h1>Write to us</h1>
                                        <br></br>
                                        <form onSubmit={handleSubmit}>
                                            <div className="row">

                                                <div className="col form-floating mb-3">
                                                    <input type="text" className="form-control" id="name" value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                    />
                                                    <label for="floatingInput">Name*</label>
                                                </div>
                                                <div className="col form-floating">
                                                    <input type="email" className="form-control" id="email" value={email}
                                                        onChange={(e) => setEmail(e.target.value)} />
                                                    <label for="floatingInput">Email*</label>
                                                </div>
                                            </div>
                                            <br></br>
                                            <div className="row">

                                                <div className="col form-floating mb-3">
                                                    <input type="text" className="form-control" id="phone" value={phone}
                                                        onChange={(e) => setPhone(e.target.value)} />
                                                    <label htmlFor="floatingInput">Phone*</label>
                                                </div>
                                                <div className="col form-floating mb-3">
                                                    <input type="text" className="form-control" id="subject" value={subject}
                                                        onChange={(e) => setSubject(e.target.value)} />
                                                    <label htmlFor="floatingInput">Subject</label>
                                                </div>
                                            </div><br></br>
                                            <div className='row'>
                                                <div className="form-floating">
                                                    <textarea className="form-control" placeholder="" id="message" value={message}
                                                        onChange={(e) => setMessage(e.target.value)}></textarea>
                                                    <label for="floatingTextarea2">Message</label>
                                                </div>
                                            </div>
                                            <br></br>
                                            <br>
                                            </br>
                                            <div className='row'>
                                                <div class="d-grid gap-2">
                                                    <button className="btn btn-dark" type="submit">Submit</button>

                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>


                            </>


                        )}
                    {contact && contact.attributes.location && (
                        <>
                        
                            <div style={{ width: '100%', height: '400px', marginTop: '20px' }}>
                                <iframe
                                    title='Google Map'
                                    width='100%'
                                    height='100%'
                                    
                                    style={{ border: 0 }}
                                    src=" https://www.google.com/maps/place/Zool+Tech+Solutions+Pvt+Ltd/@12.9077767,77.6420701,17z/data=!3m2!4b1!5s0x3bae149a294433a1:0xc8b4114b6dd90635!4m6!3m5!1s0x3bae140561555523:0x773c34b354e29614!8m2!3d12.9077767!4d77.644645!16s%2Fg%2F1hc1__yry?entry=ttu"
                                    allowFullScreen
                                ></iframe>
                                </div>
                            
                            </>
                                )}
                                {/* {`https://www.google.com/maps/embed/v1/place?q=${contact.attributes.location.coordinates
                                        .lat},${contact.attributes.location.coordinates.lng}&key=AIzaSyBIPHly4SA7Oewb6nByae3EFBRsPTEjC0w`} */}
                           
                        </div>
            </div>
                <Footer />
            </>
            )
}

            export default Contact
