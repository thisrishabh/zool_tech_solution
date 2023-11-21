import React from 'react'
import {Link} from 'react-router-dom'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js'
import './navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid nav-bar">
    <Link className="navbar-brand" to="/"><img src="https://zool.in/wp-content/uploads/2020/01/zool-logo-black-brand.png" alt=""></img></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0  ">
      <li className="nav-item dropdown ">
          <Link className="nav-link dropdown-toggle" to="#" role="button"   data-bs-display="static" aria-expanded="false">
            SERVICES
          </Link>
          <ul className="dropdown-menu show-on-hover">
            <li><Link className="dropdown-item" to="/labs">Labs</Link></li>
            <li><Link className="dropdown-item" to="#">eCommerce Portals</Link></li>
          
            <li><Link className="dropdown-item" to="#">Web Peoducts</Link></li>
            <li><Link className="dropdown-item" to="#">Cloud-Solutions</Link></li>
            <li><Link className="dropdown-item" to="#">Mobile apps</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown ">
          <Link className="nav-link dropdown-toggle" to="#" role="button"   data-bs-display="static" aria-expanded="false">
            SOLUTIONS
          </Link>
          <ul className="dropdown-menu show-on-hover">
            <li><Link className="dropdown-item" to="#">UI Engineering</Link></li>
            <li><Link className="dropdown-item" to="#">Mobile Hybrid Development</Link></li>
          </ul>
        </li>
        
        <li className="nav-item dropdown ">
          <Link className="nav-link dropdown-toggle" to="#" role="button"  data-bs-display="static" aria-expanded="false">
            COMPANY
          </Link>
          <ul className="dropdown-menu show-on-hover">
            <li><Link className="dropdown-item" to="/about">About</Link></li>
            <li><Link className="dropdown-item" to="#">Partners</Link></li>
            <li><Link className="dropdown-item" to="#">Clients</Link></li>
            <li><Link className="dropdown-item" to="#">Jobs</Link></li>
            <li><Link className="dropdown-item" to="/blogs">Blogs</Link></li>
          </ul>
        </li>
        <li className="nav-item ">
          <Link className="nav-link" to="/contact">CONTACT</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
