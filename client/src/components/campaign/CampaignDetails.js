import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function CampaignDetails() {
  let { id } = useParams();
  const [campaignDetail, setCampaignDetail] = useState({});

  useEffect(() => {
    fetch(`/campaigns/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setCampaignDetail(res[0]))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <div className="container w-50 mt-5">
        <h4>Campaign details</h4>
        <table className="table table-striped">
          <tbody>
            <tr>
              <td>Campaign Title</td>
              <td>{campaignDetail.campaigntitle}</td>
            </tr>
          </tbody>
        </table>
        <h4>Request details</h4>
        <table className="table table-striped">
          <tbody>
            <tr>
              <td>Name</td>
              <td>
                {campaignDetail.firstName} {campaignDetail.firstName}
              </td>
            </tr>
            <tr>
              <td>email</td>
              <td>{campaignDetail.email}</td>
            </tr>
            <tr>
              <td>Contact no</td>
              <td>{campaignDetail.contactno}</td>
            </tr>
            <tr>
              <td>address</td>
              <td>{campaignDetail.address}</td>
            </tr>
            <tr>
              <td>city</td>
              <td>{campaignDetail.city}</td>
            </tr>
            <tr>
              <td>state</td>
              <td>{campaignDetail.state}</td>
            </tr>
            <tr>
              <td>country</td>
              <td>{campaignDetail.country}</td>
            </tr>
            <tr>
              <td>companyContactno</td>
              <td>{campaignDetail.companyContactno}</td>
            </tr>
            <tr>
              <td>companyScope</td>
              <td>{campaignDetail.companyScope}</td>
            </tr>
            <tr>
              <td>companyAddress</td>
              <td>{campaignDetail.companyAddress}</td>
            </tr>
            <tr>
              <td>productName</td>
              <td>{campaignDetail.productName}</td>
            </tr>
            <tr>
              <td>productScope</td>
              <td>{campaignDetail.productScope}</td>
            </tr>
            <tr>
              <td>budget</td>
              <td>{campaignDetail.budget}</td>
            </tr>
            <tr>
              <td>file_url</td>
              <td>{campaignDetail.file_url}</td>
            </tr>
          </tbody>
        </table>
        <h4>Designer details</h4>
        <table className="table table-striped">
          <tbody>
            <tr>
              <td>Name</td>
              <td>
                {campaignDetail.firstname} {campaignDetail.lastname}
              </td>
            </tr>
            <tr>
              <td>email</td>
              <td> {campaignDetail.email} </td>
            </tr>
            <tr>
              <td>experience</td>
              <td> {campaignDetail.experience} </td>
            </tr>
            <tr>
              <td>qualification</td>
              <td> {campaignDetail.qualification} </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CampaignDetails;
