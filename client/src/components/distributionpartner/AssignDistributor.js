import React, { useState, useEffect } from "react";

function AssignDistributor({
  distributors,
  setRequestId,
  newDistributor,
  newApprovedVideo,
  handleChangeAssign,
  submitform,
}) {
  const [approvedVideo, setApprovedVideo] = useState([]);

  useEffect(() => {
    fetch("/approvedcampaignvideo", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result.request);
        setRequestId(result[0].request);
        setApprovedVideo(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <button
        type="button"
        className="btn btn-primary my-2 "
        data-bs-toggle="modal"
        data-bs-target="#AssignDistributionPartner"
      >
        + Assign Distribution Partner
      </button>
      <div
        className="modal fade bd-example-modal-md"
        id="AssignDistributionPartner"
        tabIndex="-1"
        aria-labelledby="DistributionPartnerLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title px-1" id="DistributionPartnerLabel">
                Assign Distribution Partner
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
                      <label className="form-label">distributor: </label>
                      {distributors.length > 0 ? (
                        <select
                          name="distributor"
                          value={newDistributor}
                          onChange={handleChangeAssign}
                          className="btn btn-light border border-primary my-2 mx-2"
                        >
                          <option value={0} key={0} disabled>
                            Select distributor
                          </option>
                          {distributors.map((distributor) => {
                            return (
                              <option
                                value={distributor.iddistribution_partner}
                                key={distributor.iddistribution_partner}
                              >
                                {distributor.distribution_partner_name} (
                                {distributor.distribution_partner_email} )
                              </option>
                            );
                          })}
                        </select>
                      ) : (
                        <select
                          name="distributor"
                          value="No distributor available"
                          onChange={handleChangeAssign}
                          className="btn btn-light border border-primary my-2 mx-2"
                          disabled
                        >
                          <option disabled>No Distributor available</option>
                        </select>
                      )}
                    </div>
                    <div>
                      <label className="form-label">
                        Approved Video Campaign:{" "}
                      </label>
                      {approvedVideo.length > 0 ? (
                        <select
                          name="approvedvideo"
                          value={newApprovedVideo}
                          onChange={handleChangeAssign}
                          className="btn btn-light border border-primary my-2 mx-2"
                        >
                          <option value={0} key={0} disabled>
                            Select Request
                          </option>
                          {approvedVideo.map((req) => {
                            return (
                              <option
                                value={req.idcampaign}
                                key={req.idcampaign}
                              >
                                {req.campaigntitle}
                              </option>
                            );
                          })}
                        </select>
                      ) : (
                        <select
                          name="approvedvideo"
                          value="No Approved video campaign available"
                          onChange={handleChangeAssign}
                          className="btn btn-light border border-primary my-2 mx-2"
                          disabled
                        ></select>
                      )}
                    </div>

                    <div className="my-3">
                      <button
                        className="btn btn-primary"
                        type="submit"
                        data-bs-dismiss="modal"
                      >
                        Assign Distribution Partner
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

export default AssignDistributor;
