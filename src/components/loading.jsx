import React from "react";
import { PropagateLoader } from "react-spinners";

export default class Loading extends React.Component {
  render() {
    return (
      <div className="loading">
        <PropagateLoader color="#2c7eb4" />
      </div>
    );
  }
}
