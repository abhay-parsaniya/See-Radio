import React, { useState, useEffect } from "react";

function DesignerDetails(props) {
  const [designerdetail, setDesignerdeatil] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contactno: "",
    city: "",
    qualification: "",
    experience: "",
  });
  let { id } = props;

  useEffect(() => {
    fetch(`/designerdetail/${id}`, {
      method: "GET",
      headers: {
        "Authorization": "Bearer "+localStorage.getItem("jwt")
      }
    })
      .then((res) => res.json())
      .then((res) => setDesignerdeatil(res[0]))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="container mt-3">
      <table className="table table-striped">
        <tbody>
          <tr>
            <td>Firstname</td>
            <td>{designerdetail.firstname}</td>
          </tr>
          <tr>
            <td>Lastname</td>
            <td>{designerdetail.lastname}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{designerdetail.designeremail}</td>
          </tr>
          <tr>
            <td>Contact no</td>
            <td>{designerdetail.designercontactno}</td>
          </tr>
          <tr>
            <td>City</td>
            <td>{designerdetail.designercity}</td>
          </tr>
          <tr>
            <td>Experience</td>
            <td>{designerdetail.experience}</td>
          </tr>
          <tr>
            <td>Qualification</td>
            <td>{designerdetail.qualification}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DesignerDetails;
