
function updateActivities() {
    const categorySelect = document.getElementById("category");
    const activitySelect = document.getElementById("activity");
    activitySelect.innerHTML = '<option selected>Select one</option>'; 

    const selectedCategory = categorySelect.value;
    if (selectedCategory) {
        activities.forEach(activity => {
            if (activity.category === selectedCategory) {
                const option = document.createElement("option");
                option.value = activity.id;
                option.textContent = activity.name;
                activitySelect.appendChild(option);
            }
        });
    }
}

function showActivityDetails() {
    const activitySelect = document.getElementById("activity");
    const selectedActivity = activities.find(activity => activity.id === activitySelect.value);
    const detailsDiv = document.getElementById("activity-details");
    const purchaseForm = document.getElementById("purchase-form");
    const messageDiv = document.getElementById("message");

    if (selectedActivity) {
        detailsDiv.innerHTML = `
            <h3>${selectedActivity.name}</h3>
            <p><strong>ID:</strong> ${selectedActivity.id}</p>
            <p><strong>Description:</strong> ${selectedActivity.description}</p>
            <p><strong>Location:</strong> ${selectedActivity.location}</p>
            <p><strong>Price:</strong> $${selectedActivity.price.toFixed(2)}</p>
        `;

        purchaseForm.style.display = selectedActivity.price > 0 ? "block" : "none";
        messageDiv.innerHTML = ""; 
    } else {
        detailsDiv.innerHTML = "";
        purchaseForm.style.display = "none";
        messageDiv.innerHTML = "";
    }
}

function handlePurchase(event) {
    event.preventDefault();
    const ticketCount = document.getElementById("ticket-count").value;
    const selectedActivity = activities.find(activity => activity.id === document.getElementById("activity").value);
    const email = document.getElementById("email").value;
    const totalAmount = (ticketCount * selectedActivity.price).toFixed(2);

    const messageDiv = document.getElementById("message");
    messageDiv.innerHTML = `Your credit card has been charged $${totalAmount} for ${ticketCount} ticket(s) to ${selectedActivity.name}. A confirmation email has been sent to ${email}.`;

   
    document.getElementById("purchase-form").reset();
}



// document.addEventListener("DOMContentLoaded", ()=>{
//     document.body.innerHTML += `
//     <div> Categories </div>
//     <select id="cats"></select>

//     <div> Activities </div>
//     <select id="acts"></select>

//     <div> Details </div>
//     <table id = "details"> </table>
//      `
// })

// for(c of catagories){
//     cats.appendChild(new Option(c));
// }

// cats.addEventListener("change", ()=>{
//     acts.innerHTML = "";
//     for(a of activities){
//         if(a.id === a.category){
//             acts.appendChild(new Option(a.name, a.id));
//         }
//     }
// });

// acts.addEventListener("change", ()=>{
//     details.innerHTML = "";
//     for(a of activities){
//     if(a.id === acts.value){
//         for(prop in a){
//             let value = a[prop];
//             details.innerHTML +=`
//             <tr>
//             <th> ${prop} </th>
//             <td> ${value} </td>
//             </tr>
//             `;
//         }
//     }
//   }
// })

// document.addEventListener("DOMContentLoaded", ()=>{
    

//     for(c of categories){
//         document.body.innerHTML += ;
//     }
// });