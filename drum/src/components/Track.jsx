import React from "react";
import Bar from "./Bar";
import "../App.css";
import Instrument from "./Instrument";
class Track extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupNum: 4
    };
  }

  render() {
    return (
      <div className={"track"}>
        {/* front instrument indicator */}
        <Instrument
          instrument={this.props.instrument}
          onClick={this.selectAll}
        ></Instrument>
        {/* render following bars */}
        {[...Array(this.props.totalBars)].map((e, i) => (
          <span key={i}>
            <Bar
              barId={i}
              instrument={this.props.instrument}
              currBar={this.props.currBar}
              vol={this.props.vol}
              clearSwitch={this.props.clearSwitch}
            ></Bar>
            {/* group seprator */}
            {(i + 1) % this.state.groupNum === 0 &&
            i + 1 !== this.props.totalBars
              ? "."
              : null}
          </span>
        ))}
      </div>
    );
  }
}
export default Track;
