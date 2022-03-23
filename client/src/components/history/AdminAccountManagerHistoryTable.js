import React, { useState, useEffect } from "react";

const HistoryTable = () => {

    const [historyData, setHistoryData] = useState([]);

    useEffect(() => {
        fetch("/adminaccountmanagerhistorydata", {
            headers: {
                "Authorization": "Bearer "+localStorage.getItem("jwt")
            }
        })
        .then(res => res.json())
        .then(result => {
            // console.log(result);
            setHistoryData(result.resultHistoryData);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);

    console.log(historyData);

    return(
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <div className='table-responsive'>
                        <table className="table table-info table-hover table-striped">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Company Name</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Budget</th>
                                <th scope="col">Target Views</th>
                                <th scope="col">Current Views</th>
                                <th scope="col">Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                historyData.map((historyItem, index) => {
                                    return(
                                        <tr>
                                            <th scope="row">{index + 1}</th>
                                            <td>{historyItem.firstName} {historyItem.lastName}</td>
                                            <td>{historyItem.companyName}</td>
                                            <td>{historyItem.productName}</td>
                                            <td>{historyItem.budget}</td>
                                            <td>{historyItem.targetViews}</td>
                                            <td>@mdo</td>
                                            <td>
                                                {historyItem.Status === "Approved" ? (
                                                    <span className="badge rounded-pill bg-success">Approved</span>
                                                ) : historyItem.Status === "Pending" ? (
                                                    <span className="badge rounded-pill bg-warning">Pending</span>
                                                ) : (
                                                    <span className="badge rounded-pill bg-danger">Rejected</span>
                                                )}
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HistoryTable;