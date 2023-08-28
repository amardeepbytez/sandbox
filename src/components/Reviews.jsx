import React from 'react'

const Reviews = () => {
  return (
    <section className="wrapper bg-soft-primary">
      <div className="container pt-16 pb-14 pb-md-0">
        <div className="row gx-lg-8 gx-xl-0 align-items-center">
          <div className="col-md-5 col-lg-5 col-xl-4 offset-xl-1 d-none d-md-flex position-relative align-self-end">
            <div className="shape rounded-circle bg-pale-primary rellax w-21 h-21 d-md-none d-lg-block" data-rellax-speed="1" style={{top: "7rem", left:"1rem"}}></div>
            <figure><img src="./assets/img/photos/co1.png" srcset="./assets/img/photos/co1@2x.png 2x" alt="" /></figure>
          </div>
          <div className="col-md-7 col-lg-6 col-xl-6 col-xxl-5 offset-xl-1">
            <div className="swiper-container dots-start dots-closer mt-md-10 mb-md-15" data-margin="30" data-dots="true">
              <div className="swiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <blockquote className="icon fs-lg">
                      <p>“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta felis euismod semper. Cras justo odio consectetur nulla dapibus curabitur blandit faucibus.”</p>
                      <div className="blockquote-details">
                        <div className="info ps-0">
                          <h5 className="mb-1">Coriss Ambady</h5>
                          <p className="mb-0">Financial Analyst</p>
                        </div>
                      </div>
                    </blockquote>
                  </div>
                  <div className="swiper-slide">
                    <blockquote className="icon fs-lg">
                      <p>“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta felis euismod semper. Cras justo odio consectetur adipiscing dapibus curabitur blandit.”</p>
                      <div className="blockquote-details">
                        <div className="info ps-0">
                          <h5 className="mb-1">Cory Zamora</h5>
                          <p className="mb-0">Marketing Specialist</p>
                        </div>
                      </div>
                    </blockquote>
                  </div>
                  <div className="swiper-slide">
                    <blockquote className="icon fs-lg">
                      <p>“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta felis euismod semper. Cras justo odio consectetur adipiscing dapibus curabitur blandit.”</p>
                      <div className="blockquote-details">
                        <div className="info ps-0">
                          <h5 className="mb-1">Nikolas Brooten</h5>
                          <p className="mb-0">Sales Manager</p>
                        </div>
                      </div>
                    </blockquote>
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

export default Reviews