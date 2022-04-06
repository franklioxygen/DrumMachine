import React from "react";
import "../App.css";

class Instrument extends React.Component {
  render() {
    return (
      <span className={["instrument", "bar"].join(" ")}>
        {this.props.instrument}
      </span>
    );
  }
}
export default Instrument;
