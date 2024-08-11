import React from "react";
import ReactDOM from "react-dom/client";

//nested elements
/* <div id = "parent">
    <div id ="child">
        <h1></h1>
        <h2></h2> // need to declare as array
    </div>
     <div id ="child2">
        <h1></h1>
        <h2></h2> // need to declare as array
    </div>
</div> */

const parent = React.createElement(
  "div",
  { id: "parent" },

  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello i'm a child"),
    React.createElement("h2", {}, "Hello i'm a child-2"),
  ]),
  React.createElement("div", { id: "child-2" }, [
    React.createElement("h1", {}, "Hello i'm a child"),
    React.createElement("h2", {}, "Hello i'm a child-2"),
  ])
); // creating element using createElement method which will take 3 arguments : tag name, attributes, value

console.log(parent); // checking output : Object

//informing JS where to upt our h1 tag

const root = ReactDOM.createRoot(document.getElementById("root")); // taking root from html file
root.render(parent); //apending child
