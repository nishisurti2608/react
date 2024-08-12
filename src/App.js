import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";

const App = () => {
  return <Header />;
};

const root = ReactDOM.createRoot(document.getElementById("root")); // taking root from html file
root.render(<App />);
