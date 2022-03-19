import React from "react";

function AddDistributionPartner({ formData, submitform, handleChange }) {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary my-2 "
        data-bs-toggle="modal"
        data-bs-target="#DistributionPartner"
      >
        + Add Distribution Partner
      </button>
      <div
        className="modal fade"
        id="DistributionPartner"
        tabIndex="-1"
        aria-labelledby="DistributionPartnerLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title px-1" id="DistributionPartnerLabel">
                Add New DistributionPartner
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="row d-flex flex-wrap">
                  <form
                    className="justify-content-center"
                    onSubmit={submitform}
                  >
                    <div>
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputdisName"
                        name="distribution_name"
                        value={formData.distribution_name}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="form-label">Contact No.</label>
                      <input
                        type="number"
                        className="form-control"
                        id="inputdisContactNo"
                        name="distribution_contactno"
                        value={formData.distribution_contactno}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="inputdisEmail"
                        name="distribution_email"
                        value={formData.distribution_email}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label className="form-label">Experience</label>
                      <input
                        type="number"
                        className="form-control"
                        id="inputdisexperience"
                        name="distribution_experience"
                        value={formData.distribution_experience}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="form-label">City</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputdistCity"
                        name="distribution_city"
                        value={formData.distribution_city}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="form-label">No. of influencers</label>
                      <input
                        type="number"
                        className="form-control"
                        id="inputinfluencers"
                        name="distribution_influencer"
                        value={formData.distribution_influencer}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="my-3">
                      <button
                        className="btn btn-primary"
                        type="submit"
                        data-bs-dismiss="modal"
                      >
                        Add new Distribution Partner
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddDistributionPartner;
