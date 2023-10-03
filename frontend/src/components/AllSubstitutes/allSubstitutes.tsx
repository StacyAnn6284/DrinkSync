import React from "react";
import MainSubstitute from "./mainSubstitute/mainSubstitute";
import SubstituteSubmission from "./SubstituteSubmission/substituteSubmission";
import SubstituteHeader from "./SubstituteHeaderAndNav/substituteHeader";
import SubstituteNav from "./SubstituteHeaderAndNav/substituteNav";
import "./allSubstitutes.css";

function AllSubstitutes() {
  return (
    <div className="all-substitutes">
      <div className="substitute-header-nav">
        <SubstituteHeader />
        <SubstituteNav />
      </div>
      <div className="substitutes-container">
        <MainSubstitute />
        <SubstituteSubmission />
      </div>
    </div>
  );
}

export default AllSubstitutes;
