import React, { useEffect, useRef } from "react";
import Headhesive from "headhesive";
import { Link } from "react-router-dom";
import 'bootstrap';

const Topbar = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    const options = {
      offset: 350,
      offsetSide: "top",
      classes: {
        clone: "navbar-clone fixed",
        stick: "navbar-stick",
        unstick: "navbar-unstick",
      },
      onStick: function () {
        const navbarClonedClass = this.clonedElem.classList;
        if (
          navbarClonedClass.contains("transparent") &&
          navbarClonedClass.contains("navbar-dark")
        ) {
          this.clonedElem.classList.replace("navbar-dark", "navbar-light");
        }
      },
    };

    const banner = new Headhesive(navbarRef.current, options);

    return () => {
      banner.destroy();
    };
  }, []);

  useEffect(() => {
    const CLASS_NAME = 'has-child-dropdown-show';

    const modifyDropdownBehavior = () => {
      const originalToggle = window.bootstrap.Dropdown.prototype.toggle;

      window.bootstrap.Dropdown.prototype.toggle = function () {
        document.querySelectorAll('.' + CLASS_NAME).forEach(e => {
          e.classList.remove(CLASS_NAME);
        });

        let dd = this._element.closest('.dropdown').parentNode.closest('.dropdown');
        for (; dd && dd !== document; dd = dd.parentNode.closest('.dropdown')) {
          dd.classList.add(CLASS_NAME);
        }

        return originalToggle.call(this);
      };

      document.querySelectorAll('.dropdown').forEach(dd => {
        dd.addEventListener('hide.bs.dropdown', function (e) {
          if (this.classList.contains(CLASS_NAME)) {
            this.classList.remove(CLASS_NAME);
            e.preventDefault();
          }
          e.stopPropagation();
        });
      });
    };

    modifyDropdownBehavior();
  })
  return (
    <header className="wrapper bg-soft-primary">
      <nav
        ref={navbarRef}
        className="navbar navbar-expand-lg center-nav transparent position-absolute navbar-dark caret-none"
      >
        <div className="container flex-lg-row flex-nowrap align-items-center">
          <div className="navbar-brand w-100">
            <Link to="/">
              <img
                class="logo-dark"
                src="./assets/img/logo.png"
                srcset="./assets/img/logo@2x.png 2x"
                alt=""
              />
              <img
                class="logo-light"
                src="./assets/img/logo-light.png"
                srcset="./assets/img/logo-light@2x.png 2x"
                alt=""
              />
            </Link>
          </div>
          <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
            <div className="offcanvas-header d-lg-none">
              <h3 className="text-white fs-30 mb-0">Sandbox</h3>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
              <ul className="navbar-nav">
                <li className="nav-item dropdown dropdown-mega">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/"
                    data-bs-toggle="dropdown"
                  >
                    Demos
                  </Link>
                  <ul className="dropdown-menu mega-menu mega-menu-dark mega-menu-img">
                    <li className="mega-menu-content mega-menu-scroll">
                      <ul className="row row-cols-1 row-cols-lg-6 gx-0 gx-lg-4 gy-lg-2 list-unstyled">
                        <li className="col">
                          <Link className="dropdown-item" to="/demo1.html">
                            <figure className="rounded lift d-none d-lg-block">
                              <img
                                src="./assets/img/demos/mi1.jpg"
                                srcset="./assets/img/demos/mi1@2x.jpg 2x"
                                alt=""
                              />
                            </figure>
                            <span className="d-lg-none">Demo 1</span>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="dropdown-item" to="/demo2.html">
                            <figure className="rounded lift d-none d-lg-block">
                              <img
                                src="./assets/img/demos/mi2.jpg"
                                srcset="./assets/img/demos/mi2@2x.jpg 2x"
                                alt=""
                              />
                            </figure>
                            <span className="d-lg-none">Demo 2</span>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="dropdown-item" to="/demo3.html">
                            <figure className="rounded lift d-none d-lg-block">
                              <img
                                src="./assets/img/demos/mi3.jpg"
                                srcset="./assets/img/demos/mi3@2x.jpg 2x"
                                alt=""
                              />
                            </figure>
                            <span className="d-lg-none">Demo 3</span>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="dropdown-item" to="/demo4.html">
                            <figure className="rounded lift d-none d-lg-block">
                              <img
                                src="./assets/img/demos/mi4.jpg"
                                srcset="./assets/img/demos/mi4@2x.jpg 2x"
                                alt=""
                              />
                            </figure>
                            <span className="d-lg-none">Demo 4</span>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="dropdown-item" to="/demo5.html">
                            <figure className="rounded lift d-none d-lg-block">
                              <img
                                src="./assets/img/demos/mi5.jpg"
                                srcset="./assets/img/demos/mi5@2x.jpg 2x"
                                alt=""
                              />
                            </figure>
                            <span className="d-lg-none">Demo 5</span>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="dropdown-item" to="/demo6.html">
                            <figure className="rounded lift d-none d-lg-block">
                              <img
                                src="./assets/img/demos/mi6.jpg"
                                srcset="./assets/img/demos/mi6@2x.jpg 2x"
                                alt=""
                              />
                            </figure>
                            <span className="d-lg-none">Demo 6</span>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="dropdown-item" to="/demo7.html">
                            <figure className="rounded lift d-none d-lg-block">
                              <img
                                src="./assets/img/demos/mi7.jpg"
                                srcset="./assets/img/demos/mi7@2x.jpg 2x"
                                alt=""
                              />
                            </figure>
                            <span className="d-lg-none">Demo 7</span>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="dropdown-item" to="/demo8.html">
                            <figure className="rounded lift d-none d-lg-block">
                              <img
                                src="./assets/img/demos/mi8.jpg"
                                srcset="./assets/img/demos/mi8@2x.jpg 2x"
                                alt=""
                              />
                            </figure>
                            <span className="d-lg-none">Demo 8</span>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="dropdown-item" to="/demo9.html">
                            <figure className="rounded lift d-none d-lg-block">
                              <img
                                src="./assets/img/demos/mi9.jpg"
                                srcset="./assets/img/demos/mi9@2x.jpg 2x"
                                alt=""
                              />
                            </figure>
                            <span className="d-lg-none">Demo 9</span>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="dropdown-item" to="/demo10.html">
                            <figure className="rounded lift d-none d-lg-block">
                              <img
                                src="./assets/img/demos/mi10.jpg"
                                srcset="./assets/img/demos/mi10@2x.jpg 2x"
                                alt=""
                              />
                            </figure>
                            <span className="d-lg-none">Demo 10</span>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="dropdown-item" to="/demo11.html">
                            <figure className="rounded lift d-none d-lg-block">
                              <img
                                src="./assets/img/demos/mi11.jpg"
                                srcset="./assets/img/demos/mi11@2x.jpg 2x"
                                alt=""
                              />
                            </figure>
                            <span className="d-lg-none">Demo 11</span>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="dropdown-item" to="/demo12.html">
                            <figure className="rounded lift d-none d-lg-block">
                              <img
                                src="./assets/img/demos/mi12.jpg"
                                srcset="./assets/img/demos/mi12@2x.jpg 2x"
                                alt=""
                              />
                            </figure>
                            <span className="d-lg-none">Demo 12</span>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="dropdown-item" to="/demo13.html">
                            <figure className="rounded lift d-none d-lg-block">
                              <img
                                src="./assets/img/demos/mi13.jpg"
                                srcset="./assets/img/demos/mi13@2x.jpg 2x"
                                alt=""
                              />
                            </figure>
                            <span className="d-lg-none">Demo 13</span>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="dropdown-item" to="/demo14.html">
                            <figure className="rounded lift d-none d-lg-block">
                              <img
                                src="./assets/img/demos/mi14.jpg"
                                srcset="./assets/img/demos/mi14@2x.jpg 2x"
                                alt=""
                              />
                            </figure>
                            <span className="d-lg-none">Demo 14</span>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="dropdown-item" to="/demo15.html">
                            <figure className="rounded lift d-none d-lg-block">
                              <img
                                src="./assets/img/demos/mi15.jpg"
                                srcset="./assets/img/demos/mi15@2x.jpg 2x"
                                alt=""
                              />
                            </figure>
                            <span className="d-lg-none">Demo 15</span>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="dropdown-item" to="/demo16.html">
                            <figure className="rounded lift d-none d-lg-block">
                              <img
                                src="./assets/img/demos/mi16.jpg"
                                srcset="./assets/img/demos/mi16@2x.jpg 2x"
                                alt=""
                              />
                            </figure>
                            <span className="d-lg-none">Demo 16</span>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="dropdown-item" to="/demo17.html">
                            <figure className="rounded lift d-none d-lg-block">
                              <img
                                src="./assets/img/demos/mi17.jpg"
                                srcset="./assets/img/demos/mi17@2x.jpg 2x"
                                alt=""
                              />
                            </figure>
                            <span className="d-lg-none">Demo 17</span>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="dropdown-item" to="/demo18.html">
                            <figure className="rounded lift d-none d-lg-block">
                              <img
                                src="./assets/img/demos/mi18.jpg"
                                srcset="./assets/img/demos/mi18@2x.jpg 2x"
                                alt=""
                              />
                            </figure>
                            <span className="d-lg-none">Demo 18</span>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="dropdown-item" to="/demo19.html">
                            <figure className="rounded lift d-none d-lg-block">
                              <img
                                src="./assets/img/demos/mi19.jpg"
                                srcset="./assets/img/demos/mi19@2x.jpg 2x"
                                alt=""
                              />
                            </figure>
                            <span className="d-lg-none">Demo 19</span>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="dropdown-item" to="/demo20.html">
                            <figure className="rounded lift d-none d-lg-block">
                              <img
                                src="./assets/img/demos/mi20.jpg"
                                srcset="./assets/img/demos/mi20@2x.jpg 2x"
                                alt=""
                              />
                            </figure>
                            <span className="d-lg-none">Demo 20</span>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="dropdown-item" to="/demo21.html">
                            <figure className="rounded lift d-none d-lg-block">
                              <img
                                src="./assets/img/demos/mi21.jpg"
                                srcset="./assets/img/demos/mi21@2x.jpg 2x"
                                alt=""
                              />
                            </figure>
                            <span className="d-lg-none">Demo 21</span>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="dropdown-item" to="/demo22.html">
                            <figure className="rounded lift d-none d-lg-block">
                              <img
                                src="./assets/img/demos/mi22.jpg"
                                srcset="./assets/img/demos/mi22@2x.jpg 2x"
                                alt=""
                              />
                            </figure>
                            <span className="d-lg-none">Demo 22</span>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="dropdown-item" to="/demo23.html">
                            <figure className="rounded lift d-none d-lg-block">
                              <img
                                src="./assets/img/demos/mi23.jpg"
                                srcset="./assets/img/demos/mi23@2x.jpg 2x"
                                alt=""
                              />
                            </figure>
                            <span className="d-lg-none">Demo 23</span>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="dropdown-item" to="/demo24.html">
                            <figure className="rounded lift d-none d-lg-block">
                              <img
                                src="./assets/img/demos/mi24.jpg"
                                srcset="./assets/img/demos/mi24@2x.jpg 2x"
                                alt=""
                              />
                            </figure>
                            <span className="d-lg-none">Demo 24</span>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="dropdown-item" to="/demo25.html">
                            <figure className="rounded lift d-none d-lg-block">
                              <img
                                src="./assets/img/demos/mi25.jpg"
                                srcset="./assets/img/demos/mi25@2x.jpg 2x"
                                alt=""
                              />
                            </figure>
                            <span className="d-lg-none">Demo 25</span>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="dropdown-item" to="/demo26.html">
                            <figure className="rounded lift d-none d-lg-block">
                              <img
                                src="./assets/img/demos/mi26.jpg"
                                srcset="./assets/img/demos/mi26@2x.jpg 2x"
                                alt=""
                              />
                            </figure>
                            <span className="d-lg-none">Demo 26</span>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="dropdown-item" to="/demo27.html">
                            <figure className="rounded lift d-none d-lg-block">
                              <img
                                src="./assets/img/demos/mi27.jpg"
                                srcset="./assets/img/demos/mi27@2x.jpg 2x"
                                alt=""
                              />
                            </figure>
                            <span className="d-lg-none">Demo 27</span>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="dropdown-item" to="/demo28.html">
                            <figure className="rounded lift d-none d-lg-block">
                              <img
                                src="./assets/img/demos/mi28.jpg"
                                srcset="./assets/img/demos/mi28@2x.jpg 2x"
                                alt=""
                              />
                            </figure>
                            <span className="d-lg-none">Demo 28</span>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="dropdown-item" to="/demo29.html">
                            <figure className="rounded lift d-none d-lg-block">
                              <img
                                src="./assets/img/demos/mi29.jpg"
                                srcset="./assets/img/demos/mi29@2x.jpg 2x"
                                alt=""
                              />
                            </figure>
                            <span className="d-lg-none">Demo 29</span>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="dropdown-item" to="/demo30.html">
                            <figure className="rounded lift d-none d-lg-block">
                              <img
                                src="./assets/img/demos/mi30.jpg"
                                srcset="./assets/img/demos/mi30@2x.jpg 2x"
                                alt=""
                              />
                            </figure>
                            <span className="d-lg-none">Demo 30</span>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="dropdown-item" to="/demo31.html">
                            <figure className="rounded lift d-none d-lg-block">
                              <img
                                src="./assets/img/demos/mi31.jpg"
                                srcset="./assets/img/demos/mi31@2x.jpg 2x"
                                alt=""
                              />
                            </figure>
                            <span className="d-lg-none">Demo 31</span>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="dropdown-item" to="/demo32.html">
                            <figure className="rounded lift d-none d-lg-block">
                              <img
                                src="./assets/img/demos/mi32.jpg"
                                srcset="./assets/img/demos/mi32@2x.jpg 2x"
                                alt=""
                              />
                            </figure>
                            <span className="d-lg-none">Demo 32</span>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="dropdown-item" to="/demo33.html">
                            <figure className="rounded lift d-none d-lg-block">
                              <img
                                src="./assets/img/demos/mi33.jpg"
                                srcset="./assets/img/demos/mi33@2x.jpg 2x"
                                alt=""
                              />
                            </figure>
                            <span className="d-lg-none">Demo 33</span>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="dropdown-item" to="/demo34.html">
                            <figure className="rounded lift d-none d-lg-block">
                              <img
                                src="./assets/img/demos/mi34.jpg"
                                srcset="./assets/img/demos/mi34@2x.jpg 2x"
                                alt=""
                              />
                            </figure>
                            <span className="d-lg-none">Demo 34</span>
                          </Link>
                        </li>
                      </ul>
                      {/* <!--/.row --> */}
                      <span className="d-none d-lg-flex">
                        <i className="uil uil-direction"></i>
                        <strong>Scroll to view more</strong>
                      </span>
                    </li>
                    {/* <!--/.mega-menu-content--> */}
                  </ul>
                  {/* <!--/.dropdown-menu --> */}
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/"
                    data-bs-toggle="dropdown"
                  >
                    Pages
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="dropdown dropdown-submenu dropend">
                      <Link
                        className="dropdown-item dropdown-toggle"
                        to="/"
                        data-bs-toggle="dropdown"
                      >
                        Services
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link className="dropdown-item" to="./services.html">
                            Services I
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="dropdown-item" to="./services2.html">
                            Services II
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown dropdown-submenu dropend">
                      <Link
                        className="dropdown-item dropdown-toggle"
                        to="/"
                        data-bs-toggle="dropdown"
                      >
                        About
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link className="dropdown-item" to="./about.html">
                            About I
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="dropdown-item" to="./about2.html">
                            About II
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown dropdown-submenu dropend">
                      <Link
                        className="dropdown-item dropdown-toggle"
                        to="/"
                        data-bs-toggle="dropdown"
                      >
                        Shop
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link className="dropdown-item" to="./shop.html">
                            Shop I
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="dropdown-item" to="./shop2.html">
                            Shop II
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="dropdown-item"
                            to="./shop-product.html"
                          >
                            Product Page
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="dropdown-item" to="./shop-cart.html">
                            Shopping Cart
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="dropdown-item"
                            to="./shop-checkout.html"
                          >
                            Checkout
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown dropdown-submenu dropend">
                      <Link
                        className="dropdown-item dropdown-toggle"
                        to="/"
                        data-bs-toggle="dropdown"
                      >
                        Contact
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link className="dropdown-item" to="./contact.html">
                            Contact I
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="dropdown-item" to="./contact2.html">
                            Contact II
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="dropdown-item" to="./contact3.html">
                            Contact III
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown dropdown-submenu dropend">
                      <Link
                        className="dropdown-item dropdown-toggle"
                        to="/"
                        data-bs-toggle="dropdown"
                      >
                        Career
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link className="dropdown-item" to="./career.html">
                            Job Listing I
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="dropdown-item" to="./career2.html">
                            Job Listing II
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="dropdown-item"
                            to="./career-job.html"
                          >
                            Job Description
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown dropdown-submenu dropend">
                      <Link
                        className="dropdown-item dropdown-toggle"
                        to="/"
                        data-bs-toggle="dropdown"
                      >
                        Utility
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link className="dropdown-item" to="./404.html">
                            404 Not Found
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="dropdown-item"
                            to="./page-loader.html"
                          >
                            Page Loader
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="dropdown-item" to="./signin.html">
                            Sign In I
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="dropdown-item" to="./signin2.html">
                            Sign In II
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="dropdown-item" to="./signup.html">
                            Sign Up I
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="dropdown-item" to="./signup2.html">
                            Sign Up II
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="dropdown-item" to="./terms.html">
                            Terms
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link className="dropdown-item" to="./pricing.html">
                        Pricing
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="dropdown-item" to="./onepage.html">
                        One Page
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    data-bs-toggle="dropdown"
                  >
                    Projects
                  </Link>
                  <div className="dropdown-menu dropdown-lg">
                    <div className="dropdown-lg-content">
                      <div>
                        <h6 className="dropdown-header">Project Pages</h6>
                        <ul className="list-unstyled">
                          <li>
                            <Link
                              className="dropdown-item"
                              to="./projects.html"
                            >
                              Projects I
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="./projects2.html"
                            >
                              Projects II
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="./projects3.html"
                            >
                              Projects III
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="./projects4.html"
                            >
                              Projects IV
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- /.column --> */}
                      <div>
                        <h6 className="dropdown-header">Single Projects</h6>
                        <ul className="list-unstyled">
                          <li>
                            <Link
                              className="dropdown-item"
                              to="./single-project.html"
                            >
                              Single Project I
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="./single-project2.html"
                            >
                              Single Project II
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="./single-project3.html"
                            >
                              Single Project III
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="./single-project4.html"
                            >
                              Single Project IV
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- /.column --> */}
                    </div>
                    {/* <!-- /auto-column --> */}
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    data-bs-toggle="dropdown"
                  >
                    Blog
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link className="dropdown-item" to="./blog.html">
                        Blog without Sidebar
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="dropdown-item" to="./blog2.html">
                        Blog with Sidebar
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="dropdown-item" to="./blog3.html">
                        Blog with Left Sidebar
                      </Link>
                    </li>
                    <li className="dropdown dropdown-submenu dropend">
                      <Link
                        className="dropdown-item dropdown-toggle"
                        to="/"
                        data-bs-toggle="dropdown"
                      >
                        Blog Posts
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link className="dropdown-item" to="./blog-post.html">
                            Post without Sidebar
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="dropdown-item"
                            to="./blog-post2.html"
                          >
                            Post with Sidebar
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="dropdown-item"
                            to="./blog-post3.html"
                          >
                            Post with Left Sidebar
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown dropdown-mega">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    data-bs-toggle="dropdown"
                  >
                    Blocks
                  </Link>
                  <ul className="dropdown-menu mega-menu mega-menu-dark mega-menu-img">
                    <li className="mega-menu-content">
                      <ul className="row row-cols-1 row-cols-lg-6 gx-0 gx-lg-6 gy-lg-4 list-unstyled">
                        <li className="col">
                          <Link
                            className="dropdown-item"
                            to="./docs/blocks/about.html"
                          >
                            <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
                              <img
                                className="rounded-0"
                                src="./assets/img/demos/block1.svg"
                                alt=""
                              />
                            </div>
                            <span>About</span>
                          </Link>
                        </li>
                        <li className="col">
                          <Link
                            className="dropdown-item"
                            to="./docs/blocks/blog.html"
                          >
                            <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
                              <img
                                className="rounded-0"
                                src="./assets/img/demos/block2.svg"
                                alt=""
                              />
                            </div>
                            <span>Blog</span>
                          </Link>
                        </li>
                        <li className="col">
                          <Link
                            className="dropdown-item"
                            to="./docs/blocks/call-to-action.html"
                          >
                            <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
                              <img
                                className="rounded-0"
                                src="./assets/img/demos/block3.svg"
                                alt=""
                              />
                            </div>
                            <span>Call to Action</span>
                          </Link>
                        </li>
                        <li className="col">
                          <Link
                            className="dropdown-item"
                            to="./docs/blocks/clients.html"
                          >
                            <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
                              <img
                                className="rounded-0"
                                src="./assets/img/demos/block4.svg"
                                alt=""
                              />
                            </div>
                            <span>Clients</span>
                          </Link>
                        </li>
                        <li className="col">
                          <Link
                            className="dropdown-item"
                            to="./docs/blocks/contact.html"
                          >
                            <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
                              <img
                                className="rounded-0"
                                src="./assets/img/demos/block5.svg"
                                alt=""
                              />
                            </div>
                            <span>Contact</span>
                          </Link>
                        </li>
                        <li className="col">
                          <Link
                            className="dropdown-item"
                            to="./docs/blocks/facts.html"
                          >
                            <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
                              <img
                                className="rounded-0"
                                src="./assets/img/demos/block6.svg"
                                alt=""
                              />
                            </div>
                            <span>Facts</span>
                          </Link>
                        </li>
                        <li className="col">
                          <Link
                            className="dropdown-item"
                            to="./docs/blocks/faq.html"
                          >
                            <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
                              <img
                                className="rounded-0"
                                src="./assets/img/demos/block7.svg"
                                alt=""
                              />
                            </div>
                            <span>FAQ</span>
                          </Link>
                        </li>
                        <li className="col">
                          <Link
                            className="dropdown-item"
                            to="./docs/blocks/features.html"
                          >
                            <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
                              <img
                                className="rounded-0"
                                src="./assets/img/demos/block8.svg"
                                alt=""
                              />
                            </div>
                            <span>Features</span>
                          </Link>
                        </li>
                        <li className="col">
                          <Link
                            className="dropdown-item"
                            to="./docs/blocks/footer.html"
                          >
                            <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
                              <img
                                className="rounded-0"
                                src="./assets/img/demos/block9.svg"
                                alt=""
                              />
                            </div>
                            <span>Footer</span>
                          </Link>
                        </li>
                        <li className="col">
                          <Link
                            className="dropdown-item"
                            to="./docs/blocks/hero.html"
                          >
                            <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
                              <img
                                className="rounded-0"
                                src="./assets/img/demos/block10.svg"
                                alt=""
                              />
                            </div>
                            <span>Hero</span>
                          </Link>
                        </li>
                        <li className="col">
                          <Link
                            className="dropdown-item"
                            to="./docs/blocks/misc.html"
                          >
                            <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
                              <img
                                className="rounded-0"
                                src="./assets/img/demos/block17.svg"
                                alt=""
                              />
                            </div>
                            <span>Misc</span>
                          </Link>
                        </li>
                        <li className="col">
                          <Link
                            className="dropdown-item"
                            to="./docs/blocks/navbar.html"
                          >
                            <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
                              <img
                                className="rounded-0"
                                src="./assets/img/demos/block11.svg"
                                alt=""
                              />
                            </div>
                            <span>Navbar</span>
                          </Link>
                        </li>
                        <li className="col">
                          <Link
                            className="dropdown-item"
                            to="./docs/blocks/portfolio.html"
                          >
                            <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
                              <img
                                className="rounded-0"
                                src="./assets/img/demos/block12.svg"
                                alt=""
                              />
                            </div>
                            <span>Portfolio</span>
                          </Link>
                        </li>
                        <li className="col">
                          <Link
                            className="dropdown-item"
                            to="./docs/blocks/pricing.html"
                          >
                            <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
                              <img
                                className="rounded-0"
                                src="./assets/img/demos/block13.svg"
                                alt=""
                              />
                            </div>
                            <span>Pricing</span>
                          </Link>
                        </li>
                        <li className="col">
                          <Link
                            className="dropdown-item"
                            to="./docs/blocks/process.html"
                          >
                            <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
                              <img
                                className="rounded-0"
                                src="./assets/img/demos/block14.svg"
                                alt=""
                              />
                            </div>
                            <span>Process</span>
                          </Link>
                        </li>
                        <li className="col">
                          <Link
                            className="dropdown-item"
                            to="./docs/blocks/team.html"
                          >
                            <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
                              <img
                                className="rounded-0"
                                src="./assets/img/demos/block15.svg"
                                alt=""
                              />
                            </div>
                            <span>Team</span>
                          </Link>
                        </li>
                        <li className="col">
                          <Link
                            className="dropdown-item"
                            to="./docs/blocks/testimonials.html"
                          >
                            <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
                              <img
                                className="rounded-0"
                                src="./assets/img/demos/block16.svg"
                                alt=""
                              />
                            </div>
                            <span>Testimonials</span>
                          </Link>
                        </li>
                      </ul>
                      {/* <!--/.row --> */}
                    </li>
                    {/* <!--/.mega-menu-content--> */}
                  </ul>
                  {/* <!--/.dropdown-menu --> */}
                </li>
                <li className="nav-item dropdown dropdown-mega">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/"
                    data-bs-toggle="dropdown"
                  >
                    Documentation
                  </Link>
                  <ul className="dropdown-menu mega-menu">
                    <li className="mega-menu-content">
                      <div className="row gx-0 gx-lg-3">
                        <div className="col-lg-4">
                          <h6 className="dropdown-header">Usage</h6>
                          <ul className="list-unstyled cc-2 pb-lg-1">
                            <li>
                              <Link
                                className="dropdown-item"
                                to="./docs/index.html"
                              >
                                Get Started
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="./docs/forms.html"
                              >
                                Forms
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="./docs/faq.html"
                              >
                                FAQ
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="./docs/changelog.html"
                              >
                                Changelog
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="./docs/credits.html"
                              >
                                Credits
                              </Link>
                            </li>
                          </ul>
                          <h6 className="dropdown-header mt-lg-6">
                            Styleguide
                          </h6>
                          <ul className="list-unstyled cc-2">
                            <li>
                              <Link
                                className="dropdown-item"
                                to="./docs/styleguide/colors.html"
                              >
                                Colors
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="./docs/styleguide/fonts.html"
                              >
                                Fonts
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="./docs/styleguide/icons-svg.html"
                              >
                                SVG Icons
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="./docs/styleguide/icons-font.html"
                              >
                                Font Icons
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="./docs/styleguide/illustrations.html"
                              >
                                Illustrations
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="./docs/styleguide/backgrounds.html"
                              >
                                Backgrounds
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="./docs/styleguide/misc.html"
                              >
                                Misc
                              </Link>
                            </li>
                          </ul>
                        </div>
                        {/* <!--/column --> */}
                        <div className="col-lg-8">
                          <h6 className="dropdown-header">Elements</h6>
                          <ul className="list-unstyled cc-3">
                            <li>
                              <Link
                                className="dropdown-item"
                                to="./docs/elements/accordion.html"
                              >
                                Accordion
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="./docs/elements/alerts.html"
                              >
                                Alerts
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="./docs/elements/animations.html"
                              >
                                Animations
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="./docs/elements/avatars.html"
                              >
                                Avatars
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="./docs/elements/background.html"
                              >
                                Background
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="./docs/elements/badges.html"
                              >
                                Badges
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="./docs/elements/buttons.html"
                              >
                                Buttons
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="./docs/elements/card.html"
                              >
                                Card
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="./docs/elements/carousel.html"
                              >
                                Carousel
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="./docs/elements/dividers.html"
                              >
                                Dividers
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="./docs/elements/form-elements.html"
                              >
                                Form Elements
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="./docs/elements/image-hover.html"
                              >
                                Image Hover
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="./docs/elements/image-mask.html"
                              >
                                Image Mask
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="./docs/elements/lightbox.html"
                              >
                                Lightbox
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="./docs/elements/player.html"
                              >
                                Media Player
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="./docs/elements/modal.html"
                              >
                                Modal
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="./docs/elements/pagination.html"
                              >
                                Pagination
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="./docs/elements/progressbar.html"
                              >
                                Progressbar
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="./docs/elements/shadows.html"
                              >
                                Shadows
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="./docs/elements/shapes.html"
                              >
                                Shapes
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="./docs/elements/tables.html"
                              >
                                Tables
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="./docs/elements/tabs.html"
                              >
                                Tabs
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="./docs/elements/text-animations.html"
                              >
                                Text Animations
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="./docs/elements/text-highlight.html"
                              >
                                Text Highlight
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="./docs/elements/tiles.html"
                              >
                                Tiles
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="./docs/elements/tooltips-popovers.html"
                              >
                                Tooltips & Popovers
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="./docs/elements/typography.html"
                              >
                                Typography
                              </Link>
                            </li>
                          </ul>
                        </div>
                        {/* <!--/column --> */}
                      </div>
                      {/* <!--/.row --> */}
                    </li>
                    {/* <!--/.mega-menu-content--> */}
                  </ul>
                  {/* <!--/.dropdown-menu --> */}
                </li>
              </ul>
              {/* <!-- /.navbar-nav --> */}
              <div className="offcanvas-footer d-lg-none">
                <div>
                  <Link to="/" className="link-inverse">
                    info@email.com
                  </Link>
                  <br /> 00 (123) 456 78 90 <br />
                  <nav className="nav social social-white mt-4">
                    <Link to="#">
                      <i className="uil uil-twitter"></i>
                    </Link>
                    <Link to="#">
                      <i className="uil uil-facebook-f"></i>
                    </Link>
                    <Link to="#">
                      <i className="uil uil-dribbble"></i>
                    </Link>
                    <Link to="#">
                      <i className="uil uil-instagram"></i>
                    </Link>
                    <Link to="#">
                      <i className="uil uil-youtube"></i>
                    </Link>
                  </nav>
                  {/* <!-- /.social --> */}
                </div>
              </div>
              {/* <!-- /.offcanvas-footer --> */}
            </div>
            {/* <!-- /.offcanvas-body --> */}
          </div>
          {/* <!-- /.navbar-collapse --> */}
          <div className="navbar-other w-100 d-flex ms-auto">
            <ul className="navbar-nav flex-row align-items-center ms-auto">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvas-info"
                >
                  <i className="uil uil-info-circle"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvas-search"
                >
                  <i className="uil uil-search"></i>
                </Link>
              </li>
              <li className="nav-item d-lg-none">
                <button className="hamburger offcanvas-nav-btn">
                  <span></span>
                </button>
              </li>
            </ul>
            {/* <!-- /.navbar-nav --> */}
          </div>
          {/* <!-- /.navbar-other --> */}
        </div>
      </nav>
      <div
        className="offcanvas offcanvas-end text-inverse"
        id="offcanvas-info"
        data-bs-scroll="true"
      >
        <div className="offcanvas-header">
          <h3 className="text-white fs-30 mb-0">Sandbox</h3>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body pb-6">
          <div className="widget mb-8">
            <p>
              Sandbox is a multipurpose HTML5 template with various layouts
              which will be a great solution for your business.
            </p>
          </div>
          {/* <!-- /.widget --> */}
          <div className="widget mb-8">
            <h4 className="widget-title text-white mb-3">Contact Info</h4>
            <address>
              {" "}
              Moonshine St. 14/05 <br /> Light City, London{" "}
            </address>
            <Link to="mailto:first.last@email.com">info@email.com</Link>
            <br /> 00 (123) 456 78 90
          </div>
          {/* <!-- /.widget --> */}
          <div className="widget mb-8">
            <h4 className="widget-title text-white mb-3">Learn More</h4>
            <ul className="list-unstyled">
              <li>
                <Link to="#">Our Story</Link>
              </li>
              <li>
                <Link to="#">Terms of Use</Link>
              </li>
              <li>
                <Link to="#">Privacy Policy</Link>
              </li>
              <li>
                <Link to="#">Contact Us</Link>
              </li>
            </ul>
          </div>
          {/* <!-- /.widget --> */}
          <div className="widget">
            <h4 className="widget-title text-white mb-3">Follow Us</h4>
            <nav className="nav social social-white">
              <Link to="#">
                <i className="uil uil-twitter"></i>
              </Link>
              <Link to="#">
                <i className="uil uil-facebook-f"></i>
              </Link>
              <Link to="#">
                <i className="uil uil-dribbble"></i>
              </Link>
              <Link to="#">
                <i className="uil uil-instagram"></i>
              </Link>
              <Link to="#">
                <i className="uil uil-youtube"></i>
              </Link>
            </nav>
            {/* <!-- /.social --> */}
          </div>
          {/* <!-- /.widget --> */}
        </div>
        {/* <!-- /.offcanvas-body --> */}
      </div>
      <div
        className="offcanvas offcanvas-top bg-light"
        id="offcanvas-search"
        data-bs-scroll="true"
      >
        <div className="container d-flex flex-row py-6">
          <form className="search-form w-100">
            <input
              id="search-form"
              type="text"
              className="form-control"
              placeholder="Type keyword and hit enter"
            />
          </form>
          {/* <!-- /.search-form --> */}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        {/* <!-- /.container --> */}
      </div>
    </header>
  );
};

export default Topbar;
