import React, { useEffect, useState } from "react";
import AdminAccountManagerNavbar from "../AdminAccountManagerNavbar";
import RequestsData from "./RequestsData";

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
            <RequestsData data={data} bgcolor={"warning"} title={"Pending"} />
        </>
    );
};

export default PendingRequests;