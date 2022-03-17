import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import "./Progressbar.css";

function RequestProgressBar({ progress }) {
  return (
    <ProgressBar percent={progress}>
      <Step>
        {({ accomplished, index }) => (
          <>
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
              style={{ position: "absolute" }}
            >
              {index + 1}
            </div>
            <div
              style={{
                position: "relative",
                top: "40px",
                left: "0px",
                color: "green",
              }}
            >
              Approved
            </div>
          </>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <>
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
              style={{ position: "absolute" }}
            >
              {index + 1}
            </div>
            <div
              style={{
                position: "relative",
                top: "40px",
                left: "0px",
                color: "green",
              }}
            >
              Graphic designer assigned
            </div>
          </>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <>
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
              style={{ position: "absolute" }}
            >
              {index + 1}
            </div>
            <div
              style={{
                position: "relative",
                top: "40px",
                left: "0px",
                color: "green",
              }}
            >
              Video verified by you
            </div>
          </>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <>
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
              style={{ position: "absolute" }}
            >
              {index + 1}
            </div>
            <div
              style={{
                position: "relative",
                top: "40px",
                left: "0px",
                color: "green",
              }}
            >
              Distribution partner assigned
            </div>
          </>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <>
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
              style={{ position: "absolute" }}
            >
              {index + 1}
            </div>
            <div
              style={{
                position: "relative",
                top: "40px",
                left: "0px",
                color: "green",
              }}
            >
              View target achived
            </div>
          </>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <>
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
              style={{ position: "absolute" }}
            >
              {index + 1}
            </div>
            <div
              style={{
                position: "relative",
                top: "40px",
                left: "0px",
                color: "green",
              }}
            >
              Completed
            </div>
          </>
        )}
      </Step>
    </ProgressBar>
  );
}

export default RequestProgressBar;
