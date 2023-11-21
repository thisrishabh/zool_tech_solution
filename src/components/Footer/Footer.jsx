import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './footer.css'

import { FaFacebook ,FaGoogle,FaLinkedin,FaTwitter} from "react-icons/fa";


const Footer = () => {
    const [footer,setFooter]=useState('')
    console.log(footer)

    const fetchFooter= async()=>{
        try {
            const response= await axios.get('http://localhost:1337/api/footer?populate=*') 
            setFooter(response.data.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchFooter();
    },[])

  return (
    <>
        
<div className="container-fluid my-5">
<hr className="my-3" />
  <footer
          className="text-center text-lg-start text-black"
          style={{backgroundColor:'#fff'}}
          >
    
    <div className="container p-4 pb-0">
      
      <section className="">
        
        <div className="row">
          { footer && footer.attributes.main&&(
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h4 className="text-uppercase mb-4 font-black-bold">
              {footer.attributes.main.title}
            </h4>
            <p>
              {footer.attributes.main.desc}
            </p>
          </div>
          )}

          <hr className="w-100 clearfix d-md-none" />

          { footer && footer.attributes.footer && footer.attributes.footer.map((item,index)=>(
            <div key={index} className='col ' >
          <div className="col-md-2 col-lg-2 col-xl-3 mx-auto mt-3" style={{width:'170px'}}>
            <h6 className="text-uppercase mb-4 font-black-bold">{item.title}</h6>
            {item.content.map((serv,index)=>(
                <p key={index}>
              <Link className="nav-link text-black">{serv.service}</Link>
            </p>
            ))}
           
          </div>
          </div>
          ))}

         
        </div>
        
      </section>
      

      <hr className="my-3" />

      
      <section className="p-3 pt-0">
        <div className="row d-flex align-items-center">
          
          <div className="col-md-7 col-lg-8 text-center text-md-start">
           
            <div className="">
              © Zool All right reserved. Powered by wisdom of everyone
              
                
            </div>
            
          </div>
          
          <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
            
            <Link
               className="btn btn-outline-light btn-floating m-1 text-black"
              
               role="button"
               ><FaFacebook style={{fontSize:'30px'}} />
              </Link>

           
            <Link
               className="btn btn-outline-light btn-floating m-1 text-black"
               
               role="button"
               ><FaLinkedin style={{fontSize:'30px'}} /></Link>

            
            <Link
               className="btn btn-outline-light btn-floating m-1 text-black"
               
               role="button"
               ><FaGoogle style={{fontSize:'30px'}} /></Link>

            
            <Link
               className="btn btn-outline-light btn-floating m-1 text-black"
               role="button"><FaTwitter style={{fontSize:'30px'}}  /></Link>
          </div>
          
        </div>
      </section>
      
    </div>
   
  </footer>
 
</div>

    </>
  )
}

export default Footer
