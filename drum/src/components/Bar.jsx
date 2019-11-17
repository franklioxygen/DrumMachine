import React from "react";
import playAudio from "../static/js/playAudios";
import "../App.css";

class Bar extends React.Component {
  constructor(props) {
    super(props);
    this.changeSel = this.changeSel.bind(this);
    this.state = {
      barId: this.props.barId,
      selected: false,
      playNow: false,
      clearSwitch: this.props.clearSwitch,
      doClear: false
    };
  }

  changeSel() {
    this.setState({ selected: !this.state.selected });
  }

  componentDidUpdate() {
    if (
      this.props.barId === this.props.currBar &&
      this.state.selected === true
    ) {
      playAudio(this.props.instrument, this.props.vol);
    }
    if (this.props.clearSwitch !== this.state.clearSwitch) {
      this.setState({
        clearSwitch: this.props.clearSwitch,
        selected: false
      });
    }
  }

  render() {
    let playNow = this.state.barId === this.props.currBar;

    return (
      <span
        className={["bar" + this.state.selected + playNow, "bar"].join(" ")}
        onClick={this.changeSel}
      ></span>
    );
  }
}
export default Bar;
