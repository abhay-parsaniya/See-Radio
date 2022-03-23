import React from "react";
import { Link } from "react-router-dom";
import CampaignDetails from "./CampaignDetails";
import './Campaign.css';

function CampaignList(campaign) {

  return (
    <>
      <div className="card-body">
        <div className="card-component">
          <div className="card-header text-center">
            <h3>{campaign.campaign.campaigntitle}</h3>
          </div>

          <div className="d-flex flex-wrap row justify-content-center">
            <div className="request-details col-md-4 col-sm-12 my-2 mx-2 three-component">
              <div className="card-header col-12 text-center">
                Request Details
              </div>
              <div className="d-flex flex-wrap my-3">
                <div className="col-12">
                  <p>
                    Client Name : {campaign.campaign.firstName} {campaign.campaign.LastName}
                  </p>
                  <p>Company Name : {campaign.campaign.companyName}</p>
                  <p>Product Name : {campaign.campaign.productName}</p>
                  <p>Budget : {campaign.campaign.budget}</p>
                </div>
              </div>
            </div>

            <div className="request-details col-md-4 col-sm-12 my-2 mx-2 three-component">
              <div className="card-header col-12 text-center">
                Designer Details
              </div>
              <div className="d-flex flex-wrap my-3">
                <div className="col-12">
                  <p>
                    Designer Name : {campaign.campaign.firstname}
                    {campaign.campaign.lastname}
                  </p>
                  <p>Designer Email : {campaign.campaign.designeremail}</p>
                  <p>Designer Experience : {campaign.campaign.experience}</p>
                  <p>Designer City : {campaign.campaign.designercity}</p>
                </div>
              </div>
            </div>

            <div className="manager-details col-md-3 col-sm-12 my-2 mx-2 three-component">
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
            {/* <Link to={`/CampaignDetails/${campaign.campaign.idcampaign}`}>
              
            </Link> */}

            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#campaign${campaign.campaign.idcampaign}`}>
              View Details
            </button>

            <div className="modal fade" id={`campaign${campaign.campaign.idcampaign}`} tabIndex="-1" aria-labelledby={`${campaign.campaign.idcampaign}Label`} aria-hidden="true">
              <div className="modal-dialog modal-dialog-scrollable modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id={`${campaign.campaign.idcampaign}Label`}>Campaign Details</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <CampaignDetails id={campaign.campaign.idcampaign} />
                  </div>
                </div>
              </div>
            </div>
            {
              campaign.campaign.campaign_video_url ? (
                <a href={campaign.campaign.campaign_video_url} target="_blank" className="mx-3 text-success h5">Designer Video Link</a>
              ) : (
                <a href="No Video Link Available" target="_blank" className="mx-3 text-danger h5">No Video Available</a>
              )
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default CampaignList;
