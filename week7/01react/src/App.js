import React from "https://esm.sh/react@19.1.0";
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client";

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Max, chill and react - React - 19")
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
