// Your provided JavaScript function

// const convertData = (data) => {
//   const { results } = data;
//   let cats = [];
//   let dogs = [];

//   results.forEach((result) => {
//     if (result.type === "cat") {
//       const catList = document.getElementById("catlist");
//       const cat = document.createElement("li");
//       cat.innerText = result.name;
//       catList.appendChild(cat);
//       cats.push(result);
//     } else {
//       const dogList = document.getElementById("doglist");
//       const dog = document.createElement("li");
//       dog.innerText = result.name;
//       dogList.appendChild(dog);
//       dogs.push(result);
//     }
//   });

//   return {
//     cats,
//     dogs,
//   };
// };
// const convertData = (data) => {
//   const { results } = data;
//   let cats = [];
//   let dogs = [];

//   results.forEach((result) => {
//     if (result.type === "cat") {
//       const catList = document.getElementById("catList");
//       const cat = document.createElement("li");
//       cat.innerText = result.name;
//       catList.appendChild(cat);
//       cats.push(result);
//     } else {
//       const dogList = document.getElementById("dogList");
//       const dog = document.createElement("li");
//       dog.innerText = result.name;
//       dogList.appendChild(dog);
//       dogs.push(result);
//     }
//   });
//   return {
//     cats,
//     dogs,
//   };
// };

// Example data with 10 result objects
// const exampleData = {
//   results: [
//     { type: "cat", name: "Fluffy" },
//     { type: "dog", name: "Buddy" },
//     { type: "cat", name: "Whiskers" },
//     { type: "dog", name: "Max" },
//     { type: "cat", name: "Mittens" },
//     { type: "dog", name: "Charlie" },
//     { type: "cat", name: "Tiger" },
//     { type: "dog", name: "Lucy" },
//     { type: "cat", name: "Shadow" },
//     { type: "dog", name: "Rocky" },
//   ],
// };

// Call the convertData function with the example data
// const result = convertData(exampleData);
// console.log(result);
// let arr = [27, 47, 39]
// let a = arr.map((value)=>{
//   return value +1
// })
// console.log(a);



// async function fetchWinePairing(dish) {
//   try{
//     const response =await fetch(`https://api.spoonacular.com/food/wine/pairing?apiKey=fb6b144009c94695ae974154fee279fe&food=${dish}`);
//     const data = await response.json();
    
//     return data;
//     console.log(data);
//   } catch(error){
//     throw error
//   }
// }

 async function fetchWinePairing(dish) {
    try {
      const response = await fetch( `https://api.spoonacular.com/food/wine/pairing?apiKey=fb6b144009c94695ae974154fee279fe&food=${dish}`);
      const data = await response.json();
      console.log(data);
      return data;
      
    } catch (error) {
      throw error;
    }
  }
  fetchWinePairing();
  

// document.body.innerHTML = homeContent;

// async function searchPairing() {
//   const dishInput = document.getElementById("dishInput");
//   const wineListContainer = document.getElementById("wineList");
//   const welcomeContainer = document.getElementById("welcomeCont");
//   // Clear previous results
//   wineListContainer.innerHTML = "";
//   welcomeContainer.innerHTML = "";
//   const dish = dishInput.value.trim();
//   if (!dish) {
//     alert("Please enter a dish!");
//     return;
//   }

//   try {
//     const data = await fetchWinePairing(dish);

//     if (data && data.pairedWines && data.pairedWines.length > 0) {
//       renderPairedWines(data.pairedWines, wineListContainer);
//       renderPairingText(data.pairingText, wineListContainer);
//       renderProductMatches(data.productMatches, wineListContainer);
//     } else {
//       alert("No wine pairings found for the specified dish.");
//     }
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     alert("An error occurred while fetching data. Please try again.");
//   }

//   dishInput.value = "";
// }

// const wineSearchForm = document.getElementById("wineMatch");
// wineSearchForm.addEventListener("submit", function (event) {
//   event.preventDefault();
//   searchPairing();
// });
//  function renderPairedWines(pairedWines, wineListContainer) {
//     document.getElementById("recipeCont").innerHTML = "";
//     wineListContainer.innerHTML += `
//       <div>
//         <p class= "paired-wines" > Paired Wines: ${pairedWines.join(", ")}</p>
//       </div>`;
//   }
  
//    function renderPairingText(pairingText, wineListContainer) {
//     wineListContainer.innerHTML += `
//       <p class="pairing-text">${pairingText}</p>`;
//   }
  
//    function renderProductMatches(productMatches, wineListContainer) {
//     if (productMatches && productMatches.length > 0) {
//       wineListContainer.innerHTML += `
//         <div class="wine-item">
//           <h3>Product Matches</h3>
//           ${productMatches
//             .map(
//               (product) => `
//             <div class="wine-items">
//               <img class="wine-image" src="${product.imageUrl}" alt="${product.title}">
              
//                 <h4>${product.title}</h4>
//                 <a class="product-link" href="${product.link}" target="_blank">BUY HERE</a>
             
//             </div>`
//             )
//             .join("")}
//         </div>`;
//     } else {
//       alert("No product matches found for the specified dish.");
//     }
//   }