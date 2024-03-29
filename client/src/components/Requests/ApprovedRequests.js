import React, {useState, useEffect} from "react";
import AdminAccountManagerNavbar from "../AdminAccountManagerNavbar";
import RequestsData from "./RequestsData";

const ApprovedRequests = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/approvedrequest", {
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

    // console.log(data);

    return(
        <>
            <AdminAccountManagerNavbar />
            <RequestsData data={data} bgcolor={"success"} title={"Approved"} txtcolor={"white"} />
        </>
    );
};

export default ApprovedRequests;