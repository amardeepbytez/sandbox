import React, { useEffect } from 'react'
import counterUp from 'counterup2'
import SVGInject from "@iconfu/svg-inject/dist/svg-inject.min.js";

const Info = () => {
  var Waypoint = window.Waypoint
  useEffect(() => {
    const setupCounters = () => {
      const counters = document.querySelectorAll(".counter");
      counters.forEach(el => {
        new Waypoint({
          element: el,
          handler: function() {
            counterUp(el, {
              duration: 1000,
              delay: 50
            });
            this.destroy();
          },
          offset: 'bottom-in-view',
        });
      });
    }
    setupCounters();
  })
  useEffect(() => {
    var theme = {
      init: function() {
        theme.svgInject();
      },
      svgInject: () => {
        SVGInject.setOptions({
          onFail: function(img, svg) {
            img.classList.remove('svg-inject');
          }
        });
        SVGInject(document.querySelectorAll('img.svg-inject'), {
          useCache: true
        });
      },
    }
    theme.init();
  }, []);

  return (
    <section className="wrapper bg-soft-primary angled lower-start">
      <div className="container py-14 py-md-16">
        <div className="row">
          <div className="col-xl-10 mx-auto">
            <div className="row align-items-center counter-wrapper gy-6 text-center">
              <div className="col-md-3">
                <img src="./assets/img/icons/lineal/check.svg" class="svg-inject icon-svg icon-svg-lg text-primary mb-3" alt="" />
                <h3 className="counter">7518</h3>
                <p>Completed Projects</p>
              </div>
              <div className="col-md-3">
                <img src="./assets/img/icons/lineal/user.svg" class="svg-inject icon-svg icon-svg-lg text-primary mb-3" alt="" />
                <h3 className="counter">3472</h3>
                <p>Satisfied Customers</p>
              </div>
              <div className="col-md-3">
                <img src="./assets/img/icons/lineal/briefcase-2.svg" class="svg-inject icon-svg icon-svg-lg text-primary mb-3" alt="" />
                <h3 className="counter">2184</h3>
                <p>Expert Employees</p>
              </div>
              <div className="col-md-3">
                <img src="./assets/img/icons/lineal/award-2.svg" class="svg-inject icon-svg icon-svg-lg text-primary mb-3" alt="" />
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
