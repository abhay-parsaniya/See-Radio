import React from "react";

function DistributorList({ distributor, deletedistributor }) {
  return (
    <>
      {/* Delete Model */}
      <div
        className="modal"
        id={`deleteModal${distributor.iddistribution_partner}`}
        tabIndex="-1"
        aria-labelledby={`deleteModalLabel${distributor.iddistribution_partner}`} //"deleteModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4
                className="modal-title px-1"
                id={`deleteModalLabel${distributor.iddistribution_partner}`}
              >
                Delete Designer?
              </h4>
            </div>

            <div className="modal-body">
              <div className="container">
                <h5>
                  Are you sure want to delete {'"'}
                  {distributor.distribution_partner_name}
                </h5>
                <button
                  data-bs-dismiss="modal"
                  className="btn btn-primary mx-3 "
                >
                  Cancel
                </button>
                <button
                  className="btn btn-danger mx-3"
                  data-bs-dismiss="modal"
                  onClick={() =>
                    deletedistributor(distributor.iddistribution_partner)
                  }
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-2">
        <p>{distributor.distribution_partner_name}</p>
      </div>
      <div className="col-2">{distributor.distribution_partner_contact}</div>
      <div className="col-2">{distributor.distribution_partner_email}</div>
      <div className="col-1">{distributor.distribution_partner_experience}</div>
      <div className="col-1">{distributor.distribution_partner_city}</div>
      <div className="col-2">
        {distributor.distribution_partner_influencers}
      </div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-danger"
          data-bs-toggle="modal"
          data-bs-target={`#deleteModal${distributor.iddistribution_partner}`}
        >
          Delete
        </button>
      </div>
    </>
  );
}

export default DistributorList;
