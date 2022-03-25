import React from "react";
import DesignerDetails from './DesignerDetails';

function DesignerList({ designers, deletedesigner, idindex }) {

  return (
    <>
      {/* Delete Model */}
      <div
        className="modal"
        id={`deleteModal${designers.iddesigner}`}
        tabIndex="-1"
        aria-labelledby={`deleteModalLabel${designers.iddesigner}`} //"deleteModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4
                className="modal-title px-1"
                id={`deleteModalLabel${designers.iddesigner}`}
              >
                Delete Designer?
              </h4>
            </div>
            <div className="modal-body">
              <div className="container">
                <h5>
                  Are you sure want to delete {'"'}
                  {designers.firstname} {designers.lastname}
                  {'"'}?
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
                  onClick={() => deletedesigner(designers.iddesigner)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <table className="table table-warning mb-0">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Contact No.</th>
            <th scope="col">Details</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody> */}
          <tr>
            <th scope="row">{idindex+1}</th>
            <td>{designers.firstname} {designers.lastname}</td>
            <td>{designers.designeremail}</td>
            <td>{designers.designercontactno}</td>
            <td>
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#designer${designers.iddesigner}`}>
                View Details
              </button>

              <div className="modal fade" id={`designer${designers.iddesigner}`} tabIndex="-1" aria-labelledby={`${designers.iddesigner}Label`} aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id={`${designers.iddesigner}Label`}>Designer Details</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <DesignerDetails id={designers.iddesigner} />
                    </div>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-toggle="modal"
                data-bs-target={`#deleteModal${designers.iddesigner}`}
              >
                Delete
              </button>
            </td>
          </tr>
        {/* </tbody>
      </table> */}
    </>
  );
}

export default DesignerList;
