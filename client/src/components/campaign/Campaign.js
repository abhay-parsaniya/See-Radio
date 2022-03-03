import React, { useState, useEffect } from "react";
import CampaignList from "./CampaignList";
import AddNewCampaign from "./AddNewCampaign";
import AdminAccountManagerNavbar from "../AdminAccountManagerNavbar";

function Campaign() {
  const [approvedReq, setApprovedReq] = useState([]);
  const [designers, setDesigners] = useState([]);
  const [campaigns, setCampaigns] = useState([]);
  const [newCampaigndesigner, setNewCampaigndesigner] = useState();
  const [newCampaignreq, setNewCampaignreq] = useState();
  const [newCampaigntitle, setNewCampaigntitle] = useState("");

  const approvedRequest = () => {
    fetch("/approvedrequest", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((res) => setApprovedReq([...res.result]))
      //   .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const allDesigners = () => {
    fetch("/designers", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setDesigners([...res]))
      //   .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const allCampaigns = () => {
    fetch("/campaigns", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setCampaigns([...res]))
      //   .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    approvedRequest();
    allDesigners();
    allCampaigns();
  }, []);

  const createCampaignForm = (e) => {
    e.preventDefault();
    console.log(newCampaigndesigner);
    console.log(newCampaignreq);
    console.log(newCampaigntitle);
  };

  const handleChange = (event) => {
    if (event.target.name === "designer") {
      setNewCampaigndesigner(event.target.value);
    } else if (event.target.name === "approvedrequest") {
      setNewCampaignreq(event.target.value);
    } else if (event.target.name === "campaigntitlename") {
      setNewCampaigntitle(event.target.value);
    }
  };

  return (
    <>
      <AdminAccountManagerNavbar />

      <div className="container d-flex flex-row-reverse mt-3">
        <AddNewCampaign
          approvedReq={approvedReq}
          designers={designers}
          newCampaigndesigner={newCampaigndesigner}
          newCampaignreq={newCampaignreq}
          newCampaigntitle={newCampaigntitle}
          handleChange={handleChange}
          submitForm={createCampaignForm}
        />
      </div>

      <div className="container">
        <h4 className="text-center">Campaign List</h4>
        <div className="border border-info p-3 my-2">
          <div className="row">
            <div className="col-3">
              <p style={{ fontWeight: "bold" }}>Campaign Title</p>
            </div>
            <div className="col-6">
              <p style={{ fontWeight: "bold" }}>Request Details</p>
            </div>
            <div className="col-3">
              <p style={{ fontWeight: "bold" }}>Designer Name</p>
            </div>
          </div>
        </div>
        {/* {console.log(campaigns)} */}
        {campaigns.map((Campaign) => (
          <CampaignList
            campaign={Campaign}
            key={Campaign.idcampaign}
            newCampaign
          />
        ))}
      </div>
    </>
  );
}

export default Campaign;

//get approved request and designer and assign approved request to designer
//fetch approved request
//fetch designer
//assign designer a request
