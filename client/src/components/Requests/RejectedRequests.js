import React, {useState, useEffect} from "react";
import AdminAccountManagerNavbar from "../AdminAccountManagerNavbar";
import RequestsData from "./RequestsData";

const RejectedRequests = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/rejectedrequest", {
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
            <RequestsData data={data} />
        </>
    );
};

export default RejectedRequests;