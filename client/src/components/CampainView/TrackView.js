import React from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router";

function TrackView({ videourl }) {
  //   console.log(
  //     "🚀 ~ file: TrackView.js ~ line 5 ~ TrackView ~ videourl",
  //     videourl
  //   );
  //   let { link } = useParams();
  //   console.log(link);
  //   //   let urllinkdata = document.location.toString();
  //   //   let c = urllinkdata.searchParams.get("link");
  //   //   console.log(c);

  const location = useLocation();
  //   const { description, title, images } = location.state.question;
  console.log(location.state);

  return (
    <>
      <p>link : {videourl}</p>
    </>
  );
}

export default TrackView;
