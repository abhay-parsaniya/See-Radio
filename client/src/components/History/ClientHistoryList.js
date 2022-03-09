import React from "react";
import moment from "moment";

function HistoryList({ request }) {
  return (
    <>
      <tr>
        <td>
          {request.firstName} {request.lastName}
        </td>
        <td>{request.companyName}</td>
        <td>{request.productName}</td>
        <td>{request.budget}</td>
        <td>
          {request.Status === "Approved" ? (
            <span className="btn btn-success">Approved</span>
          ) : request.Status === "Pending" ? (
            <span className="btn btn-warning">Pending</span>
          ) : (
            <span className="btn btn-danger">Rejected</span>
          )}
        </td>
        {/* <td>{request.request_date_time.toLocaleString()}</td> */}
        <td>{moment(request.request_date_time).format("MMM Do YY")}</td>
      </tr>
    </>
  );
}

export default HistoryList;
