import { useState, useEffect } from "react";
import AdminAccountManagerNavbar from "../AdminAccountManagerNavbar";
import AddDesigner from "./AddDesigner";
import DesignerList from "./DesignerList";

function Designer() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contactno: "",
    city: "",
    qualification: "",
    experience: "",
  });

  const [designers, setDesigners] = useState([]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((values) => ({ ...values, [name]: value }));
    fetch("/designers", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setDesigners([...res]))
      .catch((err) => console.log(err));
  };

  //   get all designer list
  useEffect(() => {
    fetch("/designers", {
      method: "GET",
    })
      .then((res) => res.json())
      //   .then((res) => console.log(res))
      .then((res) => setDesigners([...res]))
      .catch((err) => console.log(err));
  }, [designers]);

  //   add new designer
  const formhandler = (e) => {
    e.preventDefault();
    // console.log(formData);

    fetch("/adddesigner", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formData }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          alert(data.msg);
          //   navigate("/designer");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //   const deletedesigner = (designer_id) => {
  //     fetch(`/deletedesigner/${designer_id}`, {
  //       method: "GET",
  //     }).catch((err) => console.log(err));
  //   };

  return (
    <>
      <AdminAccountManagerNavbar />

      <AddDesigner
        formData={formData}
        submitform={formhandler}
        handleChange={handleChange}
      />

      <div className="container my-4">
        <div className="row text-center">
          <div className="col-3 my-3 text-uppercase">Name</div>
          <div className="col-3 my-3 text-uppercase">Contact No</div>
          <div className="col-4 my-3 text-uppercase">Email</div>
          <div className="col-2 my-3 text-uppercase">Delete Designer</div>
          <hr></hr>
          {designers.map((designer) => (
            <DesignerList
              designers={designer}
              key={designer.id}
              // deletedesigner={deletedesigner}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Designer;
