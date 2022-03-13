import React from "react";
import DesignerNavbar from "./DesignerNavbar";
import DesignerAssignedCampaignList from "./DesignerAssignedCampaignList";

const DesignerCampain = () => {
  return (
    <>
      <DesignerNavbar title={"Designer"} go={"signindesigner"} />
      <DesignerAssignedCampaignList />
    </>
  );
};

export default DesignerCampain;
