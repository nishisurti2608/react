//cerate an elemnt first

const heading = React.createElement(
  "h1",
  { id: "parent", color: "blue" },
  "Hello from React"
); // creating element using createElement method which will take 3 arguments : tag name, attributes, value

console.log(heading); // checking output : Object

//informing JS where to upt our h1 tag

const root = ReactDOM.createRoot(document.getElementById("root")); // taking root from html file
root.render(heading); //apending child
