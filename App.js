   
   // currency converter app.............................
 
 const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromcurr = document.querySelector(".from select");
const tocurr = document.querySelector(".to select");
const msg = document.querySelector(".msg")

window.addEventListener("load", () => {
    

})


 // country list with currcode...............

 for (let select of dropdowns) {
    for ( let currcode in countryList) {

        let NewOption = document.createElement("option");
        NewOption.innerText = currcode;
        NewOption.value = currcode;
        if(select.name === "from" && currcode === 'USD') {
            NewOption.selected = "selected";
        } else if(select.name === "to" && currcode === 'INR') {
            NewOption.selected = "selected";
        }
        select.append(NewOption);
    }

    select.addEventListener("change", (evt) =>{
        updateFlag(evt.target);
    });

 }


 // update flag icon.................

 const  updateFlag =(element) => {
    let currcode = element.value;
    let countrycode = countryList[currcode];
    let newSrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    if(img) {
    img.src = newSrc;
    };
 };

// On page load..............................
window.addEventListener("load", () => {
  updateFlag(fromcurr);
  updateFlag(tocurr);
  updateExchangeRate();
});

// convert button click............

btn.addEventListener("click",  (evt) => {
    evt.preventDefault();
updateExchangeRate();

});

 // fetch and display exchange rate...........

 const updateExchangeRate = async() => {
    let amount = document.querySelector(".amount input");
    let amtval = parseFloat(amount.value);
    if (amtval === "" || isNaN(amtval) || amtval < 0) {
    amtval = 1;
    amount.value = "1";
}


  const fromCode = fromcurr.value.toLowerCase();
  const toCode = tocurr.value.toLowerCase();
  const URL = `${BASE_URL}/${fromCode}.json`;

  try {
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[fromCode][toCode];

    if (!rate) {
    msg.innerText = "Exchange rate not available.";
    return;
    }

    let finalAmount = (amtval * rate).toFixed(2);
    msg.innerText = `${amtval} ${fromcurr.value} = ${finalAmount} ${tocurr.value}`;
  } catch (error) {
    msg.innerText = "Failed to fetch exchange rate.";
    console.error("Fetch error:", error);
  }
};




// const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

// const dropdowns = document.querySelectorAll(".dropdown select");
// const btn = document.querySelector("form button");
// const fromcurr = document.querySelector(".from select");
// const tocurr = document.querySelector(".to select");
// const msg = document.querySelector(".msg");

// // Set dropdown options
// for (let select of dropdowns) {
//   for (let currcode in countryList) {
//     let NewOption = document.createElement("option");
//     NewOption.innerText = currcode;
//     NewOption.value = currcode;

//     // Default selections
//     if (select.name === "from" && currcode === "USD") {
//       NewOption.selected = "selected";
//     } else if (select.name === "to" && currcode === "INR") {
//       NewOption.selected = "selected";
//     }

//     select.append(NewOption);
//   }

//   // Update flag when currency changes
//   select.addEventListener("change", (evt) => {
//     updateFlag(evt.target);
//   });
// }

// // Update flag icon
// const updateFlag = (element) => {
//   let currcode = element.value.toUpperCase();
//   let countrycode = countryList[currcode];
//   let newSrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
//   let img = element.parentElement.querySelector("img");
//   if (img) {
//     img.src = newSrc;
//   }
// };

// // On page load
// window.addEventListener("load", () => {
//   updateFlag(fromcurr);
//   updateFlag(tocurr);
//   updateExchangeRate();
// });

// // Convert button click
// btn.addEventListener("click", (evt) => {
//   evt.preventDefault();
//   updateExchangeRate();
// });

// // Fetch and display exchange rate
// const updateExchangeRate = async () => {
//   let amount = document.querySelector(".amount input");
//   let amtval = parseFloat(amount.value);

//   if (isNaN(amtval) || amtval <= 0) {
//     amtval = 1;
//     amount.value = "1";
//   }

//   const fromCode = fromcurr.value.toLowerCase();
//   const toCode = tocurr.value.toLowerCase();
//   const URL = `${BASE_URL}/${fromCode}.json`;

//   try {
//     let response = await fetch(URL);
//     let data = await response.json();
//     let rate = data[fromCode][toCode];

//     if (!rate) {
//       msg.innerText = "Exchange rate not available.";
//       return;
//     }

//     let finalAmount = (amtval * rate).toFixed(2);
//     msg.innerText = `${amtval} ${fromcurr.value} = ${finalAmount} ${tocurr.value}`;
//   } catch (error) {
//     msg.innerText = "Failed to fetch exchange rate.";
//     console.error("Fetch error:", error);
//   }
// };
