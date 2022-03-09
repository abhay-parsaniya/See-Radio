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
                {campaignDetail.firstName} {campaignDetail.lastName}
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{campaignDetail.email}</td>
            </tr>
            <tr>
              <td>Contact no</td>
              <td>{campaignDetail.contactno}</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>{campaignDetail.address}</td>
            </tr>
            <tr>
              <td>City</td>
              <td>{campaignDetail.city}</td>
            </tr>
            <tr>
              <td>State</td>
              <td>{campaignDetail.state}</td>
            </tr>
            <tr>
              <td>Country</td>
              <td>{campaignDetail.country}</td>
            </tr>
            <tr>
              <td>Zip</td>
              <td>{campaignDetail.zip}</td>
            </tr>
            <tr>
              <td>Company Name</td>
              <td>{campaignDetail.companyName}</td>
            </tr>
            <tr>
              <td>Company Email</td>
              <td>{campaignDetail.companyEmail}</td>
            </tr>
            <tr>
              <td>Company Contact no.</td>
              <td>{campaignDetail.companyContactno}</td>
            </tr>
            <tr>
              <td>Company Scope</td>
              <td>{campaignDetail.companyScope}</td>
            </tr>
            <tr>
              <td>Company Address</td>
              <td>{campaignDetail.companyAddress}</td>
            </tr>
            <tr>
              <td>Company City</td>
              <td>{campaignDetail.companyCity}</td>
            </tr>
            <tr>
              <td>Company State</td>
              <td>{campaignDetail.companyState}</td>
            </tr>
            <tr>
              <td>Company Country</td>
              <td>{campaignDetail.companyCountry}</td>
            </tr>
            <tr>
              <td>Company Zip</td>
              <td>{campaignDetail.companyZip}</td>
            </tr>
            <tr>
              <td>Product Name</td>
              <td>{campaignDetail.productName}</td>
            </tr>
            <tr>
              <td>Product Scope</td>
              <td>{campaignDetail.productScope}</td>
            </tr>
            <tr>
              <td>Budget</td>
              <td>{campaignDetail.budget}</td>
            </tr>
            <tr>
              <td>Advertisement Scope</td>
              <td>{campaignDetail.advertisementScope}</td>
            </tr>
            <tr>
              <td>Target Views</td>
              <td>{campaignDetail.targetViews}</td>
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
              <td>Email</td>
              <td>{campaignDetail.designeremail} </td>
            </tr>
            <tr>
              <td>Contact no</td>
              <td>{campaignDetail.designercontactno} </td>
            </tr>
            <tr>
              <td>City</td>
              <td>{campaignDetail.designercity} </td>
            </tr>
            <tr>
              <td>experience</td>
              <td>{campaignDetail.experience} </td>
            </tr>
            <tr>
              <td>qualification</td>
              <td>{campaignDetail.qualification} </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CampaignDetails;
