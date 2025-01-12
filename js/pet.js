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
    // console.log(item);

    const btnContainer = document.createElement("div");
    btnContainer.innerHTML = `
        <button class="flex items-center justify-center gap-2  px-4 py-2 rounded-full bg-sky-100 border border-teal-600 btn-wide w-full">
          <img class="w-12 h-12" src="${item.category_icon}" />
          <span class="font-medium text-teal-900">${item.category}</span>
        </button>
        `;
    categoryContainer.append(btnContainer);
  });
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
    <button class= " btn cursor-pointer border-teal-100 hover:bg-white hover:border-teal-500">Adopt</button>
    <button class= " btn cursor-pointer border-teal-100 hover:bg-white hover:border-teal-500" onclick="loadModel(${pet.petId})">Details</button>
    </div>
    
  </div>
</div>
        `;

    petsContainer.append(card);
  });
};

const getImagedata = (imageData) => {
  // console.log(imageData);
  const likeContainer = document.getElementById("like-container");
  const div = document.createElement("div");
  // div.classList.add="h-1/2"

  div.innerHTML = `
  <img class="w-full rounded-md" src="${imageData}"/>
  `;
  likeContainer.append(div);
};
const loadModel = async (id) => {
  console.log(id);
  const url = `https://openapi.programming-hero.com/api/peddy/pet/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  displayModel(data.petData);
};
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

loadCategory();
loadPets();
