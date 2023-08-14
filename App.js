const root = ReactDOM.createRoot(document.getElementById("root"));
const parent = React.createElement("div", { id: "parent" }, 
React.createElement("div", { id: "child" }, 
[React.createElement("h1", { id: "heading" }, "Hello World from React !!!!"), React.createElement("h2", { id: "heading" }, "Hello World from Javascript !!!!")]));

root.render(parent);

console.log(parent);