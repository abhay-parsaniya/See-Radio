import React from "react";
import { Link } from "react-router-dom";

function CampaignList(campaign) {
  return (
    <>
      <div className="card-body">
        <div className="card-component">
          <div className="card-header text-center">
            <h3>{campaign.campaign.campaigntitle}</h3>
          </div>

          <div className="d-flex flex-wrap row justify-content-center">
            <div className="request-details col-md-4 col-sm-12 my-2 mx-1">
              <div className="card-header col-12 text-center">
                Request Details
              </div>
              <div className="d-flex flex-wrap my-3">
                <div className="col-md-6 col-sm-12">
                  <p>
                    {campaign.campaign.firstName} {campaign.campaign.LastName}
                  </p>
                  <p>Company Name : {campaign.campaign.companyName}</p>
                  <p>Product Name : {campaign.campaign.productName}</p>
                </div>
              </div>
            </div>

            <div className="request-details col-md-4 col-sm-12 my-2 mx-1">
              <div className="card-header col-12 text-center">
                Designer Details
              </div>
              <div className="d-flex flex-wrap my-3">
                <div className="col-md-6 col-sm-12">
                  <p>
                    Designer name : {campaign.campaign.firstname}{" "}
                    {campaign.campaign.lastname}
                  </p>
                  <p>designer email : {campaign.campaign.designeremail}</p>
                  <p>designer experience : {campaign.campaign.experience}</p>
                  <p>designer city : {campaign.campaign.designercity}</p>
                </div>
              </div>
            </div>

            <div className="manager-details col-md-3 col-sm-12 my-2 mx-1">
              <div className="card-header col-12 text-center">
                Manager Details
              </div>
              <div className="my-3">
                <p>Name : {campaign.campaign.manager_name}</p>
                <p>Email : {campaign.campaign.manager_email}</p>
              </div>
            </div>
          </div>
          <div className="card-footer d-flex flex-wrap justify-content-around">
            <Link to={`/CampaignDetails/${campaign.campaign.idcampaign}`}>
              view details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CampaignList;
