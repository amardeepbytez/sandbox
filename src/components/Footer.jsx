import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-dark text-inverse">
    <div className="container py-13 py-md-15">
      <div className="row gy-6 gy-lg-0">
        <div className="col-lg-4">
          <div className="widget">
            <img className="mb-4" src="./assets/img/logo-light.png" srcset="./assets/img/logo-light@2x.png 2x" alt="" />
            <p className="mb-4">© 2023 Sandbox. All rights reserved.</p>
            <nav className="nav social social-white">
              <Link className='social-white-Link' to="/"><i className="uil uil-twitter"></i></Link>
              <Link className='social-white-Link' to="/"><i className="uil uil-facebook-f"></i></Link>
              <Link className='social-white-Link' to="/"><i className="uil uil-dribbble"></i></Link>
              <Link className='social-white-Link' to="/"><i className="uil uil-instagram"></i></Link>
              <Link className='social-white-Link' to="/"><i className="uil uil-youtube"></i></Link>
            </nav>
          </div>
        </div>
        <div className="col-md-4 col-lg-2 offset-lg-2">
          <div className="widget">
            <h4 className="widget-title mb-3 text-white">Need Help?</h4>
            <ul className="list-unstyled mb-0">
              <li><Link to="/">Support</Link></li>
              <li><Link to="/">Get Started</Link></li>
              <li><Link to="/">Terms of Use</Link></li>
              <li><Link to="/">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="col-md-4 col-lg-2">
          <div className="widget">
            <h4 className="widget-title mb-3 text-white">Learn More</h4>
            <ul className="list-unstyled mb-0">
              <li><Link to="/">About Us</Link></li>
              <li><Link to="/">Our Story</Link></li>
              <li><Link to="/">Projects</Link></li>
              <li><Link to="/">Pricing</Link></li>
              <li><Link to="/">Features</Link></li>
            </ul>
          </div>
        </div>
        <div className="col-md-4 col-lg-2">
          <div className="widget">
            <h4 className="widget-title mb-3 text-white">Get in Touch</h4>
            <address>Moonshine St. 14/05 Light City, London, United Kingdom</address>
            <Link to="mailto:first.last@email.com">info@email.com</Link><br /> 00 (123) 456 78 90
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer