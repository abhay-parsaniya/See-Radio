import React from "react";

function PendingRequest({ reqdata }) {
  return (
    <div className="border border-secondary rounded m-2 p-2">
      <div className="container pt-3">
        <p>
          {reqdata.firstName} {reqdata.lastName}
        </p>
        <p>{reqdata.productName}</p>
        <p>{reqdata.budget}</p>
        <p>{reqdata.file_url}</p>
      </div>
    </div>
  );
}

export default PendingRequest;
