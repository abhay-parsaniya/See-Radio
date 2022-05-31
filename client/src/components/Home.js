import React from "react";
import Navbar from "./Navbar";
import AboutUs from "./AboutUs";
import "./home.css";
import ContactUs from "./ContactUs";

const Home = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="wrapper">
        <div className="background-image">
          <img src="https://www.bacancytechnology.com/case-study/wp-content/uploads/2022/04/xLogo-2.png.pagespeed.ic.8B-ckodiTE.png" alt="Network Error" />
        </div>
          <AboutUs />
          <section id="sec-pricing" className="sec-pricing">
            <h1 className="mb-5 text-center">Great Prices for Everyone</h1>
            <div className="container">
              <div className="row card-row">
                <div className="col-md-4">
                  <div className="card text-center price-card p-5">
                    <div className="card-block ">
                      <h4 className="card-title h5">Individual</h4>

                      <h5 className="card-title h6">100 &euro;/month</h5>

                      <p className="card-text">
                        The flexible place to grow your products in a community
                        of start-ups, local brands and entrepreneurs, flex desk.
                      </p>

                      <a href="#" className="btn btn-primary">
                        Find out more
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card text-center price-card  p-5">
                    <div className="card-block">
                      <h4 className="card-title h5">Small Group</h4>

                      <h5 className="card-title h6">320 &euro;/month</h5>

                      <p className="card-text">
                        Your own personal products in an open space: market, demand and
                        views to accessorise however you like.
                      </p>

                      <a href="#" className="btn btn-primary">
                        Find out more
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card text-center price-card p-5">
                    <div className="card-block  justify-content-center">
                      <h4 className="card-title h5">Large Group</h4>

                      <h5 className="card-title h6">640 &euro;/month</h5>

                      <p className="card-text">
                        Your own private space, perfect for advertise products, inside a structure that’s always in motion
                      </p>

                      <a href="#" className="btn btn-primary">
                        Find out more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <ContactUs />

          <footer className="footer">
            <div className="container">
              <ul className="list-inline mb-0 text-center">
                <li className="list-inline-item">
                  <a href="">
                    <span className="fa fa-twitter"></span>
                  </a>
                </li>

                <li className="list-inline-item">
                  <a href="">
                    <span className="fa fa-google-plus"></span>
                  </a>
                </li>

                <li className="list-inline-item">
                  <a href="">
                    <span className="fa fa-instagram"></span>
                  </a>
                </li>

                <li className="list-inline-item">
                  <a href="">
                    <span className="fa fa-envelope-o"></span>
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Home;
