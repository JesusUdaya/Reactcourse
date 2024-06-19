const parent = React.createElement ("div",
{id:"parentelement"},
   [ React.createElement ("div",{id:"child1"},
        [
            React.createElement("h2",{id:"heading2"},"jesus creates the world"),
            React.createElement("h4",{id:"heading4"},"jesus is my father")
        ]
    ),
    React.createElement ("div",{id:"child2"},
        [
            React.createElement("p",{id:"para"},"jesus creates the world"),
            React.createElement("strong",{id:"strongtag"},"jesus is my father")
        ]
    )
  ]
);


const heading = React.createElement ("h1", {id:"styling"}, "jesus is my saviour");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent); 

console.log(parent);



