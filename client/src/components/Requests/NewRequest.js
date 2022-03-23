import React, { useEffect, useState } from "react";
import PersonalInfo from "../client/forms/PersonalInfo";
import CompanyInfo from "../client/forms/CompanyInfo";
import ProductInfo from "../client/forms/ProductInfo";
import ClientNavbar from "../client/ClientNavbar";
import "./NewRequest.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

const NewRequest = () => {
  const [page, setPage] = useState(0);
  const [secure_url, setSecure_url] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactno: "",
    address: "",
    city: "",
    clientState: "",
    country: "",
    zip: "",
    companyName: "",
    companyEmail: "",
    companyContactno: "",
    companyScope: "",
    companyAddress: "",
    companyCity: "",
    companyState: "",
    companyCountry: "",
    companyZip: "",
    productName: "",
    budget: "",
    productScope: "",
    advertisementScope: "",
    targetViews: "",
    infofile: "",
  });

  const FormTitles = ["Personal", "Company", "Product"];

  useEffect(() => {
    if (secure_url) {
      fetch("/newrequest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
        body: JSON.stringify({
          formData: formData,
          secure_url: secure_url,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.error) {
            // alert(data.error);
            toast.error(data.error, {
              theme: 'colored',
              type: 'error'
            });
          } else {
            // alert(data.msg);
            toast.success(data.msg, {
              theme: 'colored',
              type: 'success'
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [secure_url]);

  function IncrementPage() {
    return setPage(page + 1);
  }

  function DecrementPage() {
    return setPage(page - 1);
  }

  function PageDisplay() {
    if (page === 0) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <CompanyInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <ProductInfo formData={formData} setFormData={setFormData} />;
    }
  }

  function ButtonRendering() {
    if (page === 2) {
      return (
        <button
          type="submit"
          className="btn btn-primary px-5 my-2"
          onClick={submitData}
        >
          Submit
        </button>
      );
    } else {
      return (
        <button
          type="submit"
          className="btn btn-primary px-5 my-2"
          onClick={IncrementPage}
        >
          Next
        </button>
      );
    }
  }

  function submitData(event) {
    event.preventDefault();

    if(formData.infofile === "")
    {
      // alert('Please Fill all the Fields');
      toast.error('Please Fill all the Fields', {
        theme: 'colored',
        type: 'error'
      });
      return;
    }
    const uploadfile = new FormData();
    uploadfile.append("file", formData.infofile);
    uploadfile.append("upload_preset", "see-radio");
    uploadfile.append("cloud_name", "abhay-parsaniya");

    fetch("https://api.cloudinary.com/v1_1/abhay-parsaniya/auto/upload", {
      method: "POST",
      body: uploadfile,
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        setSecure_url(result.secure_url);
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(formData);
    // console.log(secure_url);
  }

  return (
    <>
      <ClientNavbar />
      <div className="container-fluid col-10">
        <div className="row my-3">
          <div className="form">
            <h1 className="text-center py-5">New Request Form !!</h1>
            <div className="progress col-8 mx-auto my-3">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                style={
                  page === 0
                    ? { width: "33.3%" }
                    : page === 1
                    ? { width: "66.6%" }
                    : { width: "100%" }
                }
              >
                {page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%"}
              </div>
            </div>
            <div className="form-container">
              <div className="header text-center py-3">
                <h1>{FormTitles[page]} Information</h1>
              </div>
              <div className="body d-flex justify-content-center py-3">
                {PageDisplay()}
              </div>
              <div className="footer d-flex flex-wrap justify-content-evenly py-3">
                <button
                  type="submit"
                  className="btn btn-primary px-5 my-2"
                  onClick={DecrementPage}
                  disabled={page === 0}
                >
                  Prev
                </button>
                {ButtonRendering()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewRequest;
