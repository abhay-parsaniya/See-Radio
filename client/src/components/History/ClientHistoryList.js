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
            <span className="badge rounded-pill bg-success">Approved</span>
          ) : request.Status === "Pending" ? (
            <span className="badge rounded-pill bg-warning">Pending</span>
          ) : (
            <span className="badge rounded-pill bg-danger">Rejected</span>
          )}
        </td>
        {/* <td>{request.request_date_time.toLocaleString()}</td> */}
        <td>{moment(request.request_date_time).format("MMM Do YY")}</td>
      </tr>
    </>
  );
}

export default HistoryList;
