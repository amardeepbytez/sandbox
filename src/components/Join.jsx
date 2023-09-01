import React, { useEffect } from 'react'
import SVGInject from "@iconfu/svg-inject/dist/svg-inject.min.js";


const Join = () => {
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
    <section className="wrapper bg-soft-primary">
      <div className="container py-14 py-md-16 text-center">
        <div className="row">
          <div className="col-md-9 col-lg-7 col-xl-7 mx-auto text-center">
            <img src="./assets/img/icons/lineal/puzzle-2.svg" class="svg-inject icon-svg icon-svg-md mb-4" alt="" />
            <h2 className="display-4 mb-3">Join Our Community</h2>
            <p className="lead fs-lg mb-6 px-xl-10 px-xxl-15">We are trusted by over 5000+ clients. Join them by using our services and grow your business.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-5 col-xl-4 mx-auto">
            <div className="newsletter-wrapper">
              <div id="mc_embed_signup2">
                <form action="https://elemisfreebies.us20.list-manage.com/subscribe/post?u=aa4947f70a475ce162057838d&amp;id=b49ef47a9a" method="post" id="mc-embedded-subscribe-form2" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
                  <div id="mc_embed_signup_scroll2">
                    <div className="mc-field-group input-group form-floating">
                      <input type="email" value="" name="EMAIL" className="required email form-control" placeholder="Email Address" id="mce-EMAIL2" />
                      <label for="mce-EMAIL2">Email Address</label>
                      <input type="submit" value="Join" name="subscribe" id="mc-embedded-subscribe2" className="btn btn-primary" />
                    </div>
                    <div id="mce-responses2" className="clear">
                      <div className="response" id="mce-error-response2" style={{display:"none"}}></div>
                      <div className="response" id="mce-success-response2" style={{display:"none"}}></div>
                    </div>
                    {/* <div style={{position: 'absolute', left: "-5000px;"}} aria-hidden="true"><input type="text" name="b_ddc180777a163e0f9f66ee014_4b1bcfa0bc" tabindex="-1" value="" /></div> */}
                    <div className="clear"></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Join