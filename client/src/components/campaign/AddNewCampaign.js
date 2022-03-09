import React from "react";

function AddNewCampaign({
  approvedReq,
  designers,
  managers,
  newCampaigndesigner,
  newCampaignreq,
  newManager,
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
        + Create Campaign
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
                Create Campaign
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
                      {designers.length > 0 ? (
                        <select
                          name="designer"
                          value={newCampaigndesigner}
                          onChange={handleChange}
                          className="btn btn-light border border-primary my-2 mx-2"
                        >
                          <option value={0} key={0} disabled>
                            Select Designer
                          </option>
                          {designers.map((designer) => {
                            return (
                              <option value={designer.iddesigner} key={designer.iddesigner}>
                                {designer.firstname} {designer.lastname}
                              </option>
                            );
                          })}
                        </select>
                      ) : (
                        <select
                          name="designer"
                          value="No designer available"
                          onChange={handleChange}
                          className="btn btn-light border border-primary my-2 mx-2"
                          disabled
                        >
                          <option disabled>No designer available</option>
                        </select>
                      )}
                    </div>
                    <div>
                      <label className="form-label">Approved Request: </label>
                      {approvedReq.length > 0 ? (
                        <select
                          name="approvedrequest"
                          value={newCampaignreq}
                          onChange={handleChange}
                          className="btn btn-light border border-primary my-2 mx-2"
                        >
                          <option value={0} key={0} disabled>
                            Select Request
                          </option>
                          {approvedReq.map((req) => {
                            return (
                              <option
                                value={req.idnewrequest}
                                key={req.idnewrequest}
                              >
                                {req.firstName} {req.lastName} (
                                {req.productName})
                              </option>
                            );
                          })}
                        </select>
                      ) : (
                        <select
                          name="approvedrequest"
                          value="No Approved Request available"
                          onChange={handleChange}
                          className="btn btn-light border border-primary my-2 mx-2"
                          disabled
                        ></select>
                      )}
                    </div>

                    <div>
                      <label className="form-label">Manager: </label>
                      {managers.length > 0 ? (
                        <select
                          name="manager"
                          value={newManager}
                          onChange={handleChange}
                          className="btn btn-light border border-primary my-2 mx-2"
                        >
                          <option value={0} key={0} disabled>
                            Select Request
                          </option>
                          {managers.map((manager) => {
                            return (
                              <option
                                value={manager.idaccountmanager}
                                key={manager.idaccountmanager}
                              >
                                {manager.manager_name}({manager.manager_email})
                              </option>
                            );
                          })}
                        </select>
                      ) : (
                        <select
                          name="manager"
                          value="No manager available"
                          onChange={handleChange}
                          className="btn btn-light border border-primary my-2 mx-2"
                          disabled
                        ></select>
                      )}
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
                        placeholder="Campaign Title"
                        required
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
