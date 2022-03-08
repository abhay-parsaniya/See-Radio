import React, { useState, useEffect } from "react";
import CampaignList from "./CampaignList";
import AddNewCampaign from "./AddNewCampaign";
import AdminAccountManagerNavbar from "../AdminAccountManagerNavbar";

function Campaign() {
  const [approvedReq, setApprovedReq] = useState([]);
  const [designers, setDesigners] = useState([]);
  const [campaigns, setCampaigns] = useState([]);
  const [newCampaigndesigner, setNewCampaigndesigner] = useState(0);
  const [newCampaignreq, setNewCampaignreq] = useState(0);
  const [newManager, setNewManager] = useState(0);
  const [newCampaigntitle, setNewCampaigntitle] = useState("");
  const [managers, setManagers] = useState([]);

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

  const allManager = () => {
    fetch("/managers", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setManagers([...res]))
      // .then((res) => console.log("designer:", res))
      .catch((err) => console.log(err));
  };

  const allDesigners = () => {
    fetch("/designers", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setDesigners([...res]))
      // .then((res) => console.log("designer:", res))
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
    allManager();
  }, []);

  const createCampaignForm = (e) => {
    e.preventDefault();
    const campaignData = {
      designer: newCampaigndesigner,
      request: newCampaignreq,
      manager: newManager,
      title: newCampaigntitle,
    };
    // console.log(campaignData);

    if (newCampaigndesigner !== 0 && newCampaignreq !== 0) {
      fetch("/addcampaign", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(campaignData),
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    } else {
      console.log("Select designer and request...");
    }

    // console.log(newCampaigndesigner);
    // console.log(newCampaignreq);
    // console.log(newCampaigntitle);
  };

  const handleChange = (event) => {
    if (event.target.name === "designer") {
      setNewCampaigndesigner(event.target.value);
    } else if (event.target.name === "approvedrequest") {
      setNewCampaignreq(event.target.value);
    } else if (event.target.name === "manager") {
      setNewManager(event.target.value);
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
          managers={managers}
          newCampaigndesigner={newCampaigndesigner}
          newCampaignreq={newCampaignreq}
          newManager={newManager}
          newCampaigntitle={newCampaigntitle}
          handleChange={handleChange}
          submitForm={createCampaignForm}
        />
      </div>

      <div className="container">
        <h4 className="text-center">Campaign List</h4>
        <div className="border border-info p-3 my-2">
          <div className="row">
            <div className="col-2">
              <p style={{ fontWeight: "bold" }}>Campaign Title</p>
            </div>
            <div className="col-4">
              <p style={{ fontWeight: "bold" }}>Request Details</p>
            </div>
            <div className="col-3">
              <p style={{ fontWeight: "bold" }}>Designer Details</p>
            </div>
            <div className="col-3">
              <p style={{ fontWeight: "bold" }}>Manager Details</p>
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
