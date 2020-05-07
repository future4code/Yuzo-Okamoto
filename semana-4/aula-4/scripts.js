
let expDatabase = [
    {
        type: "Essential",
        cost: "500",
        description: "Rent"    
    },
    {
        type: "Essential",
        cost: "100",
        description: "Internet" 
    },
    {
        type: "Extra",
        cost: "500",
        description: "iFood" 
    }
];

// expenses register function (exp = expenses abreviated)
function registerExpense() {
    
    let     expType = document.getElementById("exp-type"),
            expCost = document.getElementById("exp-cost"),
            expDescription = document.getElementById("exp-description");

    if (expType === "none" || expCost === "") {
        alert("Error: To register a new expense you need to inform it's type and value.");
    }
    else {
        const expTemp = [{}];

        expTemp.forEach((array) => {
            array.type = expType.value;
            array.cost = expCost.value;
            array.description = expDescription.value;
        });

        expDatabase.push(expTemp[0]);
        showAllExp(expDatabase);
    }
    
    event.preventDefault();

    // reset form data
    expType.value = "none";
    expCost.value = "";
    expDescription.value = "";
}

// Check if Enter was pressed and call the register function
function checkIfEnter(e) {
    if (e.key === "Enter") {
        registerExpense();
    }
}

// Show info on HTML
function showAllExp(expDB) {
    let showExpDiv = document.getElementById("show-exp-div");

    showExpDiv.innerHTML = "";

    for (let i = 0; i < expDB.length; i++) {
        showExpDiv.innerHTML += `
        <div class="exp-div">
            <div>
                <div>${expDB[i].type}</div>
                <div>${expDB[i].cost}</div>
            </div>
            <div>${expDB[i].description}</div>
        </div>
        `;
    }
}

// Filter expenses and show the result on HTML
function filterExp() {
    let filterType = document.getElementById("filter-type");
    
    if (filterType.value !== "none") {
        const expFilteredDB = expDatabase.filter((filter) => {
            return filter.type === filterType.value});
        console.log(expFilteredDB);
        showAllExp(expFilteredDB);
    }
    else {
        showAllExp(expDatabase);
    }

    event.preventDefault();
}

// // Calculate and show extract total cost
// function refreshExtract(expDB) {
//     let expExtract = document.getElementById("exp-extract");

//     expDB.

//     expExtract.innerHTML = "";

//     for (let i = 0; i < expDB.length; i++) {
//         showExpDiv.innerHTML += `
//         <div class="exp-div">
//             <div>
//                 <div>${expDB[i].type}</div>
//                 <div>${expDB[i].cost}</div>
//             </div>
//             <div>${expDB[i].description}</div>
//         </div>
//         `;
//     }
// }

// Show all expenses registered
showAllExp(expDatabase);

// Refresh extract sum
// refreshExtract(expDatabase);


