import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders heading", () => {
  const { asFragment } = render(<h1> A Drum Beat Sequencer </h1>);
  expect(asFragment()).toMatchSnapshot();
});

it("has right initial volume and bpm", () => {
  const { getByTestId, getByText } = render(<App />);
  expect(getByTestId("volLabel")).toHaveTextContent("50");
  expect(getByTestId("bpmLabel")).toHaveTextContent("120");
});
