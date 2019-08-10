import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(
    <App />,
    document.getElementById("app"),
);

// Hot Module Replacement
declare let module: { hot: any };

if (module.hot) {
  module.hot.accept("./components/App", () => {
    const NewApp = require("./components/App").default;

    ReactDOM.render(<NewApp />, document.getElementById("app"));
  });
}
