import React from "react";
<<<<<<< HEAD
=======
// import { Link } from "react-router-dom";
>>>>>>> 83026aa6dfe1807aee8025746c405f0937c6bf75
import DesignerNavbar from "./DesignerNavbar";
import DesignerAssignedCampaignList from "./DesignerAssignedCampaignList";

const DesignerCampain = () => {
  return (
    <>
      <DesignerNavbar title={"Designer"} go={"signindesigner"} />
<<<<<<< HEAD
      <DesignerAssignedCampaignList />
=======
      <div className="border border-info p-3">
        <div className="row">
          <div className="col-2">
            <p></p>
            {/* <Link>view details</Link> */}
          </div>
          <div className="col-4">
            <table className="table">
              <tbody>
                <tr>
                  <td>Name: </td>
                  <td></td>
                </tr>
                <tr>
                  <td>Company name:</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Product name:</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Budget:</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-3">
            <table className="table">
              <tbody>
                <tr>
                  <td>Name: </td>
                  <td></td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Experience:</td>
                  <td></td>
                </tr>
                <tr>
                  <td>City:</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-3">
            <table className="table">
              <tbody>
                <tr>
                  <td>Name: </td>
                  <td></td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
>>>>>>> 83026aa6dfe1807aee8025746c405f0937c6bf75
    </>
  );
};

export default DesignerCampain;
