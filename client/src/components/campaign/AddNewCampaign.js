import React from "react";

function AddNewCampaign({
  approvedReq,
  designers,
  newCampaigndesigner,
  newCampaignreq,
  newCampaigntitle,
  handleChange,
  submitForm,
}) {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary my-2 "
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        + Assign approved request to designer
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title px-1" id="exampleModalLabel">
                Assign approved request to designer
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
                    onSubmit={submitForm}
                  >
                    <div>
                      <label className="form-label">Designer: </label>
                      <select
                        name="designer"
                        value={newCampaigndesigner}
                        onChange={handleChange}
                        className="btn btn-light border border-primary my-2 mx-2"
                      >
                        {designers.map((designer) => {
                          return (
                            <option value={designer.id} key={designer.id}>
                              {designer.firstname}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div>
                      <label className="form-label">Approved Request: </label>
                      <select
                        name="approvedrequest"
                        value={newCampaignreq}
                        onChange={handleChange}
                        className="btn btn-light border border-primary my-2 mx-2"
                      >
                        {approvedReq.map((req) => {
                          return (
                            <option
                              value={req.idnewrequest}
                              key={req.idnewrequest}
                            >
                              {req.firstName}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div>
                      <label className="form-label">Campaign Title</label>
                      <input
                        type="text"
                        className="form-control"
                        id="campaigntitle"
                        name="campaigntitlename"
                        value={newCampaigntitle}
                        onChange={handleChange}
                      />
                    </div>
                    <hr></hr>
                    <button className="btn btn-primary">Submit</button>
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

export default AddNewCampaign;
