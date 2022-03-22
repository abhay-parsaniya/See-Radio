import React, { useState, useEffect } from "react";
import RequestProgressBar from "./RequestProgressBar";

function InProgressRequest({ reqdata }) {
  // console.log(reqdata);

  const [client_video_url, setClient_video_url] = useState("");
  const [videoApprovalStatus, setVideoApprovalStatus] = useState();

  // console.log(reqdata.idnewrequest)

  fetch("/clientvideourl", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("jwt"),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      client_video_id: reqdata.idnewrequest,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      setClient_video_url(data.result[0].campaign_video_url);
      setVideoApprovalStatus(data.result[0].client_approval_status);
      // console.log(data); //data.result);
    })
    .catch((err) => {
      console.log(err);
    });

  let status = "Pending";

  const ClientApproveVideo = (approval_video_id) => {
    status = "Approved";

    fetch("/clientapprovalvideo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        status: status,
        approvedid: approval_video_id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.error) {
          alert(data.error);
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const ClientRejectVideo = (rejected_video_id) => {
    status = "Rejected";

    fetch("/clientrejectedvideo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        status: status,
        rejectedid: rejected_video_id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.error) {
          alert(data.error);
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="border border-secondary rounded m-2 p-2">
      <div className="container px-5 pt-4">
        <RequestProgressBar progress={reqdata.progress} />

        <div className="pt-5 mt-4">
          <p>
            Name : {reqdata.firstName} {reqdata.lastName}
          </p>
          <p>Product Name : {reqdata.productName}</p>
          <p>Budget : {reqdata.budget}</p>
          <p>
            Your Document Url :{" "}
            <a href={reqdata.file_url} target="_blank">
              Document Link
            </a>
          </p>
          <div className="d-flex flex-start flex-wrap col-md-10 col-sm-12">
            {client_video_url ? (
              <>
                <p className="col-md-6 col-sm-12">
                  Advertisement Video Url :{" "}
                  <a href={client_video_url} target="_blank">
                    Video Link
                  </a>
                </p>
                {videoApprovalStatus === "Pending" ? (
                  <div className="d-flex flex-wrap justify-content-evenly col-md-6 col-sm-12">
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => ClientRejectVideo(reqdata.idnewrequest)}
                    >
                      Reject
                    </button>
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={() => ClientApproveVideo(reqdata.idnewrequest)}
                    >
                      Approve
                    </button>
                  </div>
                ) : videoApprovalStatus === "Approved" ? (
                  <p>Video is approved by you.</p>
                ) : (
                  <p>Video is Rejected by you.</p>
              )}
              </>
            ) : (
              <p className="col-md-6 col-sm-12">
                Advertisement Video Url : No Video Available
              </p>
            )}

            {/* {videoApprovalStatus === "Pending" ? (
              <div className="d-flex flex-wrap justify-content-evenly col-md-6 col-sm-12">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => ClientRejectVideo(reqdata.idnewrequest)}
                >
                  Reject
                </button>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => ClientApproveVideo(reqdata.idnewrequest)}
                >
                  Approve
                </button>
              </div>
            ) : videoApprovalStatus === "Approved" ? (
              <p>Video is approved by you.</p>
            ) : (
              <p>Video is Rejected by you.</p>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InProgressRequest;
