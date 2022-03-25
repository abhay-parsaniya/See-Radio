import React, { useEffect, useState } from "react";

function AssignDistributorList({ distributor }) {
  // console.log(distributor);
  const [countViews, setCountViews] = useState(distributor.campaign_current_views);

  const video_url = distributor.campaign_video_url;

  useEffect(() => {
    fetch("/getcurrentviews", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
        id: distributor.iddistribution_partner
      },
    })
      .then((res) => res.json())
      .then((data) => setCountViews[data.result[0].campaign_current_views])
      .catch((err) => console.log(err));
  }, []);

  const CountViews = () => {

    let updatedViews = Math.round((Math.random() * 20000));
    setCountViews(countViews + updatedViews);

    console.log(countViews);

  };

  useEffect(() => {
    fetch("/postcurrentviews", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: distributor.iddistribution_partner,
        currViews: countViews,
        newrequestid: distributor.request
      })
    })
      .then((res) => res.json())
      .then((data) => 
        // console.log(data)
      setCountViews[data.result[0].campaign_current_views]
      )
      .catch((err) => console.log(err));
  }, [countViews]);

  return (
    <>
      <div className="card-body">
        <div className="card-component">
          <div className="card-header text-center">
            <h3>{distributor.campaigntitle}</h3>
          </div>

          <div className="d-flex flex-wrap row justify-content-center">
            <div className="request-details col-md-5 col-sm-12 my-2 mx-3 three-component">
              <div className="card-header col-12 text-center">
                Distributor Details
              </div>
              <div className="d-flex flex-wrap my-3">
                <div className="col-12">
                  <p>
                    Distributor Name : {distributor.distribution_partner_name}
                  </p>
                  <p>
                    Distributor Email : {distributor.distribution_partner_email}
                  </p>
                  <p>
                    Distributor contact :{" "}
                    {distributor.distribution_partner_contact}
                  </p>
                  <p>
                    Distributor city : {distributor.distribution_partner_city}
                  </p>
                  <p>
                    Distributor influencers :{" "}
                    {distributor.distribution_partner_influencers}
                  </p>
                </div>
              </div>
            </div>
            <div className="request-details col-md-5 col-sm-12 my-2 mx-3 three-component">
              <div className="card-header col-12 text-center">
                Campaign Details
              </div>
              <div className="d-flex flex-wrap my-3">
                <div className="col-12">
                  <p>Product Name : {distributor.productName}</p>
                  <p>
                    Advertisement Scope : {distributor.advertisementScope}
                  </p>
                  <p>Budget : {distributor.budget}</p>
                  <p>
                    Target Views : {distributor.targetViews}
                  </p>
                  <p>
                    Current Views : {countViews}                   
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card-footer d-flex flex-wrap justify-content-around">
            <a
              href={`http://localhost:3000/trackview/${distributor.campaign_video_url}`}
              target="_blank"
              className="mx-3 h4 text-primary"
            >
              Designer Video Link
            </a>
            <button
              to={"#"}
              className="mx-3 h4 text-black"
              onClick={CountViews}
              // videourl={distributor.campaign_video_url}
            >
              Track Video
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AssignDistributorList;
