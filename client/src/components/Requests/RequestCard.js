import React from "react";
import './RequestCard.css';
import DataMap from "./DataMap";

const RequestCard = (props) => {

    // console.log(props.data);

    const Approved = (ApprovedId) => {
        props.onApproved(ApprovedId);
    };

    const Rejected = (RejectedId) => {
        props.onRejected(RejectedId);
    };
    
    return(
        <>
            <div className="container-fluid col-10 main-container">
                <h1 className="text-center my-3 title">{props.title} Requests</h1>
                <div className="col-12 my-5 d-flex flex-wrap">
                    <DataMap data={props.data} onApproved={Approved} onRejected={Rejected} bgcolor={props.bgcolor} title={props.title} txtcolor={props.txtcolor} />
                </div>
            </div>
        </>
    );
};

export default RequestCard;