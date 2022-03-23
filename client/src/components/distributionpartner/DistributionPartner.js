import React, { useState, useEffect } from "react";
import AdminAccountManagerNavbar from "../AdminAccountManagerNavbar";
import AddDistributionPartner from "./AddDistributionPartner";
import DistributorList from "./DistributorList";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import AssignDistributor from "./AssignDistributor";
import AssignDistributorList from "./AssignDistributorList";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

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
  const [newDistributor, setNewDistributor] = useState(0);
  const [newApprovedVideo, setNewApprovedVideo] = useState(0);
  const [requestId, setRequestId] = useState(0);
  const [assignedDistributorList, setAssignedDistributorList] = useState([]);

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
          // alert(data.error);
          toast.error(data.error, {
            theme: 'colored',
            type: 'error'
          });
        } else {
          // console.log(data.msg);
          toast.success(data.msg, {
            theme: 'colored',
            type: 'success'
          });
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

  const handleChangeAssign = (event) => {
    if (event.target.name === "distributor") {
      setNewDistributor(event.target.value);
    } else if (event.target.name === "approvedvideo") {
      setNewApprovedVideo(event.target.value);
    }
  };

  const assignVideoToDistributor = (e) => {
    e.preventDefault();
    const distributorvideodata = {
      distributor: newDistributor,
      approvedVideo: newApprovedVideo,
      requestId: requestId,
    };
    // console.log(distributorvideodata);

    if (newDistributor !== 0 && newApprovedVideo !== 0) {
      fetch("/assigndistributor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
        body: JSON.stringify(distributorvideodata),
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    } else {
      console.log("Select designer and request...");
    }
  };

  useEffect(() => {
    fetch("/assigneddistributionlist", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((res) => setAssignedDistributorList(res.result))
      .catch((err) => console.log(err));
  }, []);
  // console.log(assignedDistributorList);

  return (
    <>
      <AdminAccountManagerNavbar />

      <Tabs
        defaultActiveKey="AssignDistributor"
        id="uncontrolled-tab"
        className="d-flex justify-content-around my-3"
      >
        <Tab eventKey="DistributorList" title="Distributor List">
          <div className="container d-flex flex-row-reverse mt-3">
            <AddDistributionPartner
              formData={formData}
              submitform={formhandler}
              handleChange={handleChange}
            />
          </div>

          <div className="container my-4">
            <div className="row text-center">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">No.</th>
                      <th scope="col">Name</th>
                      <th scope="col">Contact No</th>
                      <th scope="col">Email</th>
                      <th scope="col">Experience</th>
                      <th scope="col">City</th>
                      <th scope="col">No of influencers</th>
                      <th scope="col">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {distributor.map((dist) => (
                      <DistributorList
                        distributor={dist}
                        key={dist.iddistribution_partner}
                        deletedistributor={deletedistributor}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey="AssignDistributor" title="Assign Distributor">
          <div className="container d-flex flex-row-reverse mt-3">
            <AssignDistributor
              distributors={distributor}
              setRequestId={setRequestId}
              newDistributor={newDistributor}
              newApprovedVideo={newApprovedVideo}
              handleChangeAssign={handleChangeAssign}
              submitform={assignVideoToDistributor}
            />
          </div>

          <div className="container-fluid my-5">
            <div className="row justify-content-center">
              <div className="card col-11">
                <div className="card-header d-flex justify-content-center">
                  <h1>Assigned Distributor</h1>
                </div>

                {assignedDistributorList.map((distributor) => (
                  <AssignDistributorList
                    distributor={distributor}
                    key={distributor.iddistribution_partner}
                  />
                ))}
              </div>
            </div>
          </div>
        </Tab>
      </Tabs>
    </>
  );
}

export default DistributionPartner;
