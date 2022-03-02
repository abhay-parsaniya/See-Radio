import React from "react";

function DesignerList({ designers, deletedesigner }) {
  return (
    <>
      <div className="col-3">
        <p>
          {designers.firstname} {designers.lastname}
        </p>
      </div>
      <div className="col-3">{designers.contactno}</div>
      <div className="col-4">{designers.email}</div>
      <div className="col-2">
        <button
          className="btn btn-danger"
          //   onClick={() => deletedesigner(designers.id)}
        >
          delete
        </button>
      </div>
    </>
  );
}

export default DesignerList;
