import React from "react";
import RequestProgressBar from "./RequestProgressBar";

function InProgressRequest({ reqdata }) {
  return (
    <div className="border border-secondary rounded m-2 p-2">
      <div className="container px-5 pt-4">
        <RequestProgressBar progress={reqdata.progress} />

        <div className="pt-5 mt-4">
          <p>
            {reqdata.firstName} {reqdata.lastName}
          </p>
          <p>{reqdata.productName}</p>
          <p>{reqdata.budget}</p>
          <p>{reqdata.file_url}</p>
        </div>
      </div>
    </div>
  );
}

export default InProgressRequest;
