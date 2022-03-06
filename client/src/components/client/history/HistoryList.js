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
            <span style={{ color: "green" }}>Approved</span>
          ) : request.Status === "Pending" ? (
            <span style={{ color: "blue" }}>Pending</span>
          ) : (
            <span style={{ color: "red" }}>Rejected</span>
          )}
        </td>
        {/* <td>{request.request_date_time.toLocaleString()}</td> */}
        <td>{moment(request.request_date_time).format("MMM Do YY")}</td>
      </tr>
    </>
  );
}

export default HistoryList;
