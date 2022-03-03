import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function DesignerDetails() {
  const [designerdetail, setDesignerdeatil] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contactno: "",
    city: "",
    qualification: "",
    experience: "",
  });
  let { id } = useParams();

  useEffect(() => {
    fetch(`/designerdetail/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setDesignerdeatil(res[0]))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="container w-50 mt-5">
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
            <td>{designerdetail.email}</td>
          </tr>
          <tr>
            <td>Contact no</td>
            <td>{designerdetail.contactno}</td>
          </tr>
          <tr>
            <td>City</td>
            <td>{designerdetail.city}</td>
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
