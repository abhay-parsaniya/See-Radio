import React from "react";

function DistributorList({ distributor, deletedistributor }) {
  return (
    <>
      <div
        className="modal"
        id={`deleteModal${distributor.iddistribution_partner}`}
        tabIndex="-1"
        aria-labelledby={`deleteModalLabel${distributor.iddistribution_partner}`} //"deleteModalLabel"
        aria-hidden="true"
      >
        {/* {console.log("delete modal")} */}
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

      <tr>
        <th scope="row">1</th>
        <td>{distributor.distribution_partner_name}</td>
        <td>{distributor.distribution_partner_contact}</td>
        <td>{distributor.distribution_partner_email}</td>
        <td>{distributor.distribution_partner_experience}</td>
        <td>{distributor.distribution_partner_city}</td>
        <td>{distributor.distribution_partner_influencers}</td>
        <td>
          <button
            type="button"
            className="btn btn-danger"
            data-bs-target={`#deleteModal${distributor.iddistribution_partner}`}
            data-bs-toggle="modal"
            // data-bs-dismiss="modal"
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}

export default DistributorList;
