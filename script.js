// document.addEventListener("DOMContentLoaded", function () {
//   var elems = document.querySelectorAll(".sidenav");
//   var instances = M.Sidenav.init(elems, {});
// });

// const listEl = document.querySelector("ul");

// fetch("/data.json")
//   .then((response) => response.json())
//   .then((json) => console.log(json));
// "DOMContentLoaded",
//   function getData() {
//     fetch("data.json")
//       .then((response) => response.json())
//       .then((data) => console.log(data));
// const div = document.createElement("div");
//       div.innerHTML = `
//         <p>Name: ${obj.name}</p>`;

//       container.appendChild(div);
//       const dataDisplay = document.getElementById("dataDisplay");
//     })
//     .catch((error) => console.error("Error fetching JSON data:", error));
//   };

async function getData() {
  try {
    let response = await fetch("data.json");
    if (!response.ok) {
      throw new Error("Failed to fetvh data");
    }
    const data = await response.json();
    dataDisplay(data);
  } catch (error) {}
}
const gridRow = document.createElement("div");
gridRow.className = "row";

function dataDisplay(data) {
  // const item2 = data[1];
  // console.log(data[2]);
  // console.log(item2);
  const div = document.getElementById("dataDisplay");
  data.forEach((obj) => {
    const gridColumn = document.createElement("div");
    gridColumn.className = "col s3";
    const image = document.createElement("img");
    const name = document.createElement("p");
    const price1 = document.createElement("p");
    const description1 = document.createElement("p");

    image.className = "imageProduct";
    name.className = "productName";
    price1.className = "price";
    description1.className = "detail";

    image.src = obj.image;
    name.textContent = obj.name;
    price1.textContent = obj.price;
    description1.textContent = obj.detail;

    gridColumn.appendChild(image);
    gridColumn.appendChild(name);
    gridColumn.appendChild(price1);
    gridColumn.appendChild(description1);
    gridRow.appendChild(gridColumn);
    console.log(obj.image);
    // div.innerHTML = `
    //     <p>Name: ${obj.name}</p>
    //     <img src= ${ob.image}/>`;
  });
  div.appendChild(gridRow);
}

getData();
