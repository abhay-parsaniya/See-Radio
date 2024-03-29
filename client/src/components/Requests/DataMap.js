import React from 'react';

const DataMap = (props) => {

    console.log(props.data);

    const Approved = (ApprovedId) => {
        props.onApproved(ApprovedId);
    };

    const Rejected = (RejectedId) => {
        props.onRejected(RejectedId);
    };

    const ButtonRendering = (idnewrequest, btnStatus) => {
        if(btnStatus === "Pending")
        {
            return (
                <>
                    <button type="button" className="btn btn-danger my-2" onClick={ () => {Rejected(idnewrequest)} } >Reject</button>
                    
                    <button type="button" class="btn btn-success my-2" data-bs-toggle="modal" data-bs-target={`#exampleModal${idnewrequest}`}>Approve</button>

                    <div class="modal fade" id={`exampleModal${idnewrequest}`} tabindex="-1" aria-labelledby={`exampleModalLabel${idnewrequest}`} aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id={`exampleModalLabel${idnewrequest}`}>Approve Request</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <h3>Are You Sure To Approve Request ?</h3>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={ () => {Approved(idnewrequest)} }>Confirm</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </>
            );
        }
    };

    const ViewButtonRendering = (btnStatus, idnewrequest) => {
        if(btnStatus === "Pending")
        {
            return (
                <button type="button" className="btn btn-secondary my-2"  data-bs-toggle="modal" data-bs-target={`#newrequest${idnewrequest}`}>View Details</button>
            );
        }
        else{
            return (
                <button type="button" className="btn btn-warning my-2"  data-bs-toggle="modal" data-bs-target={`#newrequest${idnewrequest}`}>View Details</button>
            );
        }
    };

  return (
    <>
        {
            props.data.map(item => {
                return (
                    <div className={`card col-md-5 col-sm-12 border-${props.bgcolor} bg-${props.bgcolor} my-4 text-${props.txtcolor}`} key={item.idnewrequest}>
                        <div className="card-header d-flex flex-wrap bg-transparent">
                            <span className="px-1"><p className="h3"> {item.firstName} </p></span>
                            <span className="px-1"><p className="h3"> {item.lastName} </p></span>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title py-1">Email : {item.email}</h5>
                            <h5 className="card-title py-1">Contact No. : {item.contactno}</h5>
                            <h5 className="card-title py-1">Company Name : {item.companyName}</h5>
                            <h5 className="card-title py-1">Product Name : {item.productName}</h5>
                            <h5 className="card-title py-1">Budget : {item.budget}</h5>
                            <h5 className="card-title py-1">Target Views : {item.targetViews}</h5>
                        </div>
                        <div className="card-footer bg-transparent">
                            <div className="d-flex flex-wrap justify-content-around">
                                {ViewButtonRendering(item.Status, item.idnewrequest)}
                                <div className="modal fade" id={`newrequest${item.idnewrequest}`} tabIndex="-1" aria-labelledby={`newrequest${item.idnewrequest}Label`} aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content text-black">
                                            <div className="modal-header">
                                                <h2 className="modal-title px-1" id={`newrequest${item.idnewrequest}Label`}> {item.firstName} </h2>
                                                <h2 className="modal-title px-1" id={`newrequest${item.idnewrequest}Label`}> {item.lastName} </h2>
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
                                {ButtonRendering(item.idnewrequest, item.Status)}
                            </div>
                        </div>
                    </div>
                );
            })
        }
    </>
  )
};

export default DataMap;