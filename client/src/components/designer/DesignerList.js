import React from "react";
import { useNavigate } from "react-router-dom";

function DesignerList({ designers, deletedesigner }) {
  const Navigate = useNavigate();

  function redirectToDesigner() {
    return Navigate(`/designerdetails/${designers.id}`);
  }

  return (
    <>
      <div className="col-3" onClick={redirectToDesigner}>
        <p>
          {designers.firstname} {designers.lastname}
        </p>
      </div>
      <div className="col-3">{designers.contactno}</div>
      <div className="col-4">{designers.email}</div>
      <div className="col-2">
        <button
          className="btn btn-danger"
          onClick={() => deletedesigner(designers.id)}
        >
          delete
        </button>
      </div>
    </>
  );
}

export default DesignerList;
