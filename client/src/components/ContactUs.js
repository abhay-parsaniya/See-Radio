import React from "react";

function ContactUs() {
  return (
    <>
      <section id="sec-contact" className="sec-contact pt-5 pb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-7">
              <h1 className="h4 py-3">
                Have a question? Get in touch with us!
              </h1>

              <form id="contact_us_form" action="" method="">
                <fieldset className="form-group">
                  <label className="py-1" htmlFor="formName">
                    Your Name:
                  </label>
                  <input
                    id="formName"
                    className="form-control mb-3"
                    type="text"
                    placeholder="Your Name"
                    required
                  />
                </fieldset>

                <fieldset className="form-group">
                  <label className="py-1" htmlFor="formEmail1">
                    Email address:
                  </label>
                  <input
                    id="formEmail1"
                    className="form-control mb-3"
                    type="email"
                    placeholder="Enter email"
                    required
                  />
                </fieldset>

                <fieldset className="form-group">
                  <label className="py-1" htmlFor="formMessage">
                    Your Messaglabele:
                  </label>
                  <textarea
                    id="formMessage"
                    className="form-control mb-3"
                    rows="3"
                    placeholder="Your message"
                    required
                  ></textarea>
                </fieldset>

                <fieldset className="form-group text-center mt-2">
                  <button className="btn btn-primary" type="submit">
                    Send Message
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
