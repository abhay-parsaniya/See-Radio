import React from "react";
import { useNavigate } from "react-router-dom";

function DesignerList({ designers, deletedesigner }) {
  const Navigate = useNavigate();

  function redirectToDesigner() {
    return Navigate(`/designerdetails/${designers.iddesigner}`);
  }

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

      <div className="col-3">
        <p>
          {designers.firstname} {designers.lastname}
        </p>
      </div>
      <div className="col-2">{designers.designercontactno}</div>
      <div className="col-3">{designers.designeremail}</div>
      <div className="col-2">
        <span
          onClick={redirectToDesigner}
          style={{ color: "blue", cursor: "pointer" }}
        >
          View Details
        </span>
      </div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-danger"
          data-bs-toggle="modal"
          data-bs-target={`#deleteModal${designers.iddesigner}`}
        >
          Delete
        </button>
      </div>
    </>
  );
}

export default DesignerList;
