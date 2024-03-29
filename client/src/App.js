import React, { createContext, useContext, useEffect, useReducer } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import AdminAccountManagerHistory from "./components/history/AdminAccountManagerHistory";
import SignInAdmin from "./components/admin/SignInAdmin";
import Admin from "./components/admin/Admin";
import SignInAccountManager from "./components/account manager/SignInAccountManager";
import AccountManager from "./components/account manager/AccountManager";
import SignInClient from "./components/client/SignInClient";
import Client from "./components/client/Client";
import SignUpClient from "./components/client/SignUpClient";
import NewRequest from "./components/Requests/NewRequest";
import PendingRequests from "./components/Requests/PendingRequests";
import ApprovedRequests from "./components/Requests/ApprovedRequests";
import RejectedRequests from "./components/Requests/RejectedRequests";
import { initialState, Reducer } from "./reducer/Reducer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import SignInDesigner from "./components/designer/SignInDesigner";
import Designer from "./components/designer/Designer";
import DesignerCampain from "./components/designer/DesignerCampain";
import DesignerDetails from "./components/designer/DesignerDetails";
import Campaign from "./components/campaign/Campaign";
import CampaignDetails from "./components/campaign/CampaignDetails";
import RequestProgress from "./components/client/progress/RequestProgress";
import History from "./components/history/ClientHistory";
import DistributionPartner from "./components/distributionpartner/DistributionPartner";
import TrackView from "./components/CampainView/TrackView";

const UserContext = createContext();

const Routing = () => {
  // const navigate = useNavigate();
  // const {state, dispatch} = useContext(UserContext);

  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem("user"));
  //   // console.log(user);
  //   if(user)
  //   {
  //     dispatch({type: "USER", payload: user})
  //     navigate("/admin");
  //   }
  //   else{
  //     navigate("/");
  //   }
  // },[]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route
          path="/adminaccountmanagerhistory"
          element={<AdminAccountManagerHistory />}
        />
        <Route path="/signindesigner" element={<SignInDesigner />} />
        <Route path="/designer" element={<Designer />} />
        <Route path="/designercampain" element={<DesignerCampain />} />
        <Route path="/designerdetails/:id" element={<DesignerDetails />} />
        <Route path="/signinadmin" element={<SignInAdmin />} />
        <Route path="/admin" element={<Admin />} />
        <Route
          path="/signinaccountmanager"
          element={<SignInAccountManager />}
        />
        <Route path="/accountmanager" element={<AccountManager />} />
        <Route path="/signinclient" element={<SignInClient />} />
        <Route path="/client" element={<Client />} />
        <Route path="/signupclient" element={<SignUpClient />} />
        <Route path="/newrequest" element={<NewRequest />} />
        <Route path="/pendingrequests" element={<PendingRequests />} />
        <Route path="/approvedrequests" element={<ApprovedRequests />} />
        <Route path="/rejectedrequests" element={<RejectedRequests />} />
        <Route path="/Campaign" element={<Campaign />} />
        <Route path="/CampaignDetails/:id" element={<CampaignDetails />} />
        <Route path="/requestprogress" element={<RequestProgress />} />
        <Route path="/history" element={<History />} />
        <Route path="/distribution" element={<DistributionPartner />} />
        <Route path="/trackview/" element={<TrackView />} />
      </Routes>
    </>
  );
};

function App() {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
export { UserContext };
