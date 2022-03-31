import React, { useState, useEffect } from "react";
import ClientNavbar from "../ClientNavbar";
import InProgressRequest from "./InProgressRequest";
import PendingRequest from "./PendingRequest";
import RejectedRequest from "./RejectedRequest";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function RequestProgress() {
  const [approved, setApproved] = useState([]);
  const [rejected, setRejected] = useState([]);
  const [pending, setPending] = useState([]);
  const [clientViews, setClientViews] = useState();

  useEffect(() => {
    fetch("/clientrequestprogress", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        data &&
          data.result[0].map((req) =>
            req.Status === "Approved"
              ? setApproved((prev) => [...prev, req])
              : req.Status === "Rejected"
              ? setRejected((prev) => [...prev, req])
              : setPending((prev) => [...prev, req])
          );
        // console.log(data.result[1][0].campaign_current_views);
        setClientViews(data.result[1][0].campaign_current_views);
        // console.log(data); //data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <ClientNavbar />

      <div className="container">
        <Tabs
          defaultActiveKey="InProgressRequest"
          id="uncontrolled-tab"
          className="d-flex justify-content-around my-3"
        >
          <Tab eventKey="InProgressRequest" title="In Progress Request">
            <h4 className="pt-4">Approved Requests</h4>
            <hr></hr>
            {approved.length > 0 ? (
              approved.map((item, index) => (
                <InProgressRequest reqdata={item} key={index} views={clientViews} />
              ))
            ) : (
              <h6>No approved request available</h6>
            )}
          </Tab>
          <Tab eventKey="PendingRequest" title="Pending Request">
            <h4 className="pt-4">Pending Requests</h4>
            <hr></hr>
            {pending.length > 0 ? (
              pending.map((item, index) => (
                <PendingRequest reqdata={item} key={index} />
              ))
            ) : (
              <h6>No pending request available</h6>
            )}
          </Tab>
          <Tab eventKey="RejectedRequest" title="Rejected Request">
            <h4 className="pt-4">Rejected Requests</h4>
            <hr></hr>
            {rejected.length > 0 ? (
              rejected.map((item, index) => (
                <RejectedRequest reqdata={item} key={index} />
              ))
            ) : (
              <h6>No rejected request available</h6>
            )}
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

export default RequestProgress;
