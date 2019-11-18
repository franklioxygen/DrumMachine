import React from "react";
import "../App.css";
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beat: 0,
      isOn: false,
      bpm: 120
    };
    this.playTimer = this.playTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.adjustBpm = this.adjustBpm.bind(this);
  }

  // start beat with designed bpm
  playTimer() {
    this.setState({
      isOn: true,
      beat: this.state.beat
    });
    this.beat = setInterval(() => {
      this.setState({
        beat:
          this.state.beat === this.props.totalBars - 1 ? 0 : this.state.beat + 1
      });
      this.props.beatHandler(this.state.beat);
    }, (1000 * 60) / this.state.bpm);
  }
  // pause beat
  pauseTimer() {
    this.setState({ isOn: false });
    clearInterval(this.beat);
  }
  // stop beat
  stopTimer() {
    this.setState({ beat: 0, isOn: false });
    clearInterval(this.beat);
    this.props.stopHandler();
  }
  // adjust beat,

  adjustBpm() {
    this.setState({
      bpm: document.getElementById("bpmRange").value
    });
    clearInterval(this.beat);
    this.beat = setInterval(() => {
      this.setState({
        beat:
          this.state.beat === this.props.totalBars - 1 ? 0 : this.state.beat + 1
      });
      this.props.beatHandler(this.state.beat);
    }, (1000 * 60) / this.state.bpm);
  }

  render() {
    let playOrPause =
      this.state.beat === 0 || !this.state.isOn ? (
        <button
          className={"button"}
          id="playOrPauseBtn"
          onClick={this.playTimer}
        >
          &#9658;
        </button>
      ) : (
        <button
          className={"button"}
          id="playOrPauseBtn"
          onClick={this.pauseTimer}
        >
          &#10074;&#10074;
        </button>
      );

    let stop = (
      <button
        className={"button"}
        id="stopBtn"
        onClick={this.stopTimer}
        disabled={!this.state.isOn && this.state.beat === 0}
      >
        &#9724;
      </button>
    );

    return (
      <span>
        <input
          id="bpmRange"
          type="range"
          min="30"
          max="180"
          step="5"
          className="slider"
          value={this.state.bpm}
          onChange={this.adjustBpm}
        ></input>
        <label data-testid="bpmLabel" className="label">
          BPM:{this.state.bpm}
        </label>
        <span className="btn-group">
          {playOrPause}
          {stop}
        </span>
      </span>
    );
  }
}

export default Clock;
