import React from "react";
import { Link } from "react-router-dom";

function CampaignList(campaign) {
  return (
    <>
      {/* <p>{console.log(campaign.campaign.campaigntitle)}</p> */}
      <div className="border border-info p-3">
        <div className="row">
          <div className="col-3">
            <p>{campaign.campaign.campaigntitle}</p>
            <Link to={`/CampaignDetails/${campaign.campaign.idcampaign}`}>
              view details
            </Link>
          </div>
          <div className="col-6">
            <table className="table">
              <tbody>
                <tr>
                  <td>Name: </td>
                  <td>
                    {campaign.campaign.firstName} {campaign.campaign.LastName}
                  </td>
                </tr>
                <tr>
                  <td>Company name:</td>
                  <td>{campaign.campaign.companyName}</td>
                </tr>
                <tr>
                  <td>Product name:</td>
                  <td>{campaign.campaign.productName}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-3">
            <p>
              {campaign.campaign.firstname} {campaign.campaign.lastname}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CampaignList;

//campaign
// idcampaign: 1;
// campaigntitle: "democampaign";
//request
// firstName: "mit";
// LastName: "patel";
// companyName: "sdfhskj";
// productName: "sdfsdf";
//designer
// firstname: "mitanshu";
// lastname: "mil";
