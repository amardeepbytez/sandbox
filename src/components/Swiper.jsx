import React from 'react'
import { Link } from 'react-router-dom'

const Swiper = () => {
  return (
    <section className="wrapper bg-dark">
      <div className="swiper-container swiper-hero dots-over" data-margin="0" data-autoplay="true" data-autoplaytime="7000" data-nav="true" data-dots="true" data-items="1">
        <div className="swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide bg-overlay bg-overlay-400 bg-dark bg-image" data-image-src="./assets/img/photos/bg7.jpg">
              <div className="container h-100">
                <div className="row h-100">
                  <div className="col-md-10 offset-md-1 col-lg-7 offset-lg-0 col-xl-6 col-xxl-5 text-center text-lg-start justify-content-center align-self-center align-items-start">
                    <h2 className="display-1 fs-56 mb-4 text-white animate__animated animate__slideInDown animate__delay-1s">We bring solutions to make life easier.</h2>
                    <p className="lead fs-23 lh-sm mb-7 text-white animate__animated animate__slideInRight animate__delay-2s">We are a creative company that focuses on long term relationships with customers.</p>
                    <div className="animate__animated animate__slideInUp animate__delay-3s"><Link to="/" className="btn btn-lg btn-outline-white rounded-pill">Read More</Link></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide bg-overlay bg-overlay-400 bg-dark bg-image" data-image-src="./assets/img/photos/bg8.jpg">
              <div className="container h-100">
                <div className="row h-100">
                  <div className="col-md-11 col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center justify-content-center align-self-center">
                    <h2 className="display-1 fs-56 mb-4 text-white animate__animated animate__slideInDown animate__delay-1s">We are trusted by over a million customers.</h2>
                    <p className="lead fs-23 lh-sm mb-7 text-white animate__animated animate__slideInRight animate__delay-2s">Here a few reasons why our customers choose us.</p>
                    <div className="animate__animated animate__slideInUp animate__delay-3s"><Link href="./assets/media/movie.mp4" className="btn btn-circle btn-white btn-play ripple mx-auto mb-5" data-glightbox><i className="icn-caret-right"></i></Link></div>
                  </div>
                  {/* <!--/column --> */}
                </div>
                {/* <!--/.row --> */}
              </div>
              {/* <!--/.container --> */}
            </div>
            <div className="swiper-slide bg-overlay bg-overlay-400 bg-dark bg-image" data-image-src="./assets/img/photos/bg9.jpg">
              <div className="container h-100">
                <div className="row h-100">
                  <div className="col-md-10 offset-md-1 col-lg-7 offset-lg-5 col-xl-6 offset-xl-6 col-xxl-5 offset-xxl-6 text-center text-lg-start justify-content-center align-self-center align-items-start">
                    <h2 className="display-1 fs-56 mb-4 text-white animate__animated animate__slideInDown animate__delay-1s">Just sit and relax.</h2>
                    <p className="lead fs-23 lh-sm mb-7 text-white animate__animated animate__slideInRight animate__delay-2s">We make sure your spending is stress free so that you can have the perfect control.</p>
                    <div className="animate__animated animate__slideInUp animate__delay-3s"><Link to="/" className="btn btn-lg btn-outline-white rounded-pill">Contact Us</Link></div>
                  </div>
                  {/* <!--/column --> */}
                </div>
                {/* <!--/.row --> */}
              </div>
              {/* <!--/.container --> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Swiper