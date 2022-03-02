import React from "react";
import AdminAccountManagerNavbar from "../AdminAccountManagerNavbar";

const AccountManager = () => {
    return(
        <>
            <AdminAccountManagerNavbar title="Account Manager" go="signinaccountmanager" />
            <h1>Account Manager</h1>
        </>
    );
};

export default AccountManager;