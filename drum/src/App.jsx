import React from "react";
import Track from "./components/Track";
import Clock from "./components/Clock";
import "./App.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.Track = React.createRef();
    this.state = {
      totalBars: 16,
      currBar: null,
      volume: 50,
      clearSwitch: false,
      instrument: [
        "808_bd_long",
        "808_bd_short",
        "808_ch",
        "808_clap",
        "808_clav",
        "808_cowbell",
        "808_cym",
        "808_ht"
      ]
    };
    this.beatHandler = this.beatHandler.bind(this);
    this.stopHandler = this.stopHandler.bind(this);
    this.adjustVol = this.adjustVol.bind(this);
  }
  // syncronize clock beat to bar
  beatHandler(beat) {
    this.setState({
      currBar: beat
    });
  }
  // click stop button
  stopHandler() {
    this.setState({ currBar: null });
  }
  // adjust volume
  adjustVol() {
    this.setState({
      volume: document.getElementById("volRange").value
    });
  }
  // clear all selected bars
  clearAll() {
    this.setState({ clearSwitch: !this.state.clearSwitch });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>A Drum Beat Sequencer</h1>
          <input
            id="volRange"
            type="range"
            min="0"
            max="100"
            step="5"
            className="slider"
            value={this.state.volume}
            onChange={this.adjustVol}
          ></input>
          <label data-testid="volLabel" className="label">
            VOL:{this.state.volume}%
          </label>
          <Clock
            beatHandler={this.beatHandler}
            stopHandler={this.stopHandler}
            totalBars={this.state.totalBars}
          ></Clock>
          <span className={"btn-group"}>
            <button className={"button"} onClick={() => this.clearAll()}>
              &#8634;
            </button>
          </span>
          {this.state.instrument.map((item, index) => {
            return (
              <Track
                key={index}
                instrument={item}
                currBar={this.state.currBar}
                totalBars={this.state.totalBars}
                vol={this.state.volume}
                clearSwitch={this.state.clearSwitch}
              ></Track>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
