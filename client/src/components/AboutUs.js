import React from "react";
import Navbar from "./Navbar";

const AboutUs = () => {
  return (
    <>
      <>
        {/* <Navbar /> */}
        <section id="sec-about" className="sec-about pt-5 pb-5">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-md-10 col-lg-8">
                <h1 className="h1">About us</h1>
                <p className="mt-4 mb-4 h4">
                  Co-working spaces are brilliant for smaller companies of up to
                  4 people who want a regular workspace. Cost effective,
                  flexible and full of a vibrant energy that comes from hundreds
                  of like-minded people going it alone.
                </p>
              </div>
            </div>

            <div className="row mt-4 text-center">
              <div className="col-sm-4">
                <h4>350</h4>
                <h5>members</h5>
              </div>

              <div className="col-sm-4">
                <h4>60</h4>
                <h5>co-working spaces </h5>
              </div>

              <div className="col-sm-4">
                <h4>3</h4>
                <h5>members' bars</h5>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default AboutUs;
