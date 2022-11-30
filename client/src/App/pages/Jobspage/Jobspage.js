import React from "react";
import Card from "../../components/Card";

function Jobs() {
  return (
    <div className="wrapper">
      <div className="jobsHead">
        <h1>Welcome to Jobs page</h1>
        <h2>Find all the listings of various jobs here !! </h2>
      </div>
      <Card id="Jobs"></Card>
    </div>
  );
}

export default Jobs;