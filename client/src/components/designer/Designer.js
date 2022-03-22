import { useState, useEffect } from "react";
import AdminAccountManagerNavbar from "../AdminAccountManagerNavbar";
import AddDesigner from "./AddDesigner";
import DesignerList from "./DesignerList";
import "./DesignerAssignedCampaignList.css";

function Designer() {
  //   const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    designeremail: "",
    designercontactno: "",
    designercity: "",
    qualification: "",
    experience: "",
    designerpassword: "",
  });

  const [designers, setDesigners] = useState([]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((values) => ({ ...values, [name]: value }));
    fetch("/designers", {
      method: "GET",
      headers: {
        "Authorization": "Bearer "+localStorage.getItem("jwt")
      }
    })
      .then((res) => res.json())
      .then((res) => setDesigners([...res]))
      .catch((err) => console.log(err));
  };
  //   get all designer list
  useEffect(() => {
    fetch("/designers", {
      method: "GET",
      headers: {
        "Authorization": "Bearer "+localStorage.getItem("jwt")
      }
    })
      .then((res) => res.json())
        // .then((res) => console.log(res))
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
        "Authorization": "Bearer "+localStorage.getItem("jwt")
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
            firstname: "",
            lastname: "",
            designeremail: "",
            designercontactno: "",
            designercity: "",
            qualification: "",
            experience: "",
            designerpassword: "",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //   delete designer
  const deletedesigner = (designer_id) => {
    // console.log(`/deletedesigner/${designer_id}`);
    fetch(`/deletedesigner/${designer_id}`, {
      method: "GET",
      headers: {
        "Authorization": "Bearer "+localStorage.getItem("jwt")
      }
    }).catch((err) => console.log(err));
  };

  return (
    <>
      <AdminAccountManagerNavbar />

      <div className="container d-flex flex-row-reverse mt-3">
        <AddDesigner
          formData={formData}
          submitform={formhandler}
          handleChange={handleChange}
        />
      </div>

      <div className="container my-4 main-designer">
        <div className="row text-center">
          {designers.map((designer, index) => (
            <DesignerList
              designers={designer}
              key={designer.id}
              deletedesigner={deletedesigner}
              idindex={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Designer;
