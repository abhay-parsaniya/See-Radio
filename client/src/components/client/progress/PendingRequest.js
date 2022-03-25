import React from "react";
import "./Progressbar.css";

function PendingRequest({ reqdata }) {
  return (
    <div className="main-background m-2 p-2">
      <div className="container pt-3">
        <p>
          Name : {reqdata.firstName} {reqdata.lastName}
        </p>
        <p>Company Name : {reqdata.companyName}</p>
        <p>Product Name : {reqdata.productName}</p>
        <p>Budget : {reqdata.budget}</p>
        <p>Target Views : {reqdata.targetViews}</p>
        <p>
          Document Url :{" "}
          <a href={reqdata.file_url} target="_blank">
            Document
          </a>
        </p>
      </div>
    </div>
  );
}

export default PendingRequest;
