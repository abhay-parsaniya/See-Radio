import React, { useState, useEffect } from "react";
import ClientNavbar from "../client/ClientNavbar";
import HistoryList from "./ClientHistoryList";
import "./AdminAccountManagerHistory.css";

function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetch("/clientrequestprogress", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.result[1])
        data && setHistory(data.result[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <ClientNavbar />

      <div className="history-admin">
        <h1 className="text-center my-4 ">History</h1>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <div className="table-responsive">
                <table className="table table-info table-hover table-striped text-center">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Company name</th>
                      <th scope="col">Product name</th>
                      <th scope="col">Budget</th>
                      <th scope="col">Target Views</th>
                      {/* <th scope="col">Achived Views</th> */}
                      <th scope="col">Status</th>
                      <th scope="col">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {history?.length > 0 ? (
                      history.map((item, index) => (
                        <HistoryList request={item} key={index} />
                      ))
                    ) : (
                      <tr>
                        <td>Nothing in history</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default History;
