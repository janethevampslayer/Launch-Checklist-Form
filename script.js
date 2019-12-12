window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass");
      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All fields are required!");
         event.preventDefault();
      } else if (!isNaN(pilotNameInput.value) || !isNaN(copilotNameInput.value)) {
         alert("Please enter a valid name.");
         event.preventDefault();
      } else if (isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)) {
         alert("Please enter a valid number for fuel level and cargo mass.");
         event.preventDefault();
      } else {document.getElementById("pilotStatus").innerHTML = 
      `${pilotNameInput.value} Ready!`;
      event.preventDefault();
      
      document.getElementById("copilotStatus").innerHTML =
      `${copilotNameInput.value} Ready!`;
      event.preventDefault();

      if (fuelLevelInput.value < 10000) {
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("fuelStatus").innerHTML = 
         `${fuelLevelInput.value}L is not enough fuel for the journey.`;
         document.getElementById("launchStatus").innerHTML = 
         `Shuttle not ready for launch.`;
         document.getElementById("launchStatus").style.color="red";
         event.preventDefault();
      };

      if (cargoMassInput.value > 10000) {
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("cargoStatus").innerHTML =
         `${cargoMassInput.value}kg is too much mass for the shuttle to take off.`;
         document.getElementById("launchStatus").innerHTML = 
         `Shuttle not ready for launch.`;
         document.getElementById("launchStatus").style.color="red";
         event.preventDefault();
      } else {
         document.getElementById("launchStatus").innerHTML = 
         `Shuttle is ready for launch.`;
         document.getElementById("launchStatus").style.color="green";
         event.preventDefault();
      }
      };
   });
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then( function(json) {
         let missionTarget = document.getElementById("missionTarget");
         missionTarget.innerHTML =
         `<div id="missionTarget">
            <h2>Mission Destination</h2>
               <ol>
                  <li>Name: ${json[4]["name"]}</li>
                  <li>Diameter: ${json[4]["diameter"]}</li>
                  <li>Star: ${json[4]["star"]}</li>
                  <li>Distance from Earth: ${json[4]["distance"]}</li>
                  <li>Number of Moons: ${json[4]["moons"]}</li>
               </ol>
               <img src="${json[4]["image"]}">
               </div>`
      });
   });
});

