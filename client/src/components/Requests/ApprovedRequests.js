import React, { useState } from "react";
import AdminAccountManagerNavbar from "../AdminAccountManagerNavbar";
import RequestsData from "./RequestsData";

const ApprovedRequests = () => {

    const [approvedId, setApprovedId] = useState(0);
    console.log(approvedId);

    return(
        <>
            <AdminAccountManagerNavbar />
            <RequestsData setApprovedId = {setApprovedId} />
        </>
    );
};

export default ApprovedRequests;