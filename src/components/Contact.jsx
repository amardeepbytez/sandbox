import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <section className="wrapper bg-light">
      <div className="container pt-19 pb-14 pt-md-20 pb-md-16">
        <div className="row gx-md-8 gx-xl-12 gy-10 align-items-center">
          <div className="col-md-8 col-lg-6 offset-lg-0 col-xl-5 offset-xl-1 position-relative">
            <div className="shape bg-dot primary rellax w-17 h-21" data-rellax-speed="1" style={{top:"-2rem", left:"-1.4rem"}}></div>
            <figure className="rounded"><img src="./assets/img/photos/about4.jpg" srcset="./assets/img/photos/about4@2x.jpg 2x" alt="" /></figure>
          </div>
          <div className="col-lg-6">
            <img src="./assets/img/icons/lineal/telemarketer.svg" className="svg-inject icon-svg icon-svg-md mb-4" alt="" />
            <h2 className="display-4 mb-8">Convinced yet? Let's make something great together.</h2>
            <div className="d-flex flex-row">
              <div>
                <div className="icon text-primary fs-28 me-6 mt-n1"> <i className="uil uil-location-pin-alt"></i> </div>
              </div>
              <div>
                <h5 className="mb-1">Address</h5>
                <address>Moonshine St. 14/05 Light City, <br className="d-none d-md-block" />London, United Kingdom</address>
              </div>
            </div>
            <div className="d-flex flex-row">
              <div>
                <div className="icon text-primary fs-28 me-6 mt-n1"> <i className="uil uil-phone-volume"></i> </div>
              </div>
              <div>
                <h5 className="mb-1">Phone</h5>
                <p>00 (123) 456 78 90</p>
              </div>
            </div>
            <div className="d-flex flex-row">
              <div>
                <div className="icon text-primary fs-28 me-6 mt-n1"> <i className="uil uil-envelope"></i> </div>
              </div>
              <div>
                <h5 className="mb-1">E-mail</h5>
                <p className="mb-0"><Link to="mailto:sandbox@email.com" className="link-body">sandbox@email.com</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact