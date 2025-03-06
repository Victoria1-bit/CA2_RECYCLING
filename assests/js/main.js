const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active');
});



// window.onload = () => {
//     let url = `https://derek.comp.dkit.ie/java_script/example_code/recycling.json`;

//     fetch(url)
//         .then(response => response.json())
//         .then(jsonData => {
//             recycles = [...new Set(jsonData.materials)];
//             console.log("materials", recycles);

//             keys = ["name", "environmental_impact", "bin_colour", "accepted_items", "non_accepted_items"];
//             console.log("keys", keys);

//             roles = recycles.map(recycle => recycle.type);
//             roleCheckboxes = [...new Set(roles)].sort();
//             console.log("roleCheckboxes", roleCheckboxes);

//             displayCheckboxes('roles', roleCheckboxes);
//             displayrecyclesTable();
//         });
// };

// let recycles = [];
// let keys = {};
// let roles = [];
// let roleCheckboxes = [];
// let sortAssendingOrder = true;
// let lastSortColumnName = "forename";
// let searchValue = "";

// // Function to display roles as checkboxes
// function displayCheckboxes(divName, checkboxes) {
//     let htmlString = "";
//     checkboxes.forEach(role => htmlString += `<label for="${role}">${role}</label><input id="${role}" type="checkbox" checked="true" onclick="displayrecyclesTable()">`);
//     document.getElementById(divName).innerHTML = htmlString;
// }

// // Function to handle search
// function search(value) {
//     searchValue = value;
//     displayrecyclesTable();
// }

// // Function to display recycle table
// function displayrecyclesTable() {
//     let recyclesToDisplay = recycles;
//     console.log("recyclesToDisplay", recyclesToDisplay);

//     // Filter by role
//     let filteredRoles = roleCheckboxes.filter(role => document.getElementById(role).checked);
//     recyclesToDisplay = recyclesToDisplay.filter(recycle => filteredRoles.includes(recycle.type));

//     // Create table HTML
//     let arrow = sortAssendingOrder === true ? "▲" : "▼";
//     let htmlString = `<table id="recyclesTable"><tr>`;

//     keys.forEach(key => htmlString += `<th onclick=sort("${key}")>${key}${lastSortColumnName === key ? arrow : ""}</th>`);

//     htmlString += `</tr>`;

//     recyclesToDisplay.forEach(recycle => {
//         recycle.categories.forEach(category => {
//             htmlString += `<tr onclick="viewDetails(${category.name})">`;
//             keys.forEach(key => htmlString += `<td>${category[key]}</td>`);
//             htmlString += `<td><button onclick="deleteRow(${category.name})">Delete</button></td>`;  // Delete button for each row
//             htmlString += `</tr>`;
//         });
//     });

//     htmlString += `</table>`;
//     document.getElementById("recycleTable").innerHTML = htmlString;
// }

// // Function to sort
// function sort(key) {
//     if (lastSortColumnName === key) {
//         sortAssendingOrder = !sortAssendingOrder;
//     } else {
//         lastSortColumnName = key;
//         sortAssendingOrder = true;
//     }

//     if (sortAssendingOrder) {
//         recycles.sort((a, b) => a[key] < b[key] ? -1 : 1);
//     } else {
//         recycles.sort((a, b) => a[key] < b[key] ? 1 : -1);
//     }
//     displayrecyclesTable();
// }

// // View details in modal
// function viewDetails(name) {
//     const recycle = recycles.find(r => r.name === name);
//     const modalContent = `
//         <div>
//             <h2>Details for ${name}</h2>
//             <p>Environmental Impact: ${recycle.environmental_impact}</p>
//             <p>Bin Colour: ${recycle.bin_colour}</p>
//             <p>Accepted Items: ${recycle.accepted_items.join(", ")}</p>
//             <p>Non-Accepted Items: ${recycle.non_accepted_items.join(", ")}</p>
//             <button onclick="closeModal()">Close</button>
//         </div>
//     `;
//     document.getElementById("modalContent").innerHTML = modalContent;
//     document.getElementById("modal").style.display = "block";
// }

// // Close modal
// function closeModal() {
//     document.getElementById("modal").style.display = "none";
// }

// // Handle delete action
// function deleteRow(name) {
//     if (confirm("Are you sure you want to delete this item?")) {
//         recycles = recycles.filter(recycle => recycle.name !== name);
//         displayrecyclesTable();
//     }
// }