import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

function App({ status, name, using }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>We're {status === "Open" ? "Open!" : "Closed!"}</h2>
      <h3>{using ? "used here" : "not used here"}</h3>
    </div>
  );
}

App.propTypes = {
  status: PropTypes.oneOf(["Open", "Closed"]),
  name: PropTypes.string.isRequired,
  using: PropTypes.bool
};

ReactDOM.render(<App status="Open" />, document.getElementById("root"));
