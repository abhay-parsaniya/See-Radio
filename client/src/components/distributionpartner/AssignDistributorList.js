import React from "react";
import { Link } from "react-router-dom";
import TrackView from "../CampainView/TrackView";

function AssignDistributorList({ distributor }) {
  const video_url = distributor.campaign_video_url;
  return (
    <>
      {" "}
      <div className="card-body">
        <div className="card-component">
          <div className="card-header text-center">
            <h3>{distributor.campaigntitle}</h3>
          </div>

          <div className="d-flex flex-wrap row justify-content-center">
            <div className="request-details col-md-5 col-sm-12 my-2 mx-1">
              <div className="card-header col-12 text-center">
                Distributor Details
              </div>
              <div className="d-flex flex-wrap my-3">
                <div className="col-12">
                  <p>
                    distributor Name : {distributor.distribution_partner_name}
                  </p>
                  <p>
                    distributor Email{distributor.distribution_partner_email}
                  </p>
                  <p>
                    distributor contact:{" "}
                    {distributor.distribution_partner_contact}
                  </p>
                  <p>
                    distributor city: {distributor.distribution_partner_city}
                  </p>
                  <p>
                    distributor influencers:{" "}
                    {distributor.distribution_partner_influencers}
                  </p>
                </div>
              </div>
            </div>
            <div className="request-details col-md-5 col-sm-12 my-2 mx-1">
              <div className="card-header col-12 text-center">
                campaign Details
              </div>
              <div className="d-flex flex-wrap my-3">
                <div className="col-12">
                  <p>Product Name : {distributor.productName}</p>
                  <p>
                    Advertisement Scope:
                    {distributor.advertisementScope}
                  </p>
                  <p>Budget: {distributor.budget}</p>
                  <p>
                    Target Views:
                    {distributor.targetViews}
                  </p>
                  <p>
                    Current Views:
                    {distributor.campaign_current_views}
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="manager-details col-md-3 col-sm-12 my-2 mx-1">
              <div className="card-header col-12 text-center">
                Manager Details
              </div>
              <div className="my-3">
                <p>Name : {distributor.campaign.manager_name}</p>
                <p>Email : {distributor.campaign.manager_email}</p>
              </div>
            </div> */}
          </div>
          <div className="card-footer d-flex flex-wrap justify-content-around">
            <a
              href={`http://localhost:3000/trackview/${distributor.campaign_video_url}`}
              target="_blank"
              className="mx-3"
            >
              Designer Video Link
            </a>
            <Link
              // to={`/trackview`}
              to={"#"}
              className="mx-3"
              // videourl={distributor.campaign_video_url}
            >
              Track Video Link
            </Link>
            {/* <a
              href={`http://localhost:3000/trackview/?link=${encodeURI(
                distributor.campaign_video_url
              )}`}
              target="_blank"
              className="mx-3"
            >
              Track Video Link
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default AssignDistributorList;
