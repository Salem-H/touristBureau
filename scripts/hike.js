// function updateHikes() {
//     const hikeSelect = document.getElementById("hike");
//     hikeSelect.innerHTML = '<option selected>Select one</option>'; // Reset hike dropdown

//     hikes.forEach(hike => {
//         const option = document.createElement("option");
//         option.value = hike.id;
//         option.textContent = hike.name;
//         hikeSelect.appendChild(option);
//     });
// }

// function showHikeDetails() {
//     const hikeSelect = document.getElementById("hike");
//     const selectedHike = hikes.find(hike => hike.id === hikeSelect.value);
//     const detailsDiv = document.getElementById("hike-details");

//     if (selectedHike) {
//         detailsDiv.innerHTML = `
//             <h3>${selectedHike.name}</h3>
//             <p><strong>ID:</strong> ${selectedHike.id}</p>
//             <p><strong>Description:</strong> ${selectedHike.description}</p>
//             <p><strong>Length:</strong> ${selectedHike.length}</p>
//             <p><strong>Difficulty:</strong> ${selectedHike.difficulty} (1-5 scale)</p>
//             <img id="scenic-image" src="${selectedHike.scenicImage}" alt="${selectedHike.name} scenic view" style="width: 300px; height: auto;">
//             <img id="trail-map-image" src="${selectedHike.trailMapImage}" alt="${selectedHike.name} trail map" style="width: 300px; height: auto;">
//         `;
//     } else {
//         detailsDiv.innerHTML = "";
//     }
// }

// window.onload = updateHikes;

function getHikeDetail(hike){
    const path = "./HikingPage/";
    return `
    <pre>
       id: ${hike.id}, 
       name: ${hike.name}, 
       description: ${hike.description},
       length:${hike.length}, 
       difficulty: ${hike.difficulty},
       </pre>

       Scenic Image: <img src="${ path + hike.scenicImage}">,
       Trail Map Image:  <img src="${ path + hike.trailMapImage}">
    `;
}

document.addEventListener("DOMContentLoaded", ()=>{

    for(h of hikes){
        hikeSelect.appendChild(new Option(h.name));
    }

    hikeSelect.addEventListener("change", ()=>{
        for(hike of hikes){
            if(hikeSelect.value === hike.name){
                hikeDiv.innerHTML = getHikeDetail(hike);
        }
       }
    })
    
})