import React, { useState, useEffect } from "react";
import AdminAccountManagerNavbar from "../AdminAccountManagerNavbar";
import AddDistributionPartner from "./AddDistributionPartner";
import DistributorList from "./DistributorList";

function DistributionPartner() {
  const [formData, setFormData] = useState({
    distribution_name: "",
    distribution_contactno: "",
    distribution_email: "",
    distribution_experience: "",
    distribution_city: "",
    distribution_influencer: "",
  });

  const [distributor, setDistributor] = useState([]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((values) => ({ ...values, [name]: value }));
    fetch("/distributors", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((res) => setDistributor([...res]))
      .catch((err) => console.log(err));
  };
  //   get all distributor list
  useEffect(() => {
    fetch("/distributors", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      // .then((res) => console.log(res))
      .then((res) => setDistributor([...res]))
      .catch((err) => console.log(err));
  }, [distributor]);

  //   add new designer
  const formhandler = (e) => {
    e.preventDefault();
    // console.log(formData);

    fetch("/adddistributor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({ ...formData }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          console.log(data.msg);
          //   navigate("/designer");
          setFormData({
            distribution_name: "",
            distribution_contactno: "",
            distribution_email: "",
            distribution_experience: "",
            distribution_city: "",
            distribution_influencer: "",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // delete designer
  const deletedistributor = (distributor_id) => {
    // console.log(`/deletedistributor/${distributor_id}`);
    fetch(`/deletedistributor/${distributor_id}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    }).catch((err) => console.log(err));
  };

  return (
    <>
      <AdminAccountManagerNavbar />

      <div className="container d-flex flex-row-reverse mt-3">
        <AddDistributionPartner
          formData={formData}
          submitform={formhandler}
          handleChange={handleChange}
        />
      </div>

      <div className="container my-4">
        <div className="row text-center">
          <div className="col-2 my-3 text-uppercase">Name</div>
          <div className="col-2 my-3 text-uppercase">Contact No</div>
          <div className="col-2 my-3 text-uppercase">Email</div>
          <div className="col-1 my-3 text-uppercase">Experience</div>
          <div className="col-1 my-3 text-uppercase">City</div>
          <div className="col-2 my-3 text-uppercase">No of influencers</div>
          <div className="col-2 my-3 text-uppercase">Remove</div>
          <hr></hr>
          {distributor.map((dist) => (
            <DistributorList
              distributor={dist}
              key={dist.iddistribution_partner}
              deletedistributor={deletedistributor}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default DistributionPartner;
