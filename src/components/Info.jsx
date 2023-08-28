import React from 'react'

const Info = () => {
  return (
    <section className="wrapper bg-soft-primary angled lower-start">
      <div className="container py-14 py-md-16">
        <div className="row">
          <div className="col-xl-10 mx-auto">
            <div className="row align-items-center counter-wrapper gy-6 text-center">
              <div className="col-md-3">
                <img src="./assets/img/icons/lineal/check.svg" className="svg-inject icon-svg icon-svg-lg text-primary mb-3" alt="" />
                <h3 className="counter">7518</h3>
                <p>Completed Projects</p>
              </div>
              <div className="col-md-3">
                <img src="./assets/img/icons/lineal/user.svg" className="svg-inject icon-svg icon-svg-lg text-primary mb-3" alt="" />
                <h3 className="counter">3472</h3>
                <p>Satisfied Customers</p>
              </div>
              <div className="col-md-3">
                <img src="./assets/img/icons/lineal/briefcase-2.svg" className="svg-inject icon-svg icon-svg-lg text-primary mb-3" alt="" />
                <h3 className="counter">2184</h3>
                <p>Expert Employees</p>
              </div>
              <div className="col-md-3">
                <img src="./assets/img/icons/lineal/award-2.svg" className="svg-inject icon-svg icon-svg-lg text-primary mb-3" alt="" />
                <h3 className="counter">4523</h3>
                <p>Awards Won</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info