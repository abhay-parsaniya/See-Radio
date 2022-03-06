import React, { useState, useEffect } from "react";
import ClientNavbar from "../ClientNavbar";
import HistoryList from "./HistoryList";

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
        data && setHistory(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <ClientNavbar />

      <div className="container mt-4">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Company name</th>
              <th scope="col">Product name</th>
              <th scope="col">budget</th>
              <th scope="col">Status</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {history?.result?.length > 0 ? (
              history.result.map((item, index) => (
                <HistoryList request={item} key={index} />
              ))
            ) : (
              <tr>
                <td>Nothing in history</td>
              </tr>
            )}
          </tbody>
        </table>
        {/* {console.log(history)} */}
      </div>
    </>
  );
}

export default History;
