import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Swiper from "swiper/bundle";
import "swiper/css";
import "swiper/css/bundle";
import Plyr from "plyr";
import "plyr/dist/plyr.css";
import GLightbox from "glightbox";

const Swipe = () => {
  useEffect(() => {
    var theme = {
      init: function () {
        theme.backgroundImage();
        theme.swiperSlider();
        theme.plyr();
        theme.lightbox();
      },
      backgroundImage: () => {
        var bg = document.querySelectorAll(".bg-image");
        for (var i = 0; i < bg.length; i++) {
          var url = bg[i].getAttribute("data-image-src");
          bg[i].style.backgroundImage = "url('" + url + "')";
        }
      },
      swiperSlider: function () {
        var carousel = document.querySelectorAll(".swiper-container");
        console.log(carousel);
        for (var i = 0; i < carousel.length; i++) {
          var slider1 = carousel[i];
          slider1.classList.add("swiper-container-" + i);
          var controls = document.createElement("div");
          controls.className = "swiper-controls";
          var pagi = document.createElement("div");
          pagi.className = "swiper-pagination";
          var navi = document.createElement("div");
          navi.className = "swiper-navigation";
          var prev = document.createElement("div");
          prev.className = "swiper-button swiper-button-prev";
          var next = document.createElement("div");
          next.className = "swiper-button swiper-button-next";
          slider1.appendChild(controls);
          controls.appendChild(navi);
          navi.appendChild(prev);
          navi.appendChild(next);
          controls.appendChild(pagi);
          var sliderEffect = slider1.getAttribute("data-effect")
            ? slider1.getAttribute("data-effect")
            : "slide";
          if (slider1.getAttribute("data-items-auto") === "true") {
            var slidesPerViewInit = "auto";
            var breakpointsInit = null;
          } else {
            var sliderItems = slider1.getAttribute("data-items")
              ? slider1.getAttribute("data-items")
              : 3;
            var sliderItemsXs = slider1.getAttribute("data-items-xs")
              ? slider1.getAttribute("data-items-xs")
              : 1;
            var sliderItemsSm = slider1.getAttribute("data-items-sm")
              ? slider1.getAttribute("data-items-sm")
              : Number(sliderItemsXs);
            var sliderItemsMd = slider1.getAttribute("data-items-md")
              ? slider1.getAttribute("data-items-md")
              : Number(sliderItemsSm);
            var sliderItemsLg = slider1.getAttribute("data-items-lg")
              ? slider1.getAttribute("data-items-lg")
              : Number(sliderItemsMd);
            var sliderItemsXl = slider1.getAttribute("data-items-xl")
              ? slider1.getAttribute("data-items-xl")
              : Number(sliderItemsLg);
            var sliderItemsXxl = slider1.getAttribute("data-items-xxl")
              ? slider1.getAttribute("data-items-xxl")
              : Number(sliderItemsXl);
            slidesPerViewInit = sliderItems;
            breakpointsInit = {
              0: {
                slidesPerView: Number(sliderItemsXs),
              },
              576: {
                slidesPerView: Number(sliderItemsSm),
              },
              768: {
                slidesPerView: Number(sliderItemsMd),
              },
              992: {
                slidesPerView: Number(sliderItemsLg),
              },
              1200: {
                slidesPerView: Number(sliderItemsXl),
              },
              1400: {
                slidesPerView: Number(sliderItemsXxl),
              },
            };
          }
          var sliderSpeed = slider1.getAttribute("data-speed")
            ? slider1.getAttribute("data-speed")
            : 500;
          var sliderAutoPlay =
            slider1.getAttribute("data-autoplay") !== "false";
          var sliderAutoPlayTime = slider1.getAttribute("data-autoplaytime")
            ? slider1.getAttribute("data-autoplaytime")
            : 5000;
          var sliderAutoHeight =
            slider1.getAttribute("data-autoheight") === "true";
          var sliderResizeUpdate =
            slider1.getAttribute("data-resizeupdate") !== "false";
          var sliderAllowTouchMove =
            slider1.getAttribute("data-drag") !== "false";
          var sliderReverseDirection =
            slider1.getAttribute("data-reverse") === "true";
          var sliderMargin = slider1.getAttribute("data-margin")
            ? slider1.getAttribute("data-margin")
            : 30;
          var sliderLoop = slider1.getAttribute("data-loop") === "true";
          var sliderCentered = slider1.getAttribute("data-centered") === "true";
          var swiper = slider1.querySelector(".swiper:not(.swiper-thumbs)");
          var swiperTh = slider1.querySelector(".swiper-thumbs");
          var sliderTh = new Swiper(swiperTh, {
            slidesPerView: 5,
            spaceBetween: 10,
            loop: false,
            threshold: 2,
            slideToClickedSlide: true,
          });
          if (slider1.getAttribute("data-thumbs") === "true") {
            var thumbsInit = sliderTh;
            var swiperMain = document.createElement("div");
            swiperMain.className = "swiper-main";
            swiper.parentNode.insertBefore(swiperMain, swiper);
            swiperMain.appendChild(swiper);
            slider1.removeChild(controls);
            swiperMain.appendChild(controls);
          } else {
            thumbsInit = null;
          }
          var slider = new Swiper(swiper, {
            on: {
              beforeInit: function () {
                if (
                  slider1.getAttribute("data-nav") !== "true" &&
                  slider1.getAttribute("data-dots") !== "true"
                ) {
                  controls.remove();
                }
                if (slider1.getAttribute("data-dots") !== "true") {
                  pagi.remove();
                }
                if (slider1.getAttribute("data-nav") !== "true") {
                  navi.remove();
                }
              },
              init: function () {
                if (slider1.getAttribute("data-autoplay") !== "true") {
                  this.autoplay.stop();
                }
                this.update();
              },
            },
            autoplay: {
              delay: sliderAutoPlayTime,
              disableOnInteraction: false,
              reverseDirection: sliderReverseDirection,
              pauseOnMouseEnter: false,
            },
            allowTouchMove: sliderAllowTouchMove,
            speed: parseInt(sliderSpeed),
            slidesPerView: slidesPerViewInit,
            loop: sliderLoop,
            centeredSlides: sliderCentered,
            spaceBetween: Number(sliderMargin),
            effect: sliderEffect,
            autoHeight: sliderAutoHeight,
            grabCursor: true,
            resizeObserver: false,
            updateOnWindowResize: sliderResizeUpdate,
            breakpoints: breakpointsInit,
            pagination: {
              el: carousel[i].querySelector(".swiper-pagination"),
              clickable: true,
            },
            navigation: {
              prevEl: slider1.querySelector(".swiper-button-prev"),
              nextEl: slider1.querySelector(".swiper-button-next"),
            },
            thumbs: {
              swiper: thumbsInit,
            },
          });
        }
      },
      plyr: () => {
        var players = Plyr.setup(".player", {
          loadSprite: true,
          fullscreen: { enabled: true, iosNative: true },
          muted: false,
        });
      },
      lightbox: () => {
        const lightbox = GLightbox({
          selector: "*[data-glightbox]",
          touchNavigation: true,
          loop: false,
          zoomable: false,
          autoplayVideos: true,
          moreLength: 0,
          slideExtraAttributes: {
            poster: "",
          },
          plyr: {
            css: "",
            js: "",
            config: {
              ratio: "",
              fullscreen: {
                enabled: false,
                iosNative: false,
              },
              youtube: {
                noCookie: true,
                rel: 0,
                showinfo: 0,
                iv_load_policy: 3,
              },
              vimeo: {
                byline: false,
                portrait: false,
                title: false,
                transparent: false,
              },
            },
          },
        });
      },
    };
    theme.init();
  });

  return (
    <section className="wrapper bg-dark">
      <div
        className="swiper-container swiper-hero dots-over"
        data-margin="0"
        data-autoplay="true"
        data-autoplaytime="7000"
        data-nav="true"
        data-dots="true"
        data-items="1"
      >
        <div className="swiper">
          <div className="swiper-wrapper">
            <div
              className="swiper-slide bg-overlay bg-overlay-400 bg-dark bg-image"
              data-image-src="./assets/img/photos/bg7.jpg"
            >
              <div className="container h-100">
                <div className="row h-100">
                  <div className="col-md-10 offset-md-1 col-lg-7 offset-lg-0 col-xl-6 col-xxl-5 text-center text-lg-start justify-content-center align-self-center align-items-start">
                    <h2 className="display-1 fs-56 mb-4 text-white animate__animated animate__slideInDown animate__delay-1s">
                      We bring solutions to make life easier.
                    </h2>
                    <p className="lead fs-23 lh-sm mb-7 text-white animate__animated animate__slideInRight animate__delay-2s">
                      We are a creative company that focuses on long term
                      relationships with customers.
                    </p>
                    <div className="animate__animated animate__slideInUp animate__delay-3s">
                      <Link
                        to="/"
                        className="btn btn-lg btn-outline-white rounded-pill"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide bg-overlay bg-overlay-400 bg-dark bg-image"
              data-image-src="./assets/img/photos/bg8.jpg"
            >
              <div className="container h-100">
                <div className="row h-100">
                  <div className="col-md-11 col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center justify-content-center align-self-center">
                    <h2 className="display-1 fs-56 mb-4 text-white animate__animated animate__slideInDown animate__delay-1s">
                      We are trusted by over a million customers.
                    </h2>
                    <p className="lead fs-23 lh-sm mb-7 text-white animate__animated animate__slideInRight animate__delay-2s">
                      Here a few reasons why our customers choose us.
                    </p>
                    <div class="animate__animated animate__slideInUp animate__delay-3s">
                      <a
                        href="./assets/media/movie.mp4"
                        class="btn btn-circle btn-white btn-play ripple mx-auto mb-5"
                        data-glightbox
                      >
                        <i class="icn-caret-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide bg-overlay bg-overlay-400 bg-dark bg-image"
              data-image-src="./assets/img/photos/bg9.jpg"
            >
              <div className="container h-100">
                <div className="row h-100">
                  <div className="col-md-10 offset-md-1 col-lg-7 offset-lg-5 col-xl-6 offset-xl-6 col-xxl-5 offset-xxl-6 text-center text-lg-start justify-content-center align-self-center align-items-start">
                    <h2 className="display-1 fs-56 mb-4 text-white animate__animated animate__slideInDown animate__delay-1s">
                      Just sit and relax.
                    </h2>
                    <p className="lead fs-23 lh-sm mb-7 text-white animate__animated animate__slideInRight animate__delay-2s">
                      We make sure your spending is stress free so that you can
                      have the perfect control.
                    </p>
                    <div className="animate__animated animate__slideInUp animate__delay-3s">
                      <Link
                        to="/"
                        className="btn btn-lg btn-outline-white rounded-pill"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Swipe;
