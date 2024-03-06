const submit = document.getElementById("submit");

submit.addEventListener("click", function () {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const dataDisplay = document.getElementById("dataContainer");

      const nameElement = document.createElement("p");
      nameElement.textContent = "Name: " + data.person.name;

      const cityElement = document.createElement("p");
      cityElement.textContent = "City: " + data.person.city;

      const ageElement = document.createElement("p");
      ageElement.textContent = "Age: " + data.person.age;

      dataDisplay.appendChild(nameElement);
      dataDisplay.appendChild(cityElement);
      dataDisplay.appendChild(ageElement);

      const personProfile = `
      <div class="personProfile">
      <h2>${data.person.name}</h2>
      <p>${data.person.city}</p>
      <p>${data.person.age}</p>
      </div>
    `;
      dataDisplay.innerHTML += personProfile;
    })
    .catch((error) => console.error("Error fetching JSON data: ", error));
});
