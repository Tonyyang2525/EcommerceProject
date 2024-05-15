//async
async function getData() {
  //
  try {
    //fetch retrieves data from json, the await is an operator in method of JavaScript
    //the fetch data is stored in response so that once it is complete it can be used later
    //await is an operator that is used to wait for a promise and get its fullfillment value
    let response = await fetch("data.json");
    //
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    //response is an interface part of the fetch api. represents the response to a request
    const data = await response.json();
    //calling method
    dataDisplay(data);
  } catch (error) {}
}

function dataDisplay(data) {
  let gridRow = document.createElement("div");
  gridRow.className = "row";
  const div = document.getElementById("dataDisplay");
  data.forEach((obj, index) => {
    //index is a counter
    //for every 4th item create a new row, skip the fist row, the index does not = 0 so this fulfils the skip first row
    if (index !== 0 && index % 4 === 0) {
      //pushing a child element into an element,in this case div.
      div.appendChild(gridRow);
      //creating a new row
      gridRow = document.createElement("div");
      //naming the class row
      //row is a materilize css selector
      //creating new row, it adjusts the height problems
      //objects will not line up properly without the row class
      gridRow.className = "row";
    }
    //creating column
    const gridColumn = document.createElement("div");
    //m3 means it is a medium size, this refers to materialize css library
    //s12 means small screen size with 12 columns
    //col is a class that creates columns, built in from materialize
    //always starts with 12 columns in 1 row
    gridColumn.className = "col s12 m3";

    //creating variables
    const image = document.createElement("img");
    const name = document.createElement("h5");
    const price1 = document.createElement("h5");
    const description1 = document.createElement("p");
    const button = document.createElement("button");
    //creating classes out of objects from the data.json file
    image.className = "imageProduct";
    name.className = "productName";
    price1.className = "price";
    description1.className = "description";
    //changing text to display data
    image.src = obj.image;
    name.textContent = obj.name;
    price1.textContent = obj.price;
    description1.textContent = obj.description;
    button.textContent = "Add to Cart";

    //appendChild here pushes the objects in the html
    //specifically the appendChild method adds a node to the end of the list of children of a specified parent node
    //gridColumn is the parent
    gridColumn.appendChild(image);
    gridColumn.appendChild(name);
    gridColumn.appendChild(description1);
    gridColumn.appendChild(price1);
    gridColumn.appendChild(button);
    //displays the grid column
    //gridRow is the parent, grid column is the child
    gridRow.appendChild(gridColumn);
  });
  div.appendChild(gridRow);
}
//calls the method to display the json objects
getData();

/* hamburger menu*/
function hamburgerMenu() {
  //mobiel-demo is a css class
  var menu = document.getElementById("mobile-demo");
  //style is a JavaScript method, this is changing the style method to display none
  //this changes the display of the hamburger menu
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
