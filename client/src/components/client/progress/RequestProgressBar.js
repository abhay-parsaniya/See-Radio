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
                top: "50px",
                left: "0px",
                color: "green",
              }}
            >
              {progress >= 0 ? (
                <span className="badge rounded-pill bg-success p-2">
                  Approved
                </span>
              ) : (
                <span className="badge rounded-pill bg-secondary p-2">
                  Approved
                </span>
              )}
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
                top: "50px",
                left: "0px",
                color: "green",
              }}
            >
              {progress >= 25 ? (
                <span className="badge rounded-pill bg-success p-2">
                  Graphic designer assigned
                </span>
              ) : (
                <span className="badge rounded-pill bg-secondary p-2">
                  Graphic designer assigned
                </span>
              )}
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
                top: "50px",
                left: "0px",
                color: "green",
              }}
            >
              {progress >= 50 ? (
                <span className="badge rounded-pill bg-success p-2">
                  Video verified by you
                </span>
              ) : (
                <span className="badge rounded-pill bg-secondary p-2">
                  Video verified by you
                </span>
              )}
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
                top: "50px",
                left: "0px",
                color: "green",
              }}
            >
              {progress >= 75 ? (
                <span className="badge rounded-pill bg-success p-2">
                  Distribution partner assigned
                </span>
              ) : (
                <span className="badge rounded-pill bg-secondary p-2">
                  Distribution partner assigned
                </span>
              )}
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
                top: "50px",
                left: "0px",
                color: "green",
              }}
            >
              {progress >= 100 ? (
                <span className="badge rounded-pill bg-success p-2">
                  View target achived
                </span>
              ) : (
                <span className="badge rounded-pill bg-secondary p-2">
                  View target achived
                </span>
              )}
            </div>
          </>
        )}
      </Step>
    </ProgressBar>
  );
}

export default RequestProgressBar;
