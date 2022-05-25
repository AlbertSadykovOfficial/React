import React from "react";
import { render } from "react-dom";
import ColorProvider from "./statement/ColorProvider";
import App from "./components/App";

render(
  <ColorProvider>
    <App />
  </ColorProvider>,
  document.getElementById("root")
);
