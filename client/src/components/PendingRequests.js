import React, { useEffect, useState } from "react";
import AdminAccountManagerNavbar from "./AdminAccountManagerNavbar";

const PendingRequests = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/pendingrequest", {
            headers: {
                "Authorization": "Bearer "+localStorage.getItem("jwt")
            }
        })
        .then(res => res.json())
        .then(result => {
            // console.log(result.result);
            setData(result.result);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);

    return(
        <>
            <AdminAccountManagerNavbar />
            <div className="container-fluid col-10">
                <h1 className="text-center my-3">Pending Requests</h1>
                <div className="col-12 my-5 d-flex flex-wrap">
                    {
                        data.map(item => {
                            {/* console.log(item); */}
                            return (
                                <div className="card col-md-5 col-sm-12 border-success mb-3" key={item.idnewrequest}>
                                    <div className="card-header d-flex flex-wrap bg-transparent">
                                        <span className="px-1"><p className="h3"> {item.firstName} </p></span>
                                        <span className="px-1"><p className="h3"> {item.lastName} </p></span>
                                    </div>
                                    <div className="card-body text-success">
                                        <h5 className="card-title">Success card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                    <div className="card-footer bg-transparent">
                                        <div className="d-flex flex-wrap justify-content-around">
                                            <button type="button" className="btn btn-secondary my-2"  data-bs-toggle="modal" data-bs-target="#exampleModal">View Details</button>
                                            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h2 className="modal-title px-1" id="exampleModalLabel"> {item.firstName} </h2>
                                                            <h2 className="modal-title px-1" id="exampleModalLabel"> {item.lastName} </h2>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <div className="container">
                                                                <div className="row d-flex flex-wrap">
                                                                    <div className="col-12 my-2">
                                                                        <h5>Email : {item.email}</h5>
                                                                    </div>
                                                                    <div className="col-12 my-2">
                                                                        <h5>Contact No. : {item.contactno}</h5>
                                                                    </div>
                                                                    <div className="col-12 my-2">
                                                                        <h5>Address : {item.address}</h5>
                                                                    </div>
                                                                    <div className="col-12 my-2">
                                                                        <h5>City : {item.city}</h5>
                                                                    </div>
                                                                    <div className="col-12 my-2">
                                                                        <h5>State : {item.state}</h5>
                                                                    </div>
                                                                    <div className="col-12 my-2">
                                                                        <h5>Country : {item.country}</h5>
                                                                    </div>
                                                                    <div className="col-12 my-2">
                                                                        <h5>Zip : {item.zip}</h5>
                                                                    </div>
                                                                    <div className="col-12 my-2">
                                                                        <h5>Company Name : {item.companyName}</h5>
                                                                    </div>
                                                                    <div className="col-12 my-2">
                                                                        <h5>Company Email : {item.companyEmail}</h5>
                                                                    </div>
                                                                    <div className="col-12 my-2">
                                                                        <h5>Company Contact No. : {item.companyContactno}</h5>
                                                                    </div>
                                                                    <div className="col-12 my-2">
                                                                        <h5>Company Scope : {item.companyScope}</h5>
                                                                    </div>
                                                                    <div className="col-12 my-2">
                                                                        <h5>Company Address : {item.companyAddress}</h5>
                                                                    </div>
                                                                    <div className="col-12 my-2">
                                                                        <h5>Company City : {item.companyCity}</h5>
                                                                    </div>
                                                                    <div className="col-12 my-2">
                                                                        <h5>Company State : {item.companyState}</h5>
                                                                    </div>
                                                                    <div className="col-12 my-2">
                                                                        <h5>Company Country : {item.companyCountry}</h5>
                                                                    </div>
                                                                    <div className="col-12 my-2">
                                                                        <h5>Company Zip : {item.companyZip}</h5>
                                                                    </div>
                                                                    <div className="col-12 my-2">
                                                                        <h5>Product Name : {item.productName}</h5>
                                                                    </div>
                                                                    <div className="col-12 my-2">
                                                                        <h5>Budget : {item.budget}</h5>
                                                                    </div>
                                                                    <div className="col-12 my-2">
                                                                        <h5>Product Scope : {item.productScope}</h5>
                                                                    </div>
                                                                    <div className="col-12 my-2">
                                                                        <h5>AdvertimentScope Scope : {item.advertisementScope}</h5>
                                                                    </div>
                                                                    <div className="col-12 my-2">
                                                                        <h5>Targeted Views : {item.targetViews}</h5>
                                                                    </div>
                                                                    <div className="col-12 my-2">
                                                                        <h5>File URL : {item.file_url}</h5>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="button" className="btn btn-danger my-2">Reject</button>
                                            <button type="button" className="btn btn-success my-2">Approve</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default PendingRequests;