import React, { useState, useEffect } from "react";
import "./DesignerAssignedCampaignList.css";

const DesignerAssignedCampaignList = () => {
  const [designerallcampaigns, setDesignerAllCampaigns] = useState([]);
  const [designerVideoFile, setDesignerVideoFile] = useState("");
  const [designer_secure_url, setDesigner_Secure_url] = useState("");
  const [campaignid, setCampaignid] = useState(0);
  const [emailText, setEmailText] = useState("");
  const [emailtomanager, setEmailToManager] = useState("");

  const DesignerAllCampaigns = () => {
    fetch("/designerallcampaigns", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((res) => setDesignerAllCampaigns([...res]))
      // .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    DesignerAllCampaigns();
  }, []);

  // console.log(campaignid);

  useEffect(() => {
    if (designer_secure_url) {
      fetch("/uploaddesignervideo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
        body: JSON.stringify({
          designer_secure_url: designer_secure_url,
          idcampaign: campaignid,
          manager_email: emailtomanager,
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
    }
  }, [designer_secure_url, campaignid, emailtomanager]);

  const SendEmail = (manager_email, idcampaign, campaigntitle) => {
    fetch("/sendemailtomanager", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        manager_email: manager_email,
        idcampaign: idcampaign,
        campaigntitle: campaigntitle,
        emailText: emailText,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
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

  const UploadVideo = async (idcampaign, manageremail) => {
    console.log(idcampaign);
    // event.preventDefault();

    setCampaignid(() => idcampaign);
    setEmailToManager(() => manageremail);

    const uploadfile = new FormData();
    uploadfile.append("file", designerVideoFile);
    uploadfile.append("upload_preset", "see-radio");
    uploadfile.append("cloud_name", "abhay-parsaniya");

    fetch("https://api.cloudinary.com/v1_1/abhay-parsaniya/auto/upload", {
      method: "POST",
      body: uploadfile,
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        setDesigner_Secure_url(result.secure_url);
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(formData);
    // console.log(secure_url);
  };

  return (
    <>
      <div className="container-fluid my-5">
        <div className="row justify-content-center">
          <div className="card col-11">
            <div className="card-header d-flex justify-content-center">
              <h1>Campaign List</h1>
            </div>

            {designerallcampaigns.map((item, index) => {
              return (
                <div className="card-body" key={index}>
                  <div className="card-component">
                    <div className="card-header text-center">
                      {item.campaigntitle}
                    </div>
                    <div className="d-flex flex-wrap row justify-content-center">
                      <div className="request-details col-md-8 col-sm-12 my-2 mx-1 ">
                        <div className="card-header col-12 text-center">
                          Request Details
                        </div>
                        <div className="d-flex flex-wrap my-3">
                          <div className="col-md-6 col-sm-12">
                            <p>Company Name : {item.companyName}</p>
                            <p>Company Scope : {item.companyScope}</p>
                            <p>Product Name : {item.productName}</p>
                          </div>
                          <div className="col-md-6 col-sm-12">
                            <p>Product Scope : {item.productScope}</p>
                            <p>
                              Advertisement Scope : {item.advertisementScope}
                            </p>
                            <p>Target Views : {item.targetViews}</p>
                          </div>
                        </div>
                      </div>
                      <div className="manager-details col-md-3 col-sm-12 my-2 mx-1">
                        <div className="card-header col-12 text-center">
                          Manager Details
                        </div>
                        <div className="my-3">
                          <p>Name : {item.manager_name}</p>
                          <p>Email : {item.manager_email}</p>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer d-flex flex-wrap justify-content-around">
                      <a href={item.file_url} target={"_blank"}>
                        Document
                      </a>

                      {item.campaign_video_url ? (
                        <a href={item.campaign_video_url} target={"_blank"}>
                          Your Video
                        </a>
                      ) : (
                        <a href="No Video Available" target={"_blank"}>
                          No Video Uploaded
                        </a>
                      )}

                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target={`#UploadVideo${item.idcampaign}`}
                      >
                        Upload Video
                      </button>

                      <div
                        className="modal fade"
                        id={`UploadVideo${item.idcampaign}`}
                        tabIndex="-1"
                        aria-labelledby={`UploadVideoLabel${item.idcampaign}`}
                        aria-hidden="true"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id={item.idcampaign}>
                                Upload Video
                              </h5>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div className="modal-body">
                              <input
                                className="form-control"
                                type="file"
                                id="formFile"
                                onChange={(object) =>
                                  setDesignerVideoFile(object.target.files[0])
                                }
                              />
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                                onClick={() =>
                                  UploadVideo(
                                    item.idcampaign,
                                    item.manager_email
                                  )
                                }
                              >
                                Confirm
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target={`#SendEmailModel${item.manager}`}
                      >
                        Need More Info
                      </button>

                      <div
                        className="modal fade"
                        id={`SendEmailModel${item.manager}`}
                        tabIndex="-1"
                        aria-labelledby={`SendEmailModelLabel${item.manager}`}
                        aria-hidden="true"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5
                                className="modal-title"
                                id={`SendEmailModel${item.manager}`}
                              >
                                Write Issue
                              </h5>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div className="modal-body">
                              <input
                                className="form-control"
                                type="text"
                                id="emailText"
                                onChange={(event) => {
                                  setEmailText(event.target.value);
                                }}
                              />
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                                onClick={() => {
                                  SendEmail(
                                    item.manager_email,
                                    item.idcampaign,
                                    item.campaigntitle
                                  );
                                }}
                              >
                                Send Email
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignerAssignedCampaignList;
