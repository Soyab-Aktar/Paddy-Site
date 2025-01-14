//*Load Category
const loadCategory = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((Response) => Response.json())
    .then((data) => displayCategory(data.categories))
    .catch((error) => console.log(error));
};
//*Display Category
const displayCategory = (categories) => {
  const categoryContainer = document.getElementById("category-container");
  categories.forEach((item) => {
    console.log(item.id);

    const btnContainer = document.createElement("div");
    btnContainer.innerHTML = `
        <button id='categoryBTN${item.id}' onclick="handleButton('categoryBTN${item.id}'); displayCategoryContent('${item.category}')" class=" flex items-center justify-center gap-2  px-4 py-2 rounded-full border border-teal-300 btn-wide w-full">
          <img class="w-12 h-12" src="${item.category_icon}" />
          <span class="font-medium text-teal-900">${item.category}</span>
        </button>
        `;
    categoryContainer.append(btnContainer);
  });
};
//* Handle Button Function
const handleButton = (buttonId) => {
  const buttons = document.querySelectorAll("#category-container button");
  buttons.forEach((button) =>
    button.classList.remove("bg-teal-100")
  );
  const clickedButton = document.getElementById(buttonId);
  if (clickedButton) {
    clickedButton.classList.add("bg-teal-100",);
  }
};
//* Display Category Based Content
const displayCategoryContent = (id) => {
  fetch(`https://openapi.programming-hero.com/api/peddy/category/${id}`)
    .then((Response) => Response.json())
    .then((data) => displayPets(data.data))
    .catch((error) => console.log(error));
};
//*Load Pets
const loadPets = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then((Response) => Response.json())
    .then((data) => displayPets(data.pets))
    .catch((error) => console.log(error));
};

//*Display Pets
const displayPets = (pets) => {
  const petsContainer = document.getElementById("pets-container");
  petsContainer.innerHTML = "";
  if (pets.length === 0) {
    petsContainer.classList.remove("grid");

    petsContainer.innerHTML = `
    <div class= "min-h-[300px] flex flex-col gap-5 justify-center items-center">
    <img src="images/error.webp" />
    <h3 class="font-bold">Oops!! No Content Here</h3>
    </div>
    `;
    return;
  } else {
    petsContainer.classList.add("grid");
  }
  pets.forEach((pet) => {
    // console.log(pet);

    const card = document.createElement("div");
    card.innerHTML = `
    <div class="w-full p-5 border border-teal-100 hover:border-teal-400 rounded-lg">
    <div class="">
    <img class="rounded-xl mb-5" src="${pet.image}"/>

    <h2 class="font-bold text-xl mb-3">${pet.pet_name}</h2>

    <div class="flex items-center gap-2">
    <img class="w-5 h-5" src="https://img.icons8.com/?size=256w&id=2740&format=png"/>
    <p>Breed: ${pet.breed}</p>
    </div>
    
    <div class="flex items-center gap-2">
    <img class="w-5 h-5" src="https://img.icons8.com/?size=256w&id=UTe6yKq2hvHK&format=png"/>
    <p>Birth: ${pet.date_of_birth}</p>
    </div>

    <div class="flex items-center gap-2">
    <img class="w-5 h-5" src="https://img.icons8.com/?size=256w&id=1665&format=png"/>
    <p>Gender: ${pet.gender}</p>
    </div>

    <div class="flex items-center gap-2">
    <img class="w-5 h-5" src="https://img.icons8.com/?size=256w&id=7172&format=png"/>
    <p>Price: ${pet.price}$</p>
    </div>

    <div class= "flex justify-between px-1 mt-7">
    <button class= " btn cursor-pointer border-teal-100 hover:bg-white hover:border-teal-500" onclick="getImagedata('${pet.image}')"><img class="w-5 h-5 " src="https://img.icons8.com/?size=256w&id=581&format=png"/></button>
    <button class= " btn cursor-pointer border-teal-100 hover:bg-white hover:border-teal-500" onclick="LoadCongratesModal(${pet.petId})">Adopt</button>
    <button class= " btn cursor-pointer border-teal-100 hover:bg-white hover:border-teal-500" onclick="loadModel(${pet.petId})">Details</button>
    </div>
    
  </div>
</div>
        `;

    petsContainer.append(card);
  });
};

