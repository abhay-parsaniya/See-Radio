import React from 'react';
import RequestCard from './RequestCard';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

const RequestsData = (props) => {

    // console.log(props.data);

    let status = "Pending";

    const Approved = (ApprovedId) => {

        status = "Approved";

        fetch("/approvedrequest",{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer "+localStorage.getItem("jwt")
            },
            body: JSON.stringify({
              status: status,
              approvedid: ApprovedId
            })
          })
          .then(res => res.json())
          .then(data => {
            // console.log(data);
            if(data.error)
            {
              // alert(data.error);
              toast.error(data.error, {
                theme: 'colored',
                type: 'error'
              });
            }
            else{
              // alert(data.msg);
              toast.success(data.msg, {
                theme: 'colored',
                type: 'success'
              });
            }
          }).catch((err) => {
            console.log(err);
          });
    };

    const Rejected = (RejectedId) => {

        status = "Rejected";

        fetch("/rejectedrequest",{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer "+localStorage.getItem("jwt")
            },
            body: JSON.stringify({
              status: status,
              rejectedid: RejectedId
            })
          })
          .then(res => res.json())
          .then(data => {
            // console.log(data);
            if(data.error)
            {
              // alert(data.error);
              toast.error(data.error, {
                theme: 'colored',
                type: 'error'
              });
            }
            else{
              // alert(data.msg);
              toast.success(data.msg, {
                theme: 'colored',
                type: 'success'
              });
            }
          }).catch((err) => {
            console.log(err);
          });
    };

  return (
    <>
        <RequestCard data={props.data} onApproved={Approved} onRejected={Rejected} bgcolor={props.bgcolor} title={props.title} txtcolor={props.txtcolor} />
    </>
  )
};

export default RequestsData;