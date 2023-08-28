import React from 'react'
import { Link } from 'react-router-dom'

const Team = () => {
  return (
    <section className="wrapper bg-light">
      <div className="container py-14 py-md-16">
        <div className="row mb-3">
          <div className="col-md-10 col-xl-9 col-xxl-7 mx-auto text-center">
            <img src="./assets/img/icons/lineal/team.svg" className="svg-inject icon-svg icon-svg-md mb-4" alt="" />
            <h2 className="display-4 mb-3 px-lg-14">Save your time and money by choosing our professional team.</h2>
          </div>
        </div>
        <div className="position-relative">
          <div className="shape rounded-circle bg-soft-yellow rellax w-16 h-16" data-rellax-speed="1" style={{bottom: "0.5rem", right: "-1.7rem"}}></div>
          <div className="shape rounded-circle bg-line red rellax w-16 h-16" data-rellax-speed="1" style={{top: "0.5rem", left:"-1.7rem"}}></div>
          <div className="swiper-container dots-closer mb-6" data-margin="0" data-dots="true" data-items-xxl="4" data-items-lg="3" data-items-md="2" data-items-xs="1">
            <div className="swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="item-inner">
                    <div className="card">
                      <div className="card-body">
                        <img className="rounded-circle w-15 mb-4" src="./assets/img/avatars/te1.jpg" srcset="./assets/img/avatars/te1@2x.jpg 2x" alt="" />
                        <h4 className="mb-1">Coriss Ambady</h4>
                        <div className="meta mb-2">Financial Analyst</div>
                        <p className="mb-2">Fermentum massa justo sit amet risus morbi leo.</p>
                        <nav className="nav social mb-0">
                          <Link to="/"><i className="uil uil-twitter"></i></Link>
                          <Link to="/"><i className="uil uil-facebook-f"></i></Link>
                          <Link to="/"><i className="uil uil-dribbble"></i></Link>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="item-inner">
                    <div className="card">
                      <div className="card-body">
                        <img className="rounded-circle w-15 mb-4" src="./assets/img/avatars/te2.jpg" srcset="./assets/img/avatars/te2@2x.jpg 2x" alt="" />
                        <h4 className="mb-1">Cory Zamora</h4>
                        <div className="meta mb-2">Marketing Specialist</div>
                        <p className="mb-2">Fermentum massa justo sit amet risus morbi leo.</p>
                        <nav className="nav social mb-0">
                          <Link to="/"><i className="uil uil-twitter"></i></Link>
                          <Link to="/"><i className="uil uil-facebook-f"></i></Link>
                          <Link to="/"><i className="uil uil-dribbble"></i></Link>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="item-inner">
                    <div className="card">
                      <div className="card-body">
                        <img className="rounded-circle w-15 mb-4" src="./assets/img/avatars/te3.jpg" srcset="./assets/img/avatars/te3@2x.jpg 2x" alt="" />
                        <h4 className="mb-1">Nikolas Brooten</h4>
                        <div className="meta mb-2">Sales Manager</div>
                        <p className="mb-2">Fermentum massa justo sit amet risus morbi leo.</p>
                        <nav className="nav social mb-0">
                          <Link to="/"><i className="uil uil-twitter"></i></Link>
                          <Link to="/"><i className="uil uil-facebook-f"></i></Link>
                          <Link to="/"><i className="uil uil-dribbble"></i></Link>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="item-inner">
                    <div className="card">
                      <div className="card-body">
                        <img className="rounded-circle w-15 mb-4" src="./assets/img/avatars/te4.jpg" srcset="./assets/img/avatars/te4@2x.jpg 2x" alt="" />
                        <h4 className="mb-1">Jackie Sanders</h4>
                        <div className="meta mb-2">Investment Planner</div>
                        <p className="mb-2">Fermentum massa justo sit amet risus morbi leo.</p>
                        <nav className="nav social mb-0">
                          <Link to="/"><i className="uil uil-twitter"></i></Link>
                          <Link to="/"><i className="uil uil-facebook-f"></i></Link>
                          <Link to="/"><i className="uil uil-dribbble"></i></Link>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="item-inner">
                    <div className="card">
                      <div className="card-body">
                        <img className="rounded-circle w-15 mb-4" src="./assets/img/avatars/te5.jpg" srcset="./assets/img/avatars/te5@2x.jpg 2x" alt="" />
                        <h4 className="mb-1">Laura Widerski</h4>
                        <div className="meta mb-2">Sales Specialist</div>
                        <p className="mb-2">Fermentum massa justo sit amet risus morbi leo.</p>
                        <nav className="nav social mb-0">
                          <Link to="/"><i className="uil uil-twitter"></i></Link>
                          <Link to="/"><i className="uil uil-facebook-f"></i></Link>
                          <Link to="/"><i className="uil uil-dribbble"></i></Link>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="item-inner">
                    <div className="card">
                      <div className="card-body">
                        <img className="rounded-circle w-15 mb-4" src="./assets/img/avatars/te6.jpg" srcset="./assets/img/avatars/te6@2x.jpg 2x" alt="" />
                        <h4 className="mb-1">Tina Geller</h4>
                        <div className="meta mb-2">Financial Analyst</div>
                        <p className="mb-2">Fermentum massa justo sit amet risus morbi leo.</p>
                        <nav className="nav social mb-0">
                          <Link to="/"><i className="uil uil-twitter"></i></Link>
                          <Link to="/"><i className="uil uil-facebook-f"></i></Link>
                          <Link to="/"><i className="uil uil-dribbble"></i></Link>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team