//* Insert Image to a new Container
const getImagedata = (imageData) => {
  const textData = document.getElementById("path");
  textData.classList.add("hidden");
  const likeContainer = document.getElementById("like-container");
  const div = document.createElement("div");

  div.innerHTML = `
  <img class="w-full rounded-md" src="${imageData}"/>
  `;
  likeContainer.append(div);
};
//*Load Modal by using Details Button
const loadModel = async (id) => {
  console.log(id);
  const url = `https://openapi.programming-hero.com/api/peddy/pet/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  displayModel(data.petData);
};
//*Display Modal by using Details Button
const displayModel = (details) => {
  console.log(details);
  const modalContent = document.getElementById("modalcontent");
  document.getElementById("showModal").click();

  modalContent.innerHTML = `
  <div class="flex justify-center mb-3">
  <img class="rounded-lg" src="${details.image}"/>
  </div>
  <h1 class="font-extrabold text-xl mb-3">${details.pet_name}</h1>
  <div class="grid grid-cols-2 gap-1 mb-3">
      <div class="flex items-center gap-2">
    <img class="w-5 h-5" src="https://img.icons8.com/?size=256w&id=2740&format=png"/>
    <p>Breed: ${details.breed}</p>
    </div>
    
    <div class="flex items-center gap-2">
    <img class="w-5 h-5" src="https://img.icons8.com/?size=256w&id=UTe6yKq2hvHK&format=png"/>
    <p>Birth: ${details.date_of_birth}</p>
    </div>

    <div class="flex items-center gap-2">
    <img class="w-5 h-5" src="https://img.icons8.com/?size=256w&id=1665&format=png"/>
    <p>Gender: ${details.gender}</p>
    </div>

    <div class="flex items-center gap-2">
    <img class="w-5 h-5" src="https://img.icons8.com/?size=256w&id=7172&format=png"/>
    <p>Price: ${details.price}$</p>
    </div>

    <div class="flex items-center gap-2">
    <img class="w-5 h-5" src="https://img.icons8.com/?size=256w&id=1665&format=png"/>
    <p>Vaccinated status: ${details.vaccinated_status}</p>
    </div>
  </div>

  <p class="font-bold text-sm mb-3">Details Information</p>

  <p>${details.pet_details}</p>
  
  `;
};
//*Load Modal by using Adopt Button
const LoadCongratesModal = async (id) => {
  console.log(id);
  const url = `https://openapi.programming-hero.com/api/peddy/pet/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  displayCongratesModal(data.petData);
};
let intervalId = null;
let timeoutId = null;

const displayCongratesModal = (details) => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
  if (timeoutId) {
    clearTimeout(timeoutId);
    timeoutId = null;
  }
  document.getElementById("congratesModal").click();
  const content = document.getElementById("countdown");

  let counter = 3;

  content.innerHTML = `<h1 class = "font-extrabold text-5xl">${counter}</h1>`;

  intervalId = setInterval(() => {
    counter--;
    console.log(counter);

    if (counter > 0) {
      content.innerHTML = `<h1 class = "font-extrabold text-5xl">${counter}</h1>`;
    } else {
      // Clear interval when counter reaches 0
      clearInterval(intervalId);
      intervalId = null;
      console.log("Counter stopped!");
    }
  }, 1000);

  timeoutId = setTimeout(() => {
    const modal = document.getElementById("my_modal_1");
    modal.close();
    timeoutId = null;
  }, 3000);
};

loadCategory();
loadPets();